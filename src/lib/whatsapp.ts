const DEFAULT_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER?.trim().replace(/\D/g, "") ?? "";
const DEFAULT_URL = import.meta.env.VITE_WHATSAPP_URL?.trim() ?? "";

function appendTextParam(baseUrl: string, message: string) {
  const url = new URL(baseUrl);
  url.searchParams.set("text", message);
  return url.toString();
}

export function buildWhatsAppUrl(message: string) {
  try {
    if (DEFAULT_URL) {
      return appendTextParam(DEFAULT_URL, message);
    }

    if (!DEFAULT_NUMBER) {
      return null;
    }

    const url = new URL(`https://wa.me/${DEFAULT_NUMBER}`);
    url.searchParams.set("text", message);
    return url.toString();
  } catch {
    return null;
  }
}

export function hasWhatsAppDestination() {
  return Boolean(DEFAULT_URL || DEFAULT_NUMBER);
}
