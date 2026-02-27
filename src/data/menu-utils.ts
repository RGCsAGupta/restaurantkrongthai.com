import { menuCategories, type MenuItem, type MenuCategory } from "./menu";

/**
 * Strip item code prefix (e.g. "S1 · ", "P16 · ") from a name.
 */
function stripCode(name: string): string {
  return name.replace(/^[A-Z]+\d*[A-Z]?\s*·\s*/, "");
}

/**
 * Generate a URL-safe slug from a dish name.
 * Strips code prefix, normalizes diacritics, lowercases, kebab-cases.
 */
export function generateSlug(name: string): string {
  return stripCode(name)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // remove diacritics
    .toLowerCase()
    .replace(/['']/g, "") // remove apostrophes
    .replace(/[()]/g, "") // remove parentheses
    .replace(/[^a-z0-9]+/g, "-") // non-alphanumeric → hyphen
    .replace(/(^-|-$)/g, "") // trim leading/trailing hyphens
    .replace(/-{2,}/g, "-"); // collapse consecutive hyphens
}

/**
 * Get the display name for an item (code prefix stripped).
 */
export function getDisplayName(item: MenuItem, locale: "en" | "fr"): string {
  return stripCode(item.name[locale]);
}

/**
 * Get the slug for a specific menu item in a given locale.
 */
export function getMenuItemSlug(item: MenuItem, locale: "en" | "fr"): string {
  return generateSlug(item.name[locale]);
}

interface MenuItemWithContext {
  enSlug: string;
  frSlug: string;
  item: MenuItem;
  category: MenuCategory;
}

/**
 * Get all 68 menu items with their EN and FR slugs.
 */
export function getAllMenuItemSlugs(): MenuItemWithContext[] {
  const results: MenuItemWithContext[] = [];
  for (const category of menuCategories) {
    for (const item of category.items) {
      results.push({
        enSlug: generateSlug(item.name.en),
        frSlug: generateSlug(item.name.fr),
        item,
        category,
      });
    }
  }
  return results;
}

/**
 * Look up a menu item by its slug in a given locale.
 */
export function getMenuItemBySlug(
  slug: string,
  locale: "en" | "fr"
): { item: MenuItem; category: MenuCategory } | undefined {
  for (const category of menuCategories) {
    for (const item of category.items) {
      if (generateSlug(item.name[locale]) === slug) {
        return { item, category };
      }
    }
  }
  return undefined;
}

/**
 * Get related items from the same category (excluding the given item).
 */
export function getRelatedItems(
  item: MenuItem,
  category: MenuCategory,
  limit = 4
): MenuItem[] {
  return category.items
    .filter((i) => i.name.en !== item.name.en)
    .slice(0, limit);
}
