const cards = [
  {
    n: "03",
    place: "3º LUGAR",
    title: "ENTRE OS DESTAQUES",
    items: ["Registro no ranking oficial", "Destaque no histórico da edição", "Acesso antecipado para próximas vagas"],
    highlight: false,
    order: "md:order-1",
  },
  {
    n: "01",
    place: "1º LUGAR",
    title: "NOME NA HISTÓRIA",
    items: [
      "Troféu personalizado da edição",
      "Medalhas personalizadas para cada jogador",
      "Destaque máximo no ranking oficial",
      "Registro no Hall dos Campeões",
      "Conteúdo oficial nas redes e no portal",
      "Destaque como campeão da edição",
    ],
    highlight: true,
    order: "md:order-2",
  },
  {
    n: "02",
    place: "2º LUGAR",
    title: "DESTAQUE OFICIAL",
    items: ["Medalhas personalizadas", "Destaque no ranking oficial", "Registro na edição do campeonato", "Prioridade na próxima inscrição"],
    highlight: false,
    order: "md:order-3",
  },
];

export function Reconhecimentos() {
  return (
    <section id="reconhecimentos" className="py-24 md:py-32 px-6 bg-background">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-brand-red mb-4 flex items-center gap-3">
          <span className="w-8 h-px bg-brand-red" />
          // hall dos campeões
        </p>
        <h2 className="font-display text-5xl md:text-8xl text-brand-cream leading-[0.9]">
          RECONHECIMENTOS.
        </h2>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {cards.map((c) => (
            <div
              key={c.n}
              className={`relative p-8 border ${
                c.highlight
                  ? "border-brand-red bg-gradient-to-b from-brand-red/15 to-card glow-red"
                  : "border-border bg-card/40"
              } ${c.order}`}
            >
              <p
                className={`font-display text-8xl ${
                  c.highlight ? "text-brand-red" : "text-muted-foreground/40"
                }`}
              >
                {c.n}
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mt-2">
                {c.place}
              </p>
              <h3 className="font-display text-3xl text-brand-cream mt-6 tracking-wide">
                {c.title}
              </h3>
              <ul className="mt-6 space-y-3">
                {c.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm">
                    <span className="text-brand-red text-xs mt-1">▶</span>
                    <span className="text-brand-cream">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-brand-red" />
              <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-brand-red" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-brand-red" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-brand-red" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
