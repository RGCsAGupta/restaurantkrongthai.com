import en from "./en";
import fr from "./fr";

const translations = { en, fr } as const;

export type Locale = keyof typeof translations;
export type TranslationKeys = typeof en;

export function getLocaleFromUrl(url: URL): Locale {
  const segments = url.pathname.replace("/promo", "").split("/").filter(Boolean);
  const lang = segments[0];
  if (lang === "fr") return "fr";
  return "en";
}

export function t(locale: Locale): TranslationKeys {
  return translations[locale];
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === "en" ? "fr" : "en";
}

/** Map English slugs to French equivalents */
const slugMap: Record<string, string> = {
  catering: "traiteur",
  specials: "speciaux",
  thanks: "merci",
  about: "a-propos",
  menu: "menu",
  gallery: "galerie",
  contact: "contact",
  privacy: "confidentialite",
  accessibility: "accessibilite",
};

const reverseSlugMap = Object.fromEntries(
  Object.entries(slugMap).map(([k, v]) => [v, k])
);

export function localizedPath(locale: Locale, path: string): string {
  const base = "/promo";
  const clean = path.replace(/^\//, "").replace(/\/$/, "");

  if (!clean || clean === "en" || clean === "fr") {
    return `${base}/${locale}/`;
  }

  const slug = locale === "fr" ? (slugMap[clean] ?? clean) : (reverseSlugMap[clean] ?? clean);
  return `${base}/${locale}/${slug}/`;
}
