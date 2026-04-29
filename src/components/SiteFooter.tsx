export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 py-10 px-6">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-display text-xl tracking-widest text-brand-cream">
          VCT<span className="text-brand-red">/</span>RP — SÉRIE B
        </p>
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          © 2026 · Ribeirão Preto · Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}
