export interface MenuItem {
  name: { en: string; fr: string };
  desc?: { en: string; fr: string };
  price: string;
  popular?: boolean;
  chefSpecial?: boolean;
  img?: string;
  tags?: ("V" | "GF" | "N" | "S" | "SP")[];
}

export interface MenuCategory {
  id: string;
  name: { en: string; fr: string };
  icon: string;
  priceNote?: { en: string; fr: string };
  items: MenuItem[];
}

export const dietaryTags: Record<string, { label: { en: string; fr: string }; color: string }> = {
  V: { label: { en: "Vegetarian", fr: "Végétarien" }, color: "bg-emerald-500/15 text-emerald-400 border-emerald-500/25" },
  GF: { label: { en: "Gluten-Free", fr: "Sans gluten" }, color: "bg-sky-500/15 text-sky-400 border-sky-500/25" },
  N: { label: { en: "Contains Nuts", fr: "Contient des noix" }, color: "bg-amber-500/15 text-amber-400 border-amber-500/25" },
  S: { label: { en: "Shellfish", fr: "Fruits de mer" }, color: "bg-rose-500/15 text-rose-400 border-rose-500/25" },
  SP: { label: { en: "Spicy", fr: "Épicé" }, color: "bg-orange-500/15 text-orange-400 border-orange-500/25" },
};

