export const WHATSAPP_URL = "https://wa.me/5516991069776";

export function buildWhatsAppUrl(message?: string) {
  if (!message) {
    return WHATSAPP_URL;
  }

  const url = new URL(WHATSAPP_URL);
  url.searchParams.set("text", message);
  return url.toString();
}
