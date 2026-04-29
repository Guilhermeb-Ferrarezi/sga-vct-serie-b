import { Button } from "@/components/ui/button";

export function Inscricao() {
  return (
    <section id="inscricao" className="py-24 md:py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative mx-auto max-w-5xl text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-brand-red mb-4">
          // garanta sua vaga
        </p>
        <h2 className="font-display text-5xl md:text-8xl text-brand-cream leading-[0.9]">
          Inscreva seu <span className="text-brand-red">time</span>
        </h2>
        <p className="mt-6 max-w-xl mx-auto text-muted-foreground">
          Vagas limitadas a 8 times. As inscrições são confirmadas por ordem de pagamento e
          verificação de elos via Riot ID.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-brand-red hover:bg-brand-red-glow text-brand-cream font-mono uppercase tracking-widest h-14 px-10 text-sm glow-red"
          >
            Garantir vaga
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-brand-cream/30 text-brand-cream hover:bg-brand-cream/10 font-mono uppercase tracking-widest h-14 px-10 text-sm bg-transparent"
          >
            Falar no WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
