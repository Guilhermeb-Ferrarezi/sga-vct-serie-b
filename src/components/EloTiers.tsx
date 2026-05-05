const tiers = [
  {
    n: "01",
    name: "GOLD",
    color: "text-tier-gold",
    accent: "border-tier-gold",
    desc: "Apenas Gold 2 e 3 pode jogar. Gold 1 ficam para a Série C.",
  },
  {
    n: "02",
    name: "PLATINA",
    color: "text-tier-platinum",
    accent: "border-tier-platinum",
    desc: "Platinum 1, Platinum 2 e Platinum 3 podem jogar.",
  },
  {
    n: "03",
    name: "DIAMANTE",
    color: "text-tier-diamond",
    accent: "border-tier-diamond",
    desc: "Diamante 1 e Diamante 2 podem jogar.",
  },
];

export function EloTiers() {
  return (
    <section id="elos" className="py-24 md:py-32 px-6 bg-grid">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-brand-red mb-4 flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-brand-red" />
          // quem pode entrar
        </p>
        <h2 className="font-display text-5xl md:text-8xl text-brand-cream leading-[0.9]">
          SÉRIE B <span className="text-brand-red">(INTERMEDIÁRIO)</span>
        </h2>
        <p className="mt-6 max-w-2xl text-muted-foreground">
          A Série B é voltada para jogadores intermediários. Jogadores de Gold 3 até Diamante 2
          podem participar.
        </p>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.n} className="relative">
              <div className={`absolute top-0 left-0 right-0 h-px ${t.accent} border-t-2`} />
              <div className="relative bg-card/80 border border-border p-8 pt-10 min-h-[280px]">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  Tier {t.n}
                </p>
                <h3 className={`font-display text-6xl mt-4 ${t.color}`}>{t.name}</h3>
                <p className="mt-6 text-sm text-muted-foreground">{t.desc}</p>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-brand-red" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-brand-red" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid sm:grid-cols-3 gap-6">
          {[
            { title: "QUEM PODE JOGAR", body: "Gold 3, Platinum 1 a 3, Diamante 1 e Diamante 2." },
            { title: "QUEM NÃO PODE JOGAR", body: "Ranks abaixo de, ou qualquer elo acima de Diamante 2." },
            { title: "RESUMO RÁPIDO", body: "Permitido de Gold 3 até Diamante 2, sem limite por elo no mesmo time." },
          ].map((c) => (
            <div key={c.title} className="bg-card/60 border border-border p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-red">
                {c.title}
              </p>
              <p className="mt-4 text-sm text-brand-cream">{c.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 border border-brand-red/60 bg-card/60 p-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-red">
            REGRA IMPORTANTE
          </p>
          <p className="mt-4 text-brand-cream">
            Não existe mais limite de jogadores por elo dentro do mesmo time.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Desde que todos estejam dentro dos elos permitidos da Série B, a composição do time é livre.
          </p>
        </div>
      </div>
    </section>
  );
}
