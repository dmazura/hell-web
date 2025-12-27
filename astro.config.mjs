import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  site: "https://hell.dominikmazura.cz",
  base: process.env.ASTRO_BASE ?? "/",
});
