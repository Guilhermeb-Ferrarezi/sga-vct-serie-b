import card01 from "@/assets/card_01.png";
import card02 from "@/assets/card_02.png";
import card03 from "@/assets/card_03.png";
import card04 from "@/assets/card_04.png";
import card05 from "@/assets/card_05.png";
import card06 from "@/assets/card_06.png";

const cards = [
  { n: "01", img: card05, title: "100% PRESENCIAL", desc: "Aqui não é online. É competição real, frente a frente." },
  { n: "02", img: card03, title: "SUA GAMEPLAY AO VIVO", desc: "Transmissão com HUD profissional, narrador e entrevistas. Seu jogo vira espetáculo." },
  { n: "03", img: card02, title: "VOCÊ VIRA CONTEÚDO", desc: "Bastidores, entrevistas e momentos reais que ficam registrados dentro e fora do jogo." },
  { n: "04", img: card06, title: "ESTRUTURA PRO", desc: "Setup pro-level, periféricos top de linha e cadeiras gamer para todos os competidores." },
  { n: "05", img: card04, title: "AMBIENTE IMERSIVO", desc: "Iluminação RGB, ambiente climatizado e energia de arena profissional do começo ao fim." },
  { n: "06", img: card01, title: "PREMIAÇÃO REAL", desc: "Troféus exclusivos, medalhas personalizadas e reconhecimento oficial para os campeões." },
];

export function Galeria() {
  return (
    <section id="sobre" className="py-24 md:py-32 px-6 bg-background">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-display text-5xl md:text-8xl text-brand-cream leading-[0.9] max-w-5xl">
          O QUE TORNA ESSE CAMPEONATO <span className="text-brand-red">DIFERENTE.</span>
        </h2>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c) => (
            <div key={c.n} className="bg-card/40 border border-border overflow-hidden">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={c.img} alt={c.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <p className="font-mono text-xs text-brand-red mb-2">{c.n}</p>
                <h3 className="font-display text-2xl text-brand-cream tracking-wide">{c.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
