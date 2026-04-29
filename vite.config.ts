import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";

export default defineConfig({
  base: "/vct-rp/serie-b/",
  plugins: [
    tanstackStart({
      router: {
        basepath: "/vct-rp/serie-b",
      },
    }),
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
});
