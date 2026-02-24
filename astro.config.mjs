import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";

const site = "https://restaurantkrongthai.com";

/** EN slug → FR slug (must match slugMap in src/i18n/utils.ts) */
const slugMap = {
  "": "",
  about: "a-propos",
  menu: "menu",
  gallery: "galerie",
  catering: "traiteur",
  specials: "speciaux",
  contact: "contact",
  privacy: "confidentialite",
  accessibility: "accessibilite",
};
const reverseSlugMap = Object.fromEntries(
  Object.entries(slugMap).map(([k, v]) => [v, k])
);

export default defineConfig({
  site,
  security: {
    checkOrigin: false,
  },
  output: "static",
  adapter: vercel(),
  devToolbar: { enabled: false },
  integrations: [sitemap({
    filter: (page) =>
      !page.includes("/thanks") && !page.includes("/merci"),
    serialize: (item) => {
      const url = new URL(item.url);
      const parts = url.pathname.split("/").filter(Boolean);
      const locale = parts[0]; // "en" or "fr"
      const slug = parts[1] || "";

      let enSlug, frSlug;
      if (locale === "en") {
        enSlug = slug;
        frSlug = slugMap[slug];
      } else {
        frSlug = slug;
        enSlug = reverseSlugMap[slug];
      }

      // Only add hreflang if we can resolve both sides
      if (enSlug !== undefined && frSlug !== undefined) {
        const enUrl = `${site}/en/${enSlug ? enSlug + "/" : ""}`;
        const frUrl = `${site}/fr/${frSlug ? frSlug + "/" : ""}`;
        item.links = [
          { lang: "en-CA", url: enUrl },
          { lang: "fr-CA", url: frUrl },
        ];
      }

      return item;
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
