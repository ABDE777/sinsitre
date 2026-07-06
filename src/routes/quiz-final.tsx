import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app/AppShell";
import { QuizRunner } from "@/components/app/QuizRunner";
import { getFinalQuiz } from "@/content/quizzes";

export const Route = createFileRoute("/quiz-final")({
  head: () => ({
    meta: [
      { title: "Examen final — Masterclass Wafa IMA" },
      { name: "description", content: "Examen récapitulatif couvrant les 7 modules de la Masterclass Gestion des Sinistres." },
    ],
  }),
  component: FinalQuizPage,
});

function FinalQuizPage() {
  const questions = getFinalQuiz();
  return (
    <AppShell>
      <QuizRunner
        questions={questions}
        title="Examen final"
        backHref="/"
        backLabel="Retour à l'accueil"
      />
    </AppShell>
  );
}
