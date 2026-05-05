const incluso = [
  "Estrutura presencial completa!",
  "Cobertura com videomaker e fotógrafo",
  "Registro no ranking oficial",
  "Transmissão ao vivo com narração",
  "Troféus e medalhas para os finalistas",
  "Mesmo setup para todos os jogadores",
];

export function Briefing() {
  return (
    <section id="briefing" className="py-24 md:py-32 px-6 bg-grid">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-brand-red mb-4 flex items-center gap-3">
          <span className="w-8 h-px bg-brand-red" />
          // briefing
        </p>
        <h2 className="font-display text-5xl md:text-8xl text-brand-cream leading-[0.9]">
          COMO FUNCIONA O <br /> CAMPEONATO.
        </h2>

        <div className="mt-16 grid md:grid-cols-2 gap-px bg-border">
          {[
            { label: "DATA", value: "07/06/2026", strong: false },
            { label: "LOCAL", value: "Av. Nove de Julho, 1992 — Ribeirão Preto", strong: false },
            { label: "FORMATO", value: "5V5 — 8 TIMES", strong: true, sub: "Chave superior e inferior (eliminação dupla)" },
            { label: "ELEGIBILIDADE", value: "GOLD 3 ATÉ DIAMANTE 2", strong: true, sub: "Gold 1, Gold 2 ou acima de Diamante 2 não joga. Não existe limite por elo no mesmo time." },
            { label: "INSCRIÇÃO", value: "R$ 79,90", strong: true, sub: "por competidor" },
            { label: "INÍCIO", value: "08H00", strong: true, sub: "" },
          ].map((item) => (
            <div key={item.label} className="bg-background p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                {item.label}
              </p>
              <p
                className={`mt-3 ${
                  item.strong
                    ? "font-display text-3xl md:text-4xl text-brand-red tracking-wide"
                    : "text-lg text-brand-cream"
                }`}
              >
                {item.value}
              </p>
              {item.sub && <p className="mt-2 text-sm text-muted-foreground">{item.sub}</p>}
            </div>
          ))}
        </div>

        <div className="mt-12 border border-brand-red/60 bg-card/40 p-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-red mb-6">
            // o que está incluso
          </p>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
            {incluso.map((i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-brand-red text-xs">▶</span>
                <span className="text-brand-cream">{i}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
