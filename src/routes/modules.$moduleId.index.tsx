import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Trophy } from "lucide-react";
import { AppShell } from "@/components/app/AppShell";
import { ProgressBar } from "@/components/app/ProgressBar";
import { getModule } from "@/content/course";
import { useProgress } from "@/hooks/useProgress";

export const Route = createFileRoute("/modules/$moduleId/")({
  loader: ({ params }) => {
    const mod = getModule(params.moduleId);
    if (!mod) throw notFound();
    return { module: mod };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `Module ${loaderData.module.number} — ${loaderData.module.title}` },
          { name: "description", content: loaderData.module.description },
        ]
      : [{ title: "Module — Masterclass Wafa IMA" }],
  }),
  component: ModuleDetail,
  notFoundComponent: NotFoundModule,
});

function NotFoundModule() {
  return (
    <AppShell>
      <div className="py-16 text-center">
        <h1 className="font-serif text-2xl">Module introuvable</h1>
        <Link to="/modules" className="mt-4 inline-block text-sm text-primary hover:underline">
          Retour aux modules
        </Link>
      </div>
    </AppShell>
  );
}

function ModuleDetail() {
  const { module: mod } = Route.useLoaderData();
  const { isLessonRead, moduleProgress } = useProgress();
  const p = moduleProgress(mod.id);

  return (
    <AppShell>
      <Link to="/modules" className="text-xs text-muted-foreground hover:text-foreground">
        ← Tous les modules
      </Link>
      <div className="mt-4 flex items-start justify-between gap-6">
        <div>
          <div className="text-xs font-medium uppercase tracking-widest text-primary">
            Module {mod.number}
          </div>
          <h1 className="mt-1 font-serif text-3xl md:text-4xl">{mod.title}</h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">{mod.description}</p>
        </div>
        {p.completed && (
          <div className="hidden md:flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-800">
            <Trophy className="h-3.5 w-3.5" /> Module validé
          </div>
        )}
      </div>

      <div className="mt-6 max-w-md">
        <div className="flex items-baseline justify-between text-xs text-muted-foreground">
          <span>Progression</span>
          <span className="text-foreground">
            {p.readCount} / {p.total} leçons {p.quizScore > 0 && `· Quiz ${p.quizScore}%`}
          </span>
        </div>
        <ProgressBar value={p.percent} className="mt-2" />
      </div>

      <section className="mt-10">
        <h2 className="font-serif text-xl">Leçons</h2>
        <ol className="mt-4 space-y-2">
          {mod.lessons.map((lesson, i) => {
            const read = isLessonRead(mod.id, lesson.id);
            return (
              <li key={lesson.id}>
                <Link
                  to="/modules/$moduleId/lessons/$lessonId"
                  params={{ moduleId: mod.id, lessonId: lesson.id }}
                  className="group flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition hover:border-primary/40"
                >
                  <div
                    className={`flex h-8 w-8 flex-none items-center justify-center rounded-full text-xs font-medium ${
                      read
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    {read ? <CheckCircle2 className="h-4 w-4" /> : i + 1}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">{lesson.title}</div>
                    <div className="mt-0.5 text-sm text-muted-foreground">{lesson.summary}</div>
                  </div>
                  <ArrowRight className="mt-1 h-4 w-4 flex-none text-muted-foreground transition group-hover:translate-x-0.5 group-hover:text-primary" />
                </Link>
              </li>
            );
          })}
        </ol>
      </section>

      <section className="mt-10 rounded-2xl border-2 border-dashed border-primary/30 bg-primary/5 p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="text-xs font-medium uppercase tracking-widest text-primary">
              Validation
            </div>
            <h3 className="mt-1 font-serif text-xl">Quiz du module {mod.number}</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Testez vos acquis. 70% pour valider le module.
              {p.quizScore > 0 && ` Votre meilleur score : ${p.quizScore}%.`}
            </p>
          </div>
          <Link
            to="/modules/$moduleId/quiz"
            params={{ moduleId: mod.id }}
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            {p.quizScore > 0 ? "Repasser le quiz" : "Passer le quiz"}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </AppShell>
  );
}