export const menuCategories: MenuCategory[] = [
  {
    id: "soups",
    name: { en: "Soups", fr: "Soupes" },
    icon: "🍲",
    priceNote: { en: "8 appetizer · 18 meal", fr: "8 entrée · 18 repas" },
    items: [
      { name: { en: "Bangkok Soup", fr: "Soupe Bangkok" }, desc: { en: "Our signature — rich coconut broth with shrimp, chicken, mushrooms & lemongrass", fr: "Notre signature — bouillon de coco riche avec crevettes, poulet, champignons et citronnelle" }, price: "8/18", popular: true, chefSpecial: true, img: "/images/bangkok-soup.jpg", tags: ["GF", "S", "SP"] },
      { name: { en: "Wonton Soup", fr: "Soupe Wonton" }, price: "8/18", img: "/images/wonton-soup.jpg" },
      { name: { en: "Phnom Penh Soup", fr: "Soupe Phnom Penh" }, price: "8/18", img: "/images/phnom-penh-soup.jpg", tags: ["S", "SP"] },
      { name: { en: "Vegetable Soup", fr: "Soupe aux légumes" }, price: "8/18", img: "/images/vegetable-soup.jpg", tags: ["V", "GF"] },
    ],
  },
  {
    id: "appetizers",
    name: { en: "Appetizers", fr: "Entrées" },
    icon: "🥟",
    items: [
      { name: { en: "Imperial Rolls", fr: "Rouleaux impériaux" }, price: "7", img: "/images/imperial-rolls.jpg" },
      { name: { en: "Vegetable Rolls", fr: "Rouleaux aux légumes" }, price: "7", img: "/images/vegetable-rolls.jpg", tags: ["V"] },
      { name: { en: "Spring Rolls (Fresh)", fr: "Rouleaux de printemps (frais)" }, desc: { en: "Hand-wrapped rice paper rolls with shrimp, vermicelli & fresh herbs", fr: "Rouleaux de papier de riz faits à la main avec crevettes, vermicelles et herbes fraîches" }, price: "10", popular: true, img: "/images/spring-rolls-fresh.jpg", tags: ["GF", "S"] },
      { name: { en: "Crispy Wontons (6 pcs)", fr: "Wontons croustillants (6)" }, price: "8", img: "/images/crispy-wontons.jpg" },
      { name: { en: "Mini Crispy Shrimp Rolls (4 pcs)", fr: "Mini rouleaux crevettes (4)" }, price: "10", img: "/images/mini-shrimp-rolls.jpg", tags: ["S"] },
      { name: { en: "Dumplings with Peanut Sauce", fr: "Dumplings sauce arachide" }, price: "10/18", img: "/images/dumplings-peanut-sauce.jpg", tags: ["N"] },
      { name: { en: "Appetizer Platter", fr: "Plateau d'entrées" }, desc: { en: "A generous sampler of our most popular starters — perfect for sharing", fr: "Un généreux assortiment de nos entrées les plus populaires — parfait pour partager" }, price: "20", popular: true, img: "/images/appetizer-platter.jpg" },
    ],
  },
  {
    id: "noodles",
    name: { en: "Noodle Dishes", fr: "Plats de nouilles" },
    icon: "🍜",
    items: [
      { name: { en: "Pad Thai", fr: "Pad Thai" }, desc: { en: "Classic stir-fried rice noodles with tamarind sauce, bean sprouts, peanuts & lime", fr: "Nouilles de riz sautées classiques avec sauce tamarin, fèves germées, arachides et lime" }, price: "24", popular: true, chefSpecial: true, img: "/images/pad-thai.jpg", tags: ["GF", "N"] },
      { name: { en: "Royal Nest (Crispy Noodles)", fr: "Nid Royal (Nouilles croustillantes)" }, price: "24", img: "/images/royal-nest.jpg" },
      { name: { en: "Thai Nest (Crispy Noodles)", fr: "Nid Thai (Nouilles croustillantes)" }, price: "24", img: "/images/thai-nest.jpg" },
      { name: { en: "Banh Bung (Vermicelli Bowl)", fr: "Banh Bung (Bol de vermicelles)" }, price: "18", img: "/images/banh-bung.jpg", tags: ["GF"] },
      { name: { en: "Banh Hoi", fr: "Banh Hoi" }, price: "25", img: "/images/banh-hoi.jpg", tags: ["GF"] },
    ],
  },
  {
    id: "fried-rice",
    name: { en: "Fried Rice", fr: "Riz frit" },
    icon: "🍚",
    priceNote: { en: "All 23", fr: "Tous 23" },
    items: [
      { name: { en: "Thai Fried Rice", fr: "Riz frit thaï" }, desc: { en: "Wok-fired jasmine rice with egg, vegetables & Thai seasonings", fr: "Riz jasmin sauté au wok avec œuf, légumes et assaisonnements thaïs" }, price: "23", popular: true, img: "/images/thai-fried-rice.jpg", tags: ["GF"] },
      { name: { en: "Ginger Fried Rice", fr: "Riz frit au gingembre" }, price: "23", tags: ["GF"] },
      { name: { en: "Cambodian Fried Rice", fr: "Riz frit cambodgien" }, price: "23", tags: ["GF"] },
    ],
  },
  {
    id: "wok",
    name: { en: "From the Wok", fr: "Du Wok" },
    icon: "🥘",
    priceNote: { en: "All 23 · Served with jasmine rice", fr: "Tous 23 · Servi avec riz jasmin" },
    items: [
      { name: { en: "General Thai Stir-Fry", fr: "Sauté Thai Général" }, desc: { en: "Crispy battered protein in our signature sweet & spicy Thai sauce", fr: "Protéine panée croustillante dans notre sauce thaïe sucrée et épicée signature" }, price: "23", popular: true, img: "/images/general-thai-stir-fry.jpg", tags: ["SP"] },
      { name: { en: "Thai Basil Stir-Fry", fr: "Sauté au basilic thaï" }, price: "23", img: "/images/thai-basil-chicken.jpg", tags: ["GF", "SP"] },
      { name: { en: "Cashew Stir-Fry", fr: "Sauté aux noix de cajou" }, price: "23", img: "/images/cashew-chicken.jpg", tags: ["GF", "N"] },
      { name: { en: "Peanut Stir-Fry", fr: "Sauté aux arachides" }, price: "23", img: "/images/peanut-stir-fry.jpg", tags: ["GF", "N"] },
      { name: { en: "Broccoli Stir-Fry", fr: "Sauté au brocoli" }, price: "23", img: "/images/broccoli-stir-fry.jpg", tags: ["GF"] },
      { name: { en: "Mushroom Stir-Fry", fr: "Sauté aux champignons" }, price: "23", img: "/images/mushroom-stir-fry.jpg", tags: ["V", "GF"] },
      { name: { en: "Asian Vegetables", fr: "Légumes asiatiques" }, price: "23", img: "/images/asian-vegetables-stir-fry.jpg", tags: ["V", "GF"] },
    ],
  },
  {
    id: "curries",
    name: { en: "Thai & Cambodian Curries", fr: "Caris thaïs et cambodgiens" },
    icon: "🍛",
    priceNote: { en: "All 23 · Served with jasmine rice", fr: "Tous 23 · Servi avec riz jasmin" },
    items: [
      { name: { en: "Thai Red Curry", fr: "Cari rouge thaï" }, desc: { en: "Creamy coconut curry with red chili paste, bamboo, peppers & Thai basil", fr: "Cari crémeux au coco avec pâte de chili rouge, bambou, poivrons et basilic thaï" }, price: "23", popular: true, chefSpecial: true, img: "/images/thai-red-curry.jpg", tags: ["GF", "SP"] },
      { name: { en: "Green Curry", fr: "Cari vert" }, price: "23", img: "/images/green-curry-chicken.jpg", tags: ["GF", "SP"] },
      { name: { en: "Panaeng Curry", fr: "Cari Panaeng" }, price: "23", tags: ["GF", "N", "SP"] },
      { name: { en: "Pineapple Curry", fr: "Cari à l'ananas" }, price: "23", tags: ["GF", "SP"] },
    ],
  },
];
