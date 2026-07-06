import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, CheckCircle2 } from "lucide-react";
import { AppShell } from "@/components/app/AppShell";
import { ProgressBar } from "@/components/app/ProgressBar";
import { course } from "@/content/course";
import { useProgress } from "@/hooks/useProgress";

export const Route = createFileRoute("/modules/")({
  head: () => ({
    meta: [
      { title: "Les 7 modules — Masterclass Wafa IMA" },
      { name: "description", content: "Parcourez les 7 modules de la formation : fondamentaux, CID, procédures, expertise, réforme et GRC." },
    ],
  }),
  component: ModulesIndex,
});

function ModulesIndex() {
  const { moduleProgress } = useProgress();
  return (
    <AppShell>
      <div className="mb-8">
        <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Programme
        </div>
        <h1 className="mt-1 font-serif text-3xl md:text-4xl">Les 7 modules</h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Suivez les modules dans l'ordre. Chaque module se termine par un quiz de validation
          (70% pour valider).
        </p>
      </div>

      <div className="space-y-4">
        {course.map((mod) => {
          const p = moduleProgress(mod.id);
          return (
            <Link
              key={mod.id}
              to="/modules/$moduleId"
              params={{ moduleId: mod.id }}
              className="block rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:border-primary/40 hover:shadow-md"
            >
              <div className="flex items-start gap-6">
                <div className="flex h-14 w-14 flex-none items-center justify-center rounded-xl bg-primary/10 font-serif text-2xl font-semibold text-primary">
                  {mod.number}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h2 className="font-serif text-xl">{mod.title}</h2>
                    {p.completed && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-800">
                        <CheckCircle2 className="h-3 w-3" /> Validé
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{mod.description}</p>
                  <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
                    <BookOpen className="h-3.5 w-3.5" /> {mod.lessons.length} leçons
                    {p.readCount > 0 && <span className="text-primary">· {p.readCount} lues</span>}
                    {p.quizScore > 0 && <span>· Quiz : {p.quizScore}%</span>}
                  </div>
                  <ProgressBar value={p.percent} className="mt-3" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </AppShell>
  );
}
