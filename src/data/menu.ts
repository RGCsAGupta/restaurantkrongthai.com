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
    priceNote: { en: "Small $7 · Large $16", fr: "Petite 7 $ · Grande 16 $" },
    items: [
      { name: { en: "S1 · Bangkok Soup", fr: "S1 · Soupe Bangkok" }, desc: { en: "Our signature — rich coconut broth with shrimp, chicken, mushrooms & lemongrass", fr: "Notre signature — bouillon de coco riche avec crevettes, poulet, champignons et citronnelle" }, price: "7/16", popular: true, chefSpecial: true, img: "/images/bangkok-soup.jpg" },
      { name: { en: "S2 · Wonton Soup", fr: "S2 · Soupe Wonton" }, price: "7/16", img: "/images/wonton-soup.jpg" },
      { name: { en: "S3 · Phnom Penh Soup", fr: "S3 · Soupe Phnom Penh" }, price: "7/16", img: "/images/phnom-penh-soup.jpg" },
      { name: { en: "S4 · Tom Yum Koong", fr: "S4 · Tom Yum Koong" }, price: "7/16" },
      { name: { en: "S5 · Tom Kha Koong", fr: "S5 · Tom Kha Koong" }, price: "7/16" },
      { name: { en: "S6 · Vegetable Soup", fr: "S6 · Soupe aux légumes" }, price: "7/16", img: "/images/vegetable-soup.jpg" },
    ],
  },
  {
    id: "meal-soups",
    name: { en: "Meal Soups", fr: "Soupes-repas" },
    icon: "🍜",
    priceNote: { en: "Chicken/Beef $18 · Shrimps $19 · Chicken & Shrimps $20", fr: "Poulet/Bœuf 18 $ · Crevettes 19 $ · Poulet & Crevettes 20 $" },
    items: [
      { name: { en: "S7 · Pho", fr: "S7 · Pho" }, desc: { en: "Traditional Vietnamese rice noodle soup with aromatic herbs", fr: "Soupe vietnamienne traditionnelle aux nouilles de riz et herbes aromatiques" }, price: "18", popular: true, img: "/images/pho-beef.jpg" },
      { name: { en: "S8 · Spicy Soup", fr: "S8 · Soupe épicée" }, desc: { en: "Spicy broth with rice noodles and your choice of protein", fr: "Bouillon épicé avec nouilles de riz et votre choix de protéine" }, price: "18", img: "/images/pho-spicy.jpg" },
    ],
  },
  {
    id: "appetizers",
    name: { en: "Appetizers", fr: "Entrées" },
    icon: "🥟",
    items: [
      { name: { en: "E1 · Imperial Rolls", fr: "E1 · Rouleaux impériaux" }, price: "6", img: "/images/imperial-rolls.jpg" },
      { name: { en: "E2 · Vegetable Rolls", fr: "E2 · Rouleaux aux légumes" }, price: "6", img: "/images/vegetable-rolls.jpg" },
      { name: { en: "E3 · Fresh Spring Rolls", fr: "E3 · Rouleaux de printemps (frais)" }, desc: { en: "Hand-wrapped rice paper rolls with shrimp, vermicelli & fresh herbs", fr: "Rouleaux de papier de riz faits à la main avec crevettes, vermicelles et herbes fraîches" }, price: "9", popular: true, img: "/images/spring-rolls-fresh.jpg" },
      { name: { en: "E4 · Crispy Wontons", fr: "E4 · Wontons croustillants" }, price: "6", img: "/images/crispy-wontons.jpg" },
      { name: { en: "E5 · Cambodian Salad", fr: "E5 · Salade cambodgienne" }, price: "10" },
      { name: { en: "E6 · Fried Scallop", fr: "E6 · Pétoncle frit" }, price: "9" },
      { name: { en: "E7 · Mango Salad", fr: "E7 · Salade de mangue" }, price: "12" },
      { name: { en: "E8 · Chicken Wings", fr: "E8 · Ailes de poulet" }, price: "10" },
      { name: { en: "E9 · Mini Crispy Shrimp Rolls", fr: "E9 · Mini rouleaux crevettes croustillants" }, price: "9", img: "/images/mini-shrimp-rolls.jpg" },
      { name: { en: "E10 · Appetizer Platter", fr: "E10 · Plateau d'entrées" }, desc: { en: "A generous sampler of our most popular starters — perfect for sharing", fr: "Un généreux assortiment de nos entrées les plus populaires — parfait pour partager" }, price: "18", popular: true, img: "/images/appetizer-platter.jpg" },
      { name: { en: "E11 · Dumplings", fr: "E11 · Dumplings" }, price: "9/16", img: "/images/dumplings-peanut-sauce.jpg" },
    ],
  },
  {
    id: "fried-rice",
    name: { en: "Fried Rice", fr: "Riz frit" },
    icon: "🍚",
    priceNote: { en: "All $21 (Seafood $26)", fr: "Tous 21 $ (Fruits de mer 26 $)" },
    items: [
      { name: { en: "R1 · Thai Fried Rice", fr: "R1 · Riz frit thaï" }, desc: { en: "Wok-fired jasmine rice with egg, vegetables & Thai seasonings", fr: "Riz jasmin sauté au wok avec œuf, légumes et assaisonnements thaïs" }, price: "21", popular: true, img: "/images/thai-fried-rice.jpg" },
      { name: { en: "R2 · Ginger Fried Rice", fr: "R2 · Riz frit au gingembre" }, price: "21" },
      { name: { en: "R3 · Cambodian Fried Rice", fr: "R3 · Riz frit cambodgien" }, price: "21" },
      { name: { en: "R4 · Seafood Fried Rice (Khao Pad Talay)", fr: "R4 · Riz frit fruits de mer (Khao Pad Talay)" }, price: "26" },
      { name: { en: "RS · House Fried Rice", fr: "RS · Riz frit maison" }, price: "21" },
    ],
  },
  {
    id: "noodles",
    name: { en: "Noodle Dishes", fr: "Plats de nouilles" },
    icon: "🍝",
    priceNote: { en: "Chicken/Beef base price · Veg/Tofu −$1 · Shrimps +$2 · Chicken & Shrimps +$4", fr: "Prix de base Poulet/Bœuf · Végé/Tofu −1 $ · Crevettes +2 $ · Poulet & Crevettes +4 $" },
    items: [
      { name: { en: "A1 · Pad Thai", fr: "A1 · Pad Thai" }, desc: { en: "Classic stir-fried rice noodles with tamarind sauce, bean sprouts, peanuts & lime", fr: "Nouilles de riz sautées classiques avec sauce tamarin, fèves germées, arachides et lime" }, price: "21", popular: true, chefSpecial: true, img: "/images/pad-thai.jpg" },
      { name: { en: "A2 · Royal Nest (Crispy Noodles)", fr: "A2 · Nid Royal (Nouilles croustillantes)" }, price: "22", img: "/images/royal-nest.jpg" },
      { name: { en: "A3 · Thai Nest (Crispy Noodles)", fr: "A3 · Nid Thaïlandais (Nouilles croustillantes)" }, price: "22", img: "/images/thai-nest.jpg" },
      { name: { en: "A4 · Banh Bung (Vermicelli Bowl)", fr: "A4 · Banh Bung (Bol de vermicelles)" }, price: "18", img: "/images/banh-bung.jpg" },
      { name: { en: "B2 · Banh Hoi", fr: "B2 · Banh Hoi" }, price: "18", img: "/images/banh-hoi.jpg" },
    ],
  },
  {
    id: "vegetarian",
    name: { en: "Vegetarian", fr: "Végétarien" },
    icon: "🥬",
    priceNote: { en: "All $19 · Served with jasmine rice", fr: "Tous 19 $ · Servi avec riz jasmin" },
    items: [
      { name: { en: "P1 · Asian Vegetables (Tofu)", fr: "P1 · Légumes asiatiques (Tofu)" }, price: "19", img: "/images/asian-vegetables-stir-fry.jpg" },
      { name: { en: "P1A · Tofu & Beansprout Stir-Fry", fr: "P1A · Sauté de tofu et fèves germées" }, price: "19" },
      { name: { en: "P1B · Panang Tofu", fr: "P1B · Panang au tofu" }, price: "19" },
    ],
  },
  {
    id: "chicken-beef",
    name: { en: "Chicken & Beef", fr: "Poulet & Bœuf" },
    icon: "🥘",
    priceNote: { en: "All $21 · Served with jasmine rice", fr: "Tous 21 $ · Servi avec riz jasmin" },
    items: [
      { name: { en: "P2 · Broccoli", fr: "P2 · Brocoli" }, price: "21", img: "/images/broccoli-stir-fry.jpg" },
      { name: { en: "P3 · Loc Lac", fr: "P3 · Loc Lac" }, price: "21" },
      { name: { en: "P4 · Khmer Beef", fr: "P4 · Bœuf khmer" }, price: "21" },
      { name: { en: "P5 · 5-Spice Chicken", fr: "P5 · Poulet cinq épices" }, price: "21" },
      { name: { en: "P6 · Beloved Skewers", fr: "P6 · Brochettes adorées" }, price: "21" },
      { name: { en: "P7 · Khmer Chicken", fr: "P7 · Poulet khmer" }, price: "21" },
      { name: { en: "P8 · Asian Vegetables w/ Chicken", fr: "P8 · Légumes asiatiques au poulet" }, price: "21" },
      { name: { en: "P9 · Basil (Pad Bai Grapao)", fr: "P9 · Basilic (Pad Bai Grapao)" }, price: "21", img: "/images/thai-basil-chicken.jpg" },
      { name: { en: "P10 · Ginger (Pad Khing)", fr: "P10 · Gingembre (Pad Khing)" }, price: "21" },
      { name: { en: "P11 · Cashew", fr: "P11 · Noix de cajou" }, price: "21", img: "/images/cashew-chicken.jpg" },
      { name: { en: "P12 · Peanut", fr: "P12 · Arachides" }, price: "21", img: "/images/peanut-stir-fry.jpg" },
      { name: { en: "P13 · General's Chicken", fr: "P13 · Poulet du Général" }, desc: { en: "Crispy battered chicken in our signature sweet & spicy sauce", fr: "Poulet pané croustillant dans notre sauce sucrée et épicée signature" }, price: "21", popular: true, chefSpecial: true, img: "/images/general-thai-stir-fry.jpg" },
    ],
  },
  {
    id: "curries",
    name: { en: "Thai & Cambodian Curries", fr: "Caris thaïs et cambodgiens" },
    icon: "🍛",
    priceNote: { en: "All $21 · Served with jasmine rice", fr: "Tous 21 $ · Servi avec riz jasmin" },
    items: [
      { name: { en: "P14 · Thai Chicken Curry", fr: "P14 · Cari thaï au poulet" }, price: "21" },
      { name: { en: "P15 · Pineapple Curry (Gaeng Sapparod)", fr: "P15 · Cari à l'ananas (Gaeng Sapparod)" }, price: "21" },
      { name: { en: "P16 · Red Curry (Pa Nang)", fr: "P16 · Cari rouge (Pa Nang)" }, desc: { en: "Creamy coconut curry with red chili paste, bamboo, peppers & Thai basil", fr: "Cari crémeux au coco avec pâte de chili rouge, bambou, poivrons et basilic thaï" }, price: "21", popular: true, chefSpecial: true, img: "/images/thai-red-curry.jpg" },
      { name: { en: "P17 · Green Curry (Gaeng Keow Warn)", fr: "P17 · Cari vert (Gaeng Keow Warn)" }, price: "21", img: "/images/green-curry-chicken.jpg" },
      { name: { en: "P18 · Mushroom Curry", fr: "P18 · Cari aux champignons" }, price: "21", img: "/images/mushroom-stir-fry.jpg" },
      { name: { en: "P19 · Pineapple Basil Curry", fr: "P19 · Cari ananas basilic" }, price: "21" },
      { name: { en: "P20 · Hot Chilli Curry", fr: "P20 · Cari piment fort" }, price: "21" },
    ],
  },
  {
    id: "seafood",
    name: { en: "Seafood", fr: "Fruits de mer" },
    icon: "🦐",
    priceNote: { en: "Served with jasmine rice", fr: "Servi avec riz jasmin" },
    items: [
      { name: { en: "F1 · Thai Shrimps", fr: "F1 · Crevettes thaïes" }, price: "23", img: "/images/thai-shrimp.jpg" },
      { name: { en: "F2 · Malaca Shrimps", fr: "F2 · Crevettes Malaca" }, price: "23" },
      { name: { en: "F3 · Royal Shrimps", fr: "F3 · Crevettes royales" }, price: "23", img: "/images/royal-shrimp-nest.jpg" },
      { name: { en: "F4 · King's Skewers", fr: "F4 · Brochettes du roi" }, price: "23" },
      { name: { en: "F5 · Seafood Basil", fr: "F5 · Fruits de mer au basilic" }, price: "25" },
      { name: { en: "F6 · Seafood Bamboo", fr: "F6 · Fruits de mer au bambou" }, price: "26" },
      { name: { en: "F7 · General's Shrimps", fr: "F7 · Crevettes du Général" }, price: "23" },
      { name: { en: "F8 · Pineapple Shrimps", fr: "F8 · Crevettes à l'ananas" }, price: "23" },
    ],
  },
  {
    id: "table-dhote",
    name: { en: "Table d'Hôte", fr: "Table d'hôte" },
    icon: "🎉",
    priceNote: { en: "$3 extra for substitutions", fr: "3 $ de supplément pour substitutions" },
    items: [
      { name: { en: "1 Person — Main Course + Combo", fr: "1 personne — Plat principal + Combo" }, desc: { en: "Any main course + soup, appetizer, jasmine rice, coffee or tea, almond cookies", fr: "Tout plat principal + soupe, entrée, riz jasmin, café ou thé, biscuits aux amandes" }, price: "+10" },
      { name: { en: "2 People — Set Menu", fr: "2 personnes — Menu fixe" }, desc: { en: "Choice of 3 set menus for two (soup, appetizers, mains, rice, dessert)", fr: "Choix de 3 menus fixes pour deux (soupe, entrées, plats, riz, dessert)" }, price: "60" },
      { name: { en: "2 People — Jardin Éternel", fr: "2 personnes — Jardin Éternel" }, price: "60" },
      { name: { en: "3 People — Set Menu", fr: "3 personnes — Menu fixe" }, desc: { en: "Choice of 2 set menus for three (soup, appetizers, mains, rice, dessert)", fr: "Choix de 2 menus fixes pour trois (soupe, entrées, plats, riz, dessert)" }, price: "85" },
      { name: { en: "4 People — Set Menu", fr: "4 personnes — Menu fixe" }, desc: { en: "Complete set menu for four (soup, appetizers, mains, rice, dessert)", fr: "Menu fixe complet pour quatre (soupe, entrées, plats, riz, dessert)" }, price: "110" },
    ],
  },
];

export const sideDishes: MenuItem[] = [
  { name: { en: "Steamed Rice", fr: "Riz vapeur" }, price: "2" },
  { name: { en: "Vermicelli", fr: "Vermicelles" }, price: "2" },
  { name: { en: "Peanut Sauce", fr: "Sauce aux arachides" }, price: "0.75" },
  { name: { en: "Extra Chicken/Beef", fr: "Supplément poulet/bœuf" }, price: "1" },
  { name: { en: "Extra Shrimps", fr: "Supplément crevettes" }, price: "3" },
  { name: { en: "Extra Vegetables", fr: "Supplément légumes" }, price: "3" },
];
