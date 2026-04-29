import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "QUEM PODE PARTICIPAR DESSA EDIÇÃO?", a: "Jogadores nos elos Gold 3, Platinum 1 a 3, Diamante 1 e Diamante 2 (máx 1 Diamante 2 por time)." },
  { q: "COMO FUNCIONA O FORMATO DO CAMPEONATO?", a: "5v5 com 8 times em chave de eliminação dupla (superior e inferior)." },
  { q: "COMO FAÇO MINHA INSCRIÇÃO?", a: "Pelo botão 'Garanta sua vaga' ou WhatsApp. A vaga é confirmada após pagamento e verificação dos elos via Riot ID." },
  { q: "POSSO PARTICIPAR MESMO SEM TIME FECHADO?", a: "Sim. Entre em contato pelo WhatsApp e ajudamos a montar um time com outros jogadores." },
  { q: "QUAL O VALOR DA INSCRIÇÃO?", a: "R$ 79,90 por competidor, com vaga garantida apenas após confirmação do pagamento." },
  { q: "QUE HORAS COMEÇA O CAMPEONATO?", a: "Início às 08h00, com encerramento previsto entre 21h e 22h." },
  { q: "O CAMPEONATO É REALMENTE PRESENCIAL?", a: "Sim. 100% presencial em Ribeirão Preto, com estrutura, transmissão e cobertura no local." },
  { q: "OS JOGOS SÃO TRANSMITIDOS AO VIVO?", a: "Sim, com narração profissional, HUD e entrevistas durante toda a etapa." },
  { q: "PRECISO LEVAR MEUS PERIFÉRICOS?", a: "Não é obrigatório, mas é permitido. Quem preferir pode usar mouse, teclado e headset próprios." },
  { q: "POSSO LEVAR MEU PRÓPRIO COMPUTADOR OU MONITOR?", a: "Não. Todos os jogadores usam o mesmo setup oficial do campeonato para garantir igualdade." },
  { q: "PODE LEVAR COMIDA OU BEBIDA?", a: "Bebidas em garrafa fechada são permitidas. Comida apenas em horários específicos definidos pela organização." },
];

export function Faq() {
  return (
    <section id="faq" className="py-24 md:py-32 px-6 bg-grid">
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-brand-red mb-4">
          // dúvidas
        </p>
        <h2 className="font-display text-5xl md:text-8xl text-brand-cream leading-[0.9]">
          PERGUNTAS FREQUENTES.
        </h2>
        <p className="mt-4 text-muted-foreground">Tire suas dúvidas sobre o campeonato.</p>

        <Accordion type="single" collapsible className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border border-border bg-card/40 px-6 data-[state=open]:border-brand-red"
            >
              <AccordionTrigger className="hover:no-underline text-left py-5">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs text-brand-red">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-xl text-brand-cream tracking-wide">
                    {f.q}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 pl-10">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
