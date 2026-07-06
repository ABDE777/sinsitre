import { useCallback, useEffect, useState } from "react";
import { course, totalLessons } from "@/content/course";

type ProgressData = {
  readLessons: string[]; // "moduleId/lessonId"
  quizScores: Record<string, number>; // moduleId -> % score
};

const STORAGE_KEY = "wafa-ima-progress";
const EMPTY: ProgressData = { readLessons: [], quizScores: {} };

function load(): ProgressData {
  if (typeof window === "undefined") return EMPTY;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return EMPTY;
    const parsed = JSON.parse(raw);
    return {
      readLessons: Array.isArray(parsed.readLessons) ? parsed.readLessons : [],
      quizScores: parsed.quizScores && typeof parsed.quizScores === "object" ? parsed.quizScores : {},
    };
  } catch {
    return EMPTY;
  }
}

function save(data: ProgressData) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  window.dispatchEvent(new Event("wafa-progress-update"));
}

export function useProgress() {
  const [data, setData] = useState<ProgressData>(EMPTY);

  useEffect(() => {
    setData(load());
    const handler = () => setData(load());
    window.addEventListener("wafa-progress-update", handler);
    window.addEventListener("storage", handler);
    return () => {
      window.removeEventListener("wafa-progress-update", handler);
      window.removeEventListener("storage", handler);
    };
  }, []);

  const markLessonRead = useCallback((moduleId: string, lessonId: string) => {
    const key = `${moduleId}/${lessonId}`;
    const current = load();
    if (current.readLessons.includes(key)) return;
    const next = { ...current, readLessons: [...current.readLessons, key] };
    save(next);
  }, []);

  const saveQuizScore = useCallback((moduleId: string, score: number) => {
    const current = load();
    const prev = current.quizScores[moduleId] ?? 0;
    const next = {
      ...current,
      quizScores: { ...current.quizScores, [moduleId]: Math.max(prev, score) },
    };
    save(next);
  }, []);

  const reset = useCallback(() => {
    save(EMPTY);
  }, []);

  const isLessonRead = (moduleId: string, lessonId: string) =>
    data.readLessons.includes(`${moduleId}/${lessonId}`);

  const moduleProgress = (moduleId: string) => {
    const mod = course.find((m) => m.id === moduleId);
    if (!mod) return { readCount: 0, total: 0, percent: 0, quizScore: 0, completed: false };
    const readCount = mod.lessons.filter((l) => isLessonRead(moduleId, l.id)).length;
    const percent = Math.round((readCount / mod.lessons.length) * 100);
    const quizScore = data.quizScores[moduleId] ?? 0;
    const completed = readCount === mod.lessons.length && quizScore >= 70;
    return { readCount, total: mod.lessons.length, percent, quizScore, completed };
  };

  const globalProgress = () => {
    const read = data.readLessons.length;
    const percent = Math.round((read / totalLessons) * 100);
    const completedModules = course.filter((m) => moduleProgress(m.id).completed).length;
    return { read, total: totalLessons, percent, completedModules, totalModules: course.length };
  };

  return {
    data,
    markLessonRead,
    saveQuizScore,
    reset,
    isLessonRead,
    moduleProgress,
    globalProgress,
  };
}
