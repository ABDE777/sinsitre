import { useMemo, useState } from "react";
import { CheckCircle2, XCircle, RotateCcw } from "lucide-react";
import type { Question } from "@/content/quizzes";
import { useProgress } from "@/hooks/useProgress";
import { cn } from "@/lib/utils";

type Props = {
  questions: Question[];
  moduleId?: string; // undefined for final quiz
  title: string;
  backHref: string;
  backLabel: string;
};

export function QuizRunner({ questions, moduleId, title, backHref, backLabel }: Props) {
  const { saveQuizScore } = useProgress();
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [finished, setFinished] = useState(false);

  const question = questions[index];
  const score = useMemo(
    () =>
      answers.reduce(
        (sum, ans, i) => sum + (ans === questions[i].correctIndex ? 1 : 0),
        0,
      ),
    [answers, questions],
  );
  const percent = Math.round((score / questions.length) * 100);

  function validate() {
    if (selected === null) return;
    const nextAnswers = [...answers, selected];
    setAnswers(nextAnswers);
    if (index + 1 >= questions.length) {
      const finalScore = nextAnswers.reduce(
        (sum, ans, i) => sum + (ans === questions[i].correctIndex ? 1 : 0),
        0,
      );
      const finalPercent = Math.round((finalScore / questions.length) * 100);
      if (moduleId) saveQuizScore(moduleId, finalPercent);
      setFinished(true);
    } else {
      setIndex(index + 1);
      setSelected(null);
    }
  }

  function restart() {
    setIndex(0);
    setSelected(null);
    setAnswers([]);
    setFinished(false);
  }

  if (finished) {
    const passed = percent >= 70;
    return (
      <div className="mx-auto max-w-2xl">
        <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
          <div className="text-sm uppercase tracking-wider text-muted-foreground">{title}</div>
          <h1 className="mt-2 font-serif text-3xl">
            {passed ? "Bravo !" : "Encore un effort"}
          </h1>
          <div className="mt-6 flex items-baseline gap-3">
            <div className="text-6xl font-serif font-semibold text-primary">{percent}%</div>
            <div className="text-muted-foreground">
              {score} / {questions.length} bonnes réponses
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            {passed
              ? "Vous validez ce module. Vous pouvez passer au suivant ou revoir les leçons quand vous voulez."
              : "Il faut 70% pour valider. Relisez le module et retentez — vous y êtes presque."}
          </p>

          <div className="mt-8 space-y-3">
            <h2 className="font-serif text-lg">Correction détaillée</h2>
            {questions.map((q, i) => {
              const ok = answers[i] === q.correctIndex;
              return (
                <div
                  key={q.id}
                  className={cn(
                    "rounded-lg border p-4 text-sm",
                    ok ? "border-emerald-200 bg-emerald-50/50" : "border-rose-200 bg-rose-50/50",
                  )}
                >
                  <div className="flex items-start gap-2 font-medium">
                    {ok ? (
                      <CheckCircle2 className="h-4 w-4 flex-none text-emerald-600" />
                    ) : (
                      <XCircle className="h-4 w-4 flex-none text-rose-600" />
                    )}
                    <span>{q.question}</span>
                  </div>
                  <div className="mt-2 pl-6 text-muted-foreground">
                    <div>
                      <span className="font-medium text-foreground">Bonne réponse : </span>
                      {q.options[q.correctIndex]}
                    </div>
                    <div className="mt-1">{q.explanation}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={restart}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            >
              <RotateCcw className="h-4 w-4" /> Recommencer
            </button>
            <a
              href={backHref}
              className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary"
            >
              {backLabel}
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-4 flex items-center justify-between text-sm text-muted-foreground">
        <span className="uppercase tracking-wider">{title}</span>
        <span>
          Question {index + 1} / {questions.length}
        </span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary">
        <div
          className="h-full bg-primary transition-all"
          style={{ width: `${((index) / questions.length) * 100}%` }}
        />
      </div>

      <div className="mt-6 rounded-2xl border border-border bg-card p-8 shadow-sm">
        <h1 className="font-serif text-2xl leading-snug">{question.question}</h1>
        <div className="mt-6 space-y-3">
          {question.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={cn(
                "w-full rounded-lg border p-4 text-left text-sm transition",
                selected === i
                  ? "border-primary bg-primary/5 text-foreground"
                  : "border-border bg-background hover:border-primary/40 hover:bg-secondary/60",
              )}
            >
              <div className="flex items-start gap-3">
                <span
                  className={cn(
                    "flex h-6 w-6 flex-none items-center justify-center rounded-full border text-xs font-medium",
                    selected === i
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border text-muted-foreground",
                  )}
                >
                  {String.fromCharCode(65 + i)}
                </span>
                <span className="pt-0.5">{opt}</span>
              </div>
            </button>
          ))}
        </div>
        <button
          onClick={validate}
          disabled={selected === null}
          className="mt-8 w-full rounded-md bg-primary py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {index + 1 === questions.length ? "Terminer le quiz" : "Question suivante"}
        </button>
      </div>
    </div>
  );
}
