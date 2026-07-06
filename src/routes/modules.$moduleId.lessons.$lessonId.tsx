import { useEffect } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { AppShell } from "@/components/app/AppShell";
import { LessonContent } from "@/components/app/LessonContent";
import { getLesson } from "@/content/course";
import { useProgress } from "@/hooks/useProgress";

export const Route = createFileRoute("/modules/$moduleId/lessons/$lessonId")({
  loader: ({ params }) => {
    const found = getLesson(params.moduleId, params.lessonId);
    if (!found) throw notFound();
    return found;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.lesson.title} — ${loaderData.module.title}` },
          { name: "description", content: loaderData.lesson.summary },
        ]
      : [{ title: "Leçon — Masterclass Wafa IMA" }],
  }),
  component: LessonPage,
  notFoundComponent: () => (
    <AppShell>
      <div className="py-16 text-center">
        <h1 className="font-serif text-2xl">Leçon introuvable</h1>
        <Link to="/modules" className="mt-4 inline-block text-sm text-primary hover:underline">
          Retour aux modules
        </Link>
      </div>
    </AppShell>
  ),
});

function LessonPage() {
  const { module: mod, lesson, prev, next, index } = Route.useLoaderData();
  const { markLessonRead, isLessonRead } = useProgress();
  const read = isLessonRead(mod.id, lesson.id);

  useEffect(() => {
    // mark read after 2 seconds on page
    const t = setTimeout(() => markLessonRead(mod.id, lesson.id), 2000);
    return () => clearTimeout(t);
  }, [mod.id, lesson.id, markLessonRead]);

  return (
    <AppShell>
      <div className="mx-auto max-w-3xl">
        <Link
          to="/modules/$moduleId"
          params={{ moduleId: mod.id }}
          className="text-xs text-muted-foreground hover:text-foreground"
        >
          ← Module {mod.number} · {mod.title}
        </Link>
        <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
          <span className="uppercase tracking-widest">
            Leçon {index + 1} / {mod.lessons.length}
          </span>
          {read && (
            <span className="inline-flex items-center gap-1 text-emerald-700">
              <CheckCircle2 className="h-3.5 w-3.5" /> Lue
            </span>
          )}
        </div>
        <h1 className="mt-3 font-serif text-3xl leading-tight md:text-4xl">{lesson.title}</h1>
        <p className="mt-2 text-lg text-muted-foreground">{lesson.summary}</p>

        <div className="mt-8 rounded-2xl border border-border bg-card p-8 shadow-sm">
          <LessonContent markdown={lesson.content} />
        </div>

        <div className="mt-8 flex items-center justify-between">
          {prev ? (
            <Link
              to="/modules/$moduleId/lessons/$lessonId"
              params={{ moduleId: mod.id, lessonId: prev.id }}
              className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary"
            >
              <ArrowLeft className="h-4 w-4" /> Précédent
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              to="/modules/$moduleId/lessons/$lessonId"
              params={{ moduleId: mod.id, lessonId: next.id }}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
            >
              Suivant <ArrowRight className="h-4 w-4" />
            </Link>
          ) : (
            <Link
              to="/modules/$moduleId/quiz"
              params={{ moduleId: mod.id }}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
            >
              Passer au quiz <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      </div>
    </AppShell>
  );
}
