import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";

export default defineConfig({
  site: "https://restaurantkrongthai.com",
  security: {
    checkOrigin: false,
  },
  output: "static",
  adapter: vercel(),
  devToolbar: { enabled: false },
  integrations: [sitemap({
    i18n: {
      defaultLocale: "fr",
      locales: {
        en: "en-CA",
        fr: "fr-CA",
      },
    },
  })],
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    defaultLocale: "fr",
    locales: ["en", "fr"],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
});
