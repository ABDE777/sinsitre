import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { AppShell } from "@/components/app/AppShell";
import { QuizRunner } from "@/components/app/QuizRunner";
import { getModule } from "@/content/course";
import { getQuiz } from "@/content/quizzes";

export const Route = createFileRoute("/modules/$moduleId/quiz")({
  loader: ({ params }) => {
    const mod = getModule(params.moduleId);
    if (!mod) throw notFound();
    const questions = getQuiz(params.moduleId);
    if (questions.length === 0) throw notFound();
    return { module: mod, questions };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [{ title: `Quiz — Module ${loaderData.module.number}` }]
      : [{ title: "Quiz — Masterclass Wafa IMA" }],
  }),
  component: QuizPage,
  notFoundComponent: () => (
    <AppShell>
      <div className="py-16 text-center">
        <h1 className="font-serif text-2xl">Quiz introuvable</h1>
        <Link to="/modules" className="mt-4 inline-block text-sm text-primary hover:underline">
          Retour aux modules
        </Link>
      </div>
    </AppShell>
  ),
});

function QuizPage() {
  const { module: mod, questions } = Route.useLoaderData();
  return (
    <AppShell>
      <QuizRunner
        questions={questions}
        moduleId={mod.id}
        title={`Quiz du module ${mod.number}`}
        backHref={`/modules/${mod.id}`}
        backLabel="Retour au module"
      />
    </AppShell>
  );
}
