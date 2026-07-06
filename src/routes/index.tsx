import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Sparkles, Trophy } from "lucide-react";
import { AppShell } from "@/components/app/AppShell";
import { ProgressBar } from "@/components/app/ProgressBar";
import { course } from "@/content/course";
import { useProgress } from "@/hooks/useProgress";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Masterclass Gestion des Sinistres — Wafa IMA" },
      {
        name: "description",
        content:
          "Parcours de formation interactif pour gestionnaires de sinistres automobiles chez Wafa IMA Assistance. 7 modules, quiz et lexique.",
      },
      { property: "og:title", content: "Masterclass Gestion des Sinistres — Wafa IMA" },
      {
        property: "og:description",
        content:
          "Formez-vous à la gestion des sinistres auto : contrat, CID, procédures, expertise, réforme et relation client.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const { globalProgress, moduleProgress } = useProgress();
  const g = globalProgress();

  return (
    <AppShell>
      <section className="rounded-3xl border border-border bg-card px-8 py-12 shadow-sm md:px-14 md:py-16">
        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-primary">
          <Sparkles className="h-4 w-4" /> Masterclass Wafa IMA
        </div>
        <h1 className="mt-4 font-serif text-4xl leading-tight tracking-tight md:text-5xl">
          Devenez gestionnaire de sinistres,
          <br />
          <span className="text-primary">un module à la fois.</span>
        </h1>
        <p className="mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">
          Un parcours pédagogique complet, du contrat d'assurance à la relation client,
          avec des cas pratiques et des quiz de validation à chaque étape.
        </p>

        <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex gap-3">
            <Link
              to="/modules"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-sm transition hover:opacity-90"
            >
              {g.read > 0 ? "Reprendre la formation" : "Commencer la formation"}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/lexique"
              className="inline-flex items-center rounded-md border border-input bg-background px-5 py-3 text-sm font-medium text-foreground hover:bg-secondary"
            >
              Voir le lexique
            </Link>
          </div>
          <div className="min-w-64">
            <div className="flex items-baseline justify-between text-xs text-muted-foreground">
              <span>Progression globale</span>
              <span className="font-medium text-foreground">
                {g.read} / {g.total} leçons
              </span>
            </div>
            <ProgressBar value={g.percent} className="mt-2" />
            <div className="mt-1 text-xs text-muted-foreground">
              {g.completedModules} / {g.totalModules} modules validés
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Programme
            </div>
            <h2 className="mt-1 font-serif text-2xl">Les 7 modules de la Masterclass</h2>
          </div>
          <Link
            to="/modules"
            className="hidden text-sm font-medium text-primary hover:underline md:block"
          >
            Voir tout
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {course.map((mod) => {
            const p = moduleProgress(mod.id);
            return (
              <Link
                key={mod.id}
                to="/modules/$moduleId"
                params={{ moduleId: mod.id }}
                className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:border-primary/40 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-xs font-medium uppercase tracking-widest text-primary">
                      Module {mod.number}
                    </div>
                    <h3 className="mt-1 font-serif text-xl leading-tight">{mod.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{mod.tagline}</p>
                  </div>
                  {p.completed && (
                    <div className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-accent text-accent-foreground">
                      <Trophy className="h-4 w-4" />
                    </div>
                  )}
                </div>
                <div className="mt-6 flex items-center gap-3 text-xs text-muted-foreground">
                  <BookOpen className="h-3.5 w-3.5" /> {mod.lessons.length} leçons
                  {p.readCount > 0 && (
                    <span className="text-primary">· {p.readCount} lues</span>
                  )}
                  {p.quizScore > 0 && <span>· Quiz : {p.quizScore}%</span>}
                </div>
                <ProgressBar value={p.percent} className="mt-3" />
              </Link>
            );
          })}
        </div>
      </section>
    </AppShell>
  );
}
