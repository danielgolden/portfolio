import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";

export default defineConfig({
  site: "https://danielgolden.me",
  integrations: [react()],
  adapter: vercel(),
  output: "static",
});
