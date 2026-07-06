import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { AppShell } from "@/components/app/AppShell";
import { lexique } from "@/content/lexique";

export const Route = createFileRoute("/lexique")({
  head: () => ({
    meta: [
      { title: "Lexique — Masterclass Wafa IMA" },
      { name: "description", content: "Glossaire des termes clés de la gestion des sinistres auto : CID, RC, PEC, réforme et plus." },
    ],
  }),
  component: LexiquePage,
});

function LexiquePage() {
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    const nq = q.toLowerCase().trim();
    if (!nq) return lexique;
    return lexique.filter(
      (t) =>
        t.term.toLowerCase().includes(nq) || t.definition.toLowerCase().includes(nq),
    );
  }, [q]);

  return (
    <AppShell>
      <div className="mb-8">
        <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Référence
        </div>
        <h1 className="mt-1 font-serif text-3xl md:text-4xl">Lexique</h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Les termes indispensables du métier de gestionnaire de sinistres.
        </p>
      </div>

      <div className="relative max-w-md">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="search"
          placeholder="Rechercher un terme…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="w-full rounded-lg border border-input bg-background py-2.5 pl-9 pr-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>

      <div className="mt-8 grid gap-3 md:grid-cols-2">
        {filtered.map((t) => (
          <div key={t.term} className="rounded-xl border border-border bg-card p-5">
            <dt className="font-serif text-lg font-semibold text-primary">{t.term}</dt>
            <dd className="mt-1 text-sm text-muted-foreground">{t.definition}</dd>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="col-span-full py-12 text-center text-sm text-muted-foreground">
            Aucun terme trouvé.
          </div>
        )}
      </div>
    </AppShell>
  );
}
