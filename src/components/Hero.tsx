import capa from "@/assets/capa01.png";

const tiers = [
  {
    label: "Ouro",
    className: "text-tier-gold border-tier-gold/50 bg-tier-gold/10",
  },
  {
    label: "Platina",
    className: "text-tier-platinum border-tier-platinum/50 bg-tier-platinum/10",
  },
  {
    label: "Diamante",
    className: "text-tier-diamond border-tier-diamond/50 bg-tier-diamond/10",
  },
];
const stats = [
  { label: "Data", value: "07/06" },
  { label: "Times", value: "08", accent: true },
  { label: "Formato", value: "5V5" },
  { label: "Local", value: "Ribeirão Preto" },
];

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen pt-16 overflow-hidden">
      <img
        src={capa}
        alt="Jogadores competindo no VCT RP"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 gradient-hero opacity-70 mix-blend-multiply" />
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />

      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-16 min-h-[calc(100vh-4rem)] flex flex-col">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-brand-red mb-4">
          // 1ª edição — série B
        </p>

        <div className="flex flex-col leading-[0.82]">
          <h1 className="text-[clamp(4.5rem,16vw,12.5rem)] text-brand-cream tracking-[-0.05em] uppercase">
            <span className="font-anton block">VCT RP</span>
          </h1>
          <h1 className="font-display text-[clamp(4.5rem,16vw,12.5rem)] text-stroke-red -mt-5 tracking-[-0.04em]">
            SÉRIE B
          </h1>
        </div>

        <div className="mt-10 max-w-2xl border border-brand-red/40 bg-background/40 backdrop-blur-sm p-6">
          <p className="font-mono text-xs uppercase tracking-widest text-brand-red mb-4">
            // exclusivo para os elos
          </p>
          <div className="flex flex-wrap gap-2">
            {tiers.map((t) => (
              <span
                key={t.label}
                className={`min-w-24 px-4 py-3 border ${t.className} font-display text-2xl tracking-wider uppercase shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]`}
              >
                {t.label}
              </span>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Apenas jogadores dos elos Ouro, Platina e Diamante podem participar. Verificação
            obrigatória.
          </p>
        </div>

        <div className="mt-auto pt-12 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border/50">
          {stats.map((s) => (
            <div key={s.label} className="pt-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                {s.label}
              </p>
              <p
                className={`font-display text-4xl md:text-5xl mt-2 ${
                  s.accent ? "text-brand-red" : "text-brand-cream"
                }`}
              >
                {s.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
