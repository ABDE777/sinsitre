import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { BookOpen, Home, Library, Trophy } from "lucide-react";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="group flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground font-serif text-lg font-semibold">
              W
            </div>
            <div className="leading-tight">
              <div className="font-serif text-lg font-semibold tracking-tight">Masterclass</div>
              <div className="text-xs text-muted-foreground">Gestion des sinistres · Wafa IMA</div>
            </div>
          </Link>
          <nav className="hidden items-center gap-1 md:flex">
            <NavItem to="/" icon={<Home className="h-4 w-4" />} label="Accueil" />
            <NavItem to="/modules" icon={<BookOpen className="h-4 w-4" />} label="Modules" />
            <NavItem to="/lexique" icon={<Library className="h-4 w-4" />} label="Lexique" />
            <NavItem to="/quiz-final" icon={<Trophy className="h-4 w-4" />} label="Examen final" />
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-6 py-10">{children}</main>
      <footer className="border-t border-border/60 py-6 text-center text-xs text-muted-foreground">
        « Le sinistre est un incident, la relation est une opportunité. » — Nadir Taourarti
      </footer>
    </div>
  );
}

function NavItem({ to, icon, label }: { to: string; icon: ReactNode; label: string }) {
  return (
    <Link
      to={to}
      className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-secondary hover:text-foreground"
      activeProps={{ className: "bg-secondary text-foreground" }}
      activeOptions={{ exact: to === "/" }}
    >
      {icon}
      {label}
    </Link>
  );
}
