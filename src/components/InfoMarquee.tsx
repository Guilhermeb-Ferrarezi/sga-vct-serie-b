export function InfoMarquee() {
  const item = "★ Série B   Ouro 3 · Plat · Diamante 1   ★ 8 times   07/06/2026   ★ Presencial   Ribeirão Preto";
  const items = Array(6).fill(item);
  return (
    <div className="border-y border-border/60 bg-background/80 py-4 overflow-hidden">
      <div className="flex gap-12 animate-[marquee_35s_linear_infinite] whitespace-nowrap font-display text-2xl text-brand-cream/80 tracking-widest">
        {items.map((t, i) => (
          <span key={i} className="flex items-center gap-12">
            {t}
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
    </div>
  );
}
