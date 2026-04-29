import * as React from "react";
import { Button } from "@/components/ui/button";
import { WhatsAppChoiceDialog } from "@/components/WhatsAppChoiceDialog";
import logo from "@/assets/sga-logo.png";

const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "F.A.Q", href: "#faq" },
  { label: "Garanta sua vaga", href: "#inscricao" },
  { label: "Reconhecimentos", href: "#reconhecimentos" },
];

export function SiteHeader() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/60 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="SGA" className="h-7 w-auto" />
          <span className="font-display text-xl tracking-widest text-brand-cream hidden sm:inline">
            VCT<span className="text-brand-red">/</span>RP
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-brand-cream transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <Button
          variant="default"
          size="sm"
          className="bg-brand-red hover:bg-brand-red-glow text-brand-cream font-mono uppercase tracking-widest text-xs"
          type="button"
          onClick={() => setOpen(true)}
        >
          WhatsApp
        </Button>
      </div>
      <WhatsAppChoiceDialog open={open} onOpenChange={setOpen} />
    </header>
  );
}
