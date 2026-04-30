import { expect, test } from "bun:test";
import { buildWhatsAppUrl, WHATSAPP_URL } from "./whatsapp";

test("buildWhatsAppUrl returns the direct wa.me link", () => {
  expect(buildWhatsAppUrl()).toBe(WHATSAPP_URL);
  expect(WHATSAPP_URL).toBe("https://wa.me/5516991069776");
});

test("buildWhatsAppUrl adds the chat text when provided", () => {
  expect(buildWhatsAppUrl("Olá, quero participar.")).toBe(
    "https://wa.me/5516991069776?text=Ol%C3%A1%2C+quero+participar.",
  );
});
