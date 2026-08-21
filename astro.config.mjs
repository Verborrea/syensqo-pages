// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// Set by the GitHub Actions workflow to the repo's actual Pages URL/base.
// Defaults assume a project page (https://<user>.github.io/<repo>/) — if
// this becomes the root <user>.github.io repo instead, set BASE_PATH to "/".
const site = process.env.SITE_URL ?? "https://example.github.io";
const base = process.env.BASE_PATH ?? "/";

export default defineConfig({
  site,
  base,
  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});
