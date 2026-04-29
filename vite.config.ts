import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { APP_BASE_PATH, APP_PATH } from "./src/lib/app-path";

export default defineConfig({
  base: APP_PATH,
  plugins: [
    tanstackStart({
      router: {
        basepath: APP_BASE_PATH,
      },
    }),
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
});
