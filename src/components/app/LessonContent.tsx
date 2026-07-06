import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export function LessonContent({ markdown }: { markdown: string }) {
  return (
    <article className="prose-wafa">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
    </article>
  );
}
