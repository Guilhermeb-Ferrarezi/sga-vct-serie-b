import { MessageCircle, Users } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { buildWhatsAppUrl, hasWhatsAppDestination } from "@/lib/whatsapp";

type WhatsAppChoiceDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const options = [
  {
    id: "team-ready",
    icon: MessageCircle,
    title: "Já tenho time",
    description: "Quero garantir minha vaga com meu time.",
    message:
      "Olá! Já tenho um time e quero garantir minha vaga no VCT RP Série B. Pode me passar os próximos passos?",
  },
  {
    id: "need-help",
    icon: Users,
    title: "Preciso de ajuda para encontrar",
    description: "Quero participar, mas ainda não tenho time.",
    message:
      "Olá! Quero participar do VCT RP Série B, mas ainda não tenho time. Vocês podem me ajudar a encontrar um grupo?",
  },
] as const;

function openWhatsApp(message: string) {
  const url = buildWhatsAppUrl(message);
  if (!url) return false;

  window.open(url, "_blank", "noopener,noreferrer");
  return true;
}

export function WhatsAppChoiceDialog({ open, onOpenChange }: WhatsAppChoiceDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="[&>button]:hidden max-w-2xl border-brand-red/60 bg-[#05050a] text-brand-cream shadow-[0_0_0_1px_rgba(255,66,88,0.12),0_40px_120px_rgba(0,0,0,0.75)] sm:rounded-none">
        <DialogHeader className="text-left space-y-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.5em] text-brand-red">
            // inscrição
          </p>
          <DialogTitle className="font-display text-4xl md:text-5xl leading-[0.95] tracking-tight">
            QUAL É A SUA SITUAÇÃO?
          </DialogTitle>
          <DialogDescription className="max-w-xl text-base text-brand-cream/75">
            Escolha uma opção abaixo para falar com a gente no WhatsApp.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3 pt-3">
          {options.map((option) => {
            const Icon = option.icon;
            return (
              <button
                key={option.id}
                type="button"
                onClick={() => {
                  const opened = openWhatsApp(option.message);
                  if (opened) {
                    onOpenChange(false);
                  }
                }}
                className="group w-full border border-brand-cream/12 bg-[#0c101d] px-6 py-5 text-left transition-colors hover:border-brand-red/70 hover:bg-[#101529]"
              >
                <div className="flex items-start gap-4">
                  <span className="mt-1 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-red/12 text-2xl text-brand-red transition-transform duration-200 group-hover:scale-105">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <div className="font-display text-2xl tracking-wide text-brand-cream">
                      {option.title}
                    </div>
                    <p className="mt-2 max-w-lg text-sm leading-6 text-brand-cream/72">
                      {option.description}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="pt-2 text-center">
          <button
            type="button"
            onClick={() => onOpenChange(false)}
            className="font-mono text-xs uppercase tracking-[0.5em] text-brand-cream/70 transition-colors hover:text-brand-cream"
          >
            Cancelar
          </button>
        </div>

        {!hasWhatsAppDestination() && (
          <p className="text-xs text-brand-cream/45">
            Configure VITE_WHATSAPP_NUMBER ou VITE_WHATSAPP_URL para habilitar o envio.
          </p>
        )}
      </DialogContent>
    </Dialog>
  );
}
