import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { InfoMarquee } from "@/components/InfoMarquee";
import { Galeria } from "@/components/Galeria";
import { EloTiers } from "@/components/EloTiers";
import { Briefing } from "@/components/Briefing";
import { Reconhecimentos } from "@/components/Reconhecimentos";
import { Faq } from "@/components/Faq";
import { Inscricao } from "@/components/Inscricao";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VCT RP Série B — Torneio de Valorant em Ribeirão Preto" },
      {
        name: "description",
        content:
          "1ª edição da Série B do VCT RP. Torneio presencial 5v5 em Ribeirão Preto no dia 07/06 — exclusivo para Gold 3 até Diamante 1.",
      },
      { property: "og:title", content: "VCT RP Série B — 07/06" },
      {
        property: "og:description",
        content: "Torneio presencial de Valorant em Ribeirão Preto. Gold 3 a Diamante 1.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <InfoMarquee />
        <EloTiers />
        <Galeria />
        <Briefing />
        <Reconhecimentos />
        <Faq />
        <Inscricao />
      </main>
      <SiteFooter />
    </div>
  );
}
