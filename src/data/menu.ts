export interface MenuItem {
  name: { en: string; fr: string };
  desc?: { en: string; fr: string };
  price: string;
  popular?: boolean;
  chefSpecial?: boolean;
  img?: string;
  spicy?: boolean;
}

export interface MenuCategory {
  id: string;
  name: { en: string; fr: string };
  icon: string;
  priceNote?: { en: string; fr: string };
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: "soups",
    name: { en: "Soups", fr: "Soupes" },
    icon: "🍲",
    priceNote: { en: "Small $7 · Large $16", fr: "Petite 7 $ · Grande 16 $" },
    items: [
      { name: { en: "S1 · Bangkok Soup", fr: "S1 · Soupe Bangkok" }, desc: { en: "Our signature — rich coconut broth with shrimp, chicken, mushrooms & lemongrass", fr: "Notre signature — bouillon de coco riche avec crevettes, poulet, champignons et citronnelle" }, price: "7/16", popular: true, chefSpecial: true, img: "/images/bangkok-soup.jpg" },
      { name: { en: "S2 · Wonton Soup", fr: "S2 · Soupe Wonton" }, desc: { en: "Delicate pork and shrimp wontons in a clear, aromatic broth", fr: "Wontons délicats au porc et crevettes dans un bouillon clair et aromatique" }, price: "7/16", img: "/images/wonton-soup.jpg" },
      { name: { en: "S3 · Phnom Penh Soup", fr: "S3 · Soupe Phnom Penh" }, desc: { en: "Traditional Cambodian noodle soup with pork, shrimp & bean sprouts", fr: "Soupe cambodgienne traditionnelle aux nouilles avec porc, crevettes et fèves germées" }, price: "7/16", img: "/images/phnom-penh-soup.jpg" },
      { name: { en: "S4 · Tom Yum Koong", fr: "S4 · Tom Yum Koong" }, desc: { en: "Hot and sour Thai shrimp soup with lemongrass, galangal & lime leaves", fr: "Soupe thaïe épicée et acidulée aux crevettes avec citronnelle, galanga et feuilles de lime" }, price: "7/16", spicy: true },
      { name: { en: "S5 · Tom Kha Koong", fr: "S5 · Tom Kha Koong" }, desc: { en: "Coconut milk soup with shrimp, galangal, mushrooms & fresh herbs", fr: "Soupe au lait de coco avec crevettes, galanga, champignons et herbes fraîches" }, price: "7/16" },
      { name: { en: "S6 · Vegetable Soup", fr: "S6 · Soupe aux légumes" }, desc: { en: "Light and nourishing broth with seasonal Asian vegetables & tofu", fr: "Bouillon léger et nourrissant avec légumes asiatiques de saison et tofu" }, price: "7/16", img: "/images/vegetable-soup.jpg" },
    ],
  },
  {
    id: "meal-soups",
    name: { en: "Meal Soups", fr: "Soupes-repas" },
    icon: "🍜",
    priceNote: { en: "Chicken/Beef $18 · Shrimps $19 · Chicken & Shrimps $20", fr: "Poulet/Bœuf 18 $ · Crevettes 19 $ · Poulet & Crevettes 20 $" },
    items: [
      { name: { en: "S7 · Pho", fr: "S7 · Pho" }, desc: { en: "Traditional Vietnamese rice noodle soup with aromatic herbs", fr: "Soupe vietnamienne traditionnelle aux nouilles de riz et herbes aromatiques" }, price: "18", popular: true, img: "/images/pho-beef.jpg" },
      { name: { en: "S8 · Spicy Soup", fr: "S8 · Soupe épicée" }, desc: { en: "Spicy broth with rice noodles and your choice of protein", fr: "Bouillon épicé avec nouilles de riz et votre choix de protéine" }, price: "18", img: "/images/pho-spicy.jpg", spicy: true },
    ],
  },
  {
    id: "appetizers",
    name: { en: "Appetizers", fr: "Entrées" },
    icon: "🥟",
    items: [
      { name: { en: "E1 · Imperial Rolls", fr: "E1 · Rouleaux impériaux" }, desc: { en: "Crispy golden rolls with seasoned pork filling & house-made dipping sauce", fr: "Rouleaux dorés croustillants farcis de porc assaisonné avec sauce maison" }, price: "6", img: "/images/imperial-rolls.jpg" },
      { name: { en: "E2 · Vegetable Rolls", fr: "E2 · Rouleaux aux légumes" }, desc: { en: "Crispy fried rolls stuffed with fresh vegetables and glass noodles", fr: "Rouleaux frits croustillants garnis de légumes frais et nouilles de verre" }, price: "6", img: "/images/vegetable-rolls.jpg" },
      { name: { en: "E3 · Fresh Spring Rolls", fr: "E3 · Rouleaux de printemps (frais)" }, desc: { en: "Hand-wrapped rice paper rolls with shrimp, vermicelli & fresh herbs", fr: "Rouleaux de papier de riz faits à la main avec crevettes, vermicelles et herbes fraîches" }, price: "9", popular: true, img: "/images/spring-rolls-fresh.jpg" },
      { name: { en: "E4 · Crispy Wontons", fr: "E4 · Wontons croustillants" }, desc: { en: "Deep-fried wontons with sweet chili sauce — crispy and golden", fr: "Wontons frits à la sauce chili sucrée — croustillants et dorés" }, price: "6", img: "/images/crispy-wontons.jpg" },
      { name: { en: "E5 · Cambodian Salad", fr: "E5 · Salade cambodgienne" }, desc: { en: "Traditional Khmer salad with fresh herbs, lime dressing & grilled protein", fr: "Salade khmère traditionnelle aux herbes fraîches, vinaigrette au lime et protéine grillée" }, price: "10" },
      { name: { en: "E6 · Fried Scallop", fr: "E6 · Pétoncle frit" }, desc: { en: "Tender scallops lightly battered and fried to golden perfection", fr: "Pétoncles tendres légèrement panés et frits à la perfection dorée" }, price: "9" },
      { name: { en: "E7 · Mango Salad", fr: "E7 · Salade de mangue" }, desc: { en: "Refreshing green mango salad with chilies, lime & toasted peanuts", fr: "Salade rafraîchissante de mangue verte avec piments, lime et arachides grillées" }, price: "12", spicy: true },
      { name: { en: "E8 · Chicken Wings", fr: "E8 · Ailes de poulet" }, desc: { en: "Marinated chicken wings fried until crispy, served with dipping sauce", fr: "Ailes de poulet marinées et frites jusqu'à ce qu'elles soient croustillantes, avec sauce" }, price: "10" },
      { name: { en: "E9 · Mini Crispy Shrimp Rolls", fr: "E9 · Mini rouleaux crevettes croustillants" }, desc: { en: "Bite-sized shrimp rolls wrapped and fried until golden and crunchy", fr: "Mini rouleaux de crevettes enroulés et frits jusqu'à ce qu'ils soient dorés et croquants" }, price: "9", img: "/images/mini-shrimp-rolls.jpg" },
      { name: { en: "E10 · Appetizer Platter", fr: "E10 · Plateau d'entrées" }, desc: { en: "A generous sampler of our most popular starters — perfect for sharing", fr: "Un généreux assortiment de nos entrées les plus populaires — parfait pour partager" }, price: "18", popular: true, img: "/images/appetizer-platter.jpg" },
      { name: { en: "E11 · Dumplings", fr: "E11 · Dumplings" }, desc: { en: "Steamed or fried dumplings served with our signature peanut sauce", fr: "Dumplings cuits à la vapeur ou frits, servis avec notre sauce aux arachides signature" }, price: "9/16", img: "/images/dumplings-peanut-sauce.jpg" },
    ],
  },
  {
    id: "fried-rice",
    name: { en: "Fried Rice", fr: "Riz frit" },
    icon: "🍚",
    priceNote: { en: "All $21 (Seafood $26)", fr: "Tous 21 $ (Fruits de mer 26 $)" },
    items: [
      { name: { en: "R1 · Thai Fried Rice", fr: "R1 · Riz frit thaï" }, desc: { en: "Wok-fired jasmine rice with egg, vegetables & Thai seasonings", fr: "Riz jasmin sauté au wok avec œuf, légumes et assaisonnements thaïs" }, price: "21", popular: true, img: "/images/thai-fried-rice.jpg" },
      { name: { en: "R2 · Ginger Fried Rice", fr: "R2 · Riz frit au gingembre" }, desc: { en: "Fragrant jasmine rice stir-fried with fresh ginger, vegetables & soy", fr: "Riz jasmin parfumé sauté avec gingembre frais, légumes et soya" }, price: "21" },
      { name: { en: "R3 · Cambodian Fried Rice", fr: "R3 · Riz frit cambodgien" }, desc: { en: "Khmer-style fried rice with traditional Cambodian spices & herbs", fr: "Riz frit à la khmère avec épices et herbes cambodgiennes traditionnelles" }, price: "21" },
      { name: { en: "R4 · Seafood Fried Rice (Khao Pad Talay)", fr: "R4 · Riz frit fruits de mer (Khao Pad Talay)" }, desc: { en: "Jasmine rice wok-tossed with shrimp, squid, scallops & vegetables", fr: "Riz jasmin sauté au wok avec crevettes, calmar, pétoncles et légumes" }, price: "26" },
      { name: { en: "RS · House Fried Rice", fr: "RS · Riz frit maison" }, desc: { en: "Our house special — a generous blend of meats, vegetables & aromatic rice", fr: "Notre spécial maison — un mélange généreux de viandes, légumes et riz aromatique" }, price: "21" },
    ],
  },
  {
    id: "noodles",
    name: { en: "Noodle Dishes", fr: "Plats de nouilles" },
    icon: "🍝",
    priceNote: { en: "Chicken/Beef base price · Veg/Tofu −$1 · Shrimps +$2 · Chicken & Shrimps +$4", fr: "Prix de base Poulet/Bœuf · Végé/Tofu −1 $ · Crevettes +2 $ · Poulet & Crevettes +4 $" },
    items: [
      { name: { en: "A1 · Pad Thai", fr: "A1 · Pad Thai" }, desc: { en: "Classic stir-fried rice noodles with tamarind sauce, bean sprouts, peanuts & lime", fr: "Nouilles de riz sautées classiques avec sauce tamarin, fèves germées, arachides et lime" }, price: "21", popular: true, chefSpecial: true, img: "/images/pad-thai.jpg" },
      { name: { en: "A2 · Royal Nest (Crispy Noodles)", fr: "A2 · Nid Royal (Nouilles croustillantes)" }, desc: { en: "Crispy egg noodle nest topped with stir-fried vegetables & your choice of protein", fr: "Nid de nouilles aux œufs croustillantes garni de légumes sautés et votre choix de protéine" }, price: "22", img: "/images/royal-nest.jpg" },
      { name: { en: "A3 · Thai Nest (Crispy Noodles)", fr: "A3 · Nid Thaïlandais (Nouilles croustillantes)" }, desc: { en: "Thai-spiced crispy noodle nest in a sweet and savoury sauce", fr: "Nid de nouilles croustillantes aux épices thaïes dans une sauce sucrée-salée" }, price: "22", img: "/images/thai-nest.jpg" },
      { name: { en: "A4 · Banh Bung (Vermicelli Bowl)", fr: "A4 · Banh Bung (Bol de vermicelles)" }, desc: { en: "Vietnamese vermicelli bowl with fresh herbs, pickled vegetables & fish sauce dressing", fr: "Bol de vermicelles vietnamien avec herbes fraîches, légumes marinés et vinaigrette au nuoc-mâm" }, price: "18", img: "/images/banh-bung.jpg" },
      { name: { en: "B2 · Banh Hoi", fr: "B2 · Banh Hoi" }, desc: { en: "Fine Cambodian rice vermicelli with grilled meat, fresh herbs & dipping sauce", fr: "Fines vermicelles de riz cambodgiennes avec viande grillée, herbes fraîches et sauce" }, price: "18", img: "/images/banh-hoi.jpg" },
    ],
  },
  {
    id: "vegetarian",
    name: { en: "Vegetarian", fr: "Végétarien" },
    icon: "🥬",
    priceNote: { en: "All $19 · Served with jasmine rice", fr: "Tous 19 $ · Servi avec riz jasmin" },
    items: [
      { name: { en: "P1 · Asian Vegetables (Tofu)", fr: "P1 · Légumes asiatiques (Tofu)" }, desc: { en: "Stir-fried seasonal Asian vegetables with crispy tofu in light soy sauce", fr: "Légumes asiatiques de saison sautés avec tofu croustillant dans une sauce soya légère" }, price: "19", img: "/images/asian-vegetables-stir-fry.jpg" },
      { name: { en: "P1A · Tofu & Beansprout Stir-Fry", fr: "P1A · Sauté de tofu et fèves germées" }, desc: { en: "Crispy tofu tossed with fresh bean sprouts and a savoury garlic sauce", fr: "Tofu croustillant mélangé avec fèves germées fraîches et une sauce à l'ail savoureuse" }, price: "19" },
      { name: { en: "P1B · Panang Tofu", fr: "P1B · Panang au tofu" }, desc: { en: "Rich and creamy panang curry with tofu, peppers & Thai basil", fr: "Cari panang riche et crémeux avec tofu, poivrons et basilic thaï" }, price: "19", spicy: true },
    ],
  },
  {
    id: "chicken-beef",
    name: { en: "Chicken & Beef", fr: "Poulet & Bœuf" },
    icon: "🥘",
    priceNote: { en: "All $21 · Served with jasmine rice", fr: "Tous 21 $ · Servi avec riz jasmin" },
    items: [
      { name: { en: "P2 · Broccoli", fr: "P2 · Brocoli" }, desc: { en: "Tender chicken or beef stir-fried with fresh broccoli in oyster sauce", fr: "Poulet ou bœuf tendre sauté avec brocoli frais dans une sauce aux huîtres" }, price: "21", img: "/images/broccoli-stir-fry.jpg" },
      { name: { en: "P3 · Loc Lac", fr: "P3 · Loc Lac" }, desc: { en: "Marinated beef cubes seared in a tangy lime-pepper sauce — a Cambodian classic", fr: "Cubes de bœuf marinés saisis dans une sauce lime-poivre acidulée — un classique cambodgien" }, price: "21" },
      { name: { en: "P4 · Khmer Beef", fr: "P4 · Bœuf khmer" }, desc: { en: "Beef stir-fried with Cambodian spices, lemongrass & fresh vegetables", fr: "Bœuf sauté avec épices cambodgiennes, citronnelle et légumes frais" }, price: "21", spicy: true },
      { name: { en: "P5 · 5-Spice Chicken", fr: "P5 · Poulet cinq épices" }, desc: { en: "Tender chicken marinated in aromatic five-spice blend, pan-seared to perfection", fr: "Poulet tendre mariné dans un mélange aromatique de cinq épices, poêlé à la perfection" }, price: "21" },
      { name: { en: "P6 · Beloved Skewers", fr: "P6 · Brochettes adorées" }, desc: { en: "Grilled lemongrass chicken skewers with a sweet peanut dipping sauce", fr: "Brochettes de poulet à la citronnelle grillées avec sauce aux arachides sucrée" }, price: "21" },
      { name: { en: "P7 · Khmer Chicken", fr: "P7 · Poulet khmer" }, desc: { en: "Traditional Khmer-style chicken with Cambodian herbs and light curry sauce", fr: "Poulet à la khmère traditionnel avec herbes cambodgiennes et sauce cari légère" }, price: "21" },
      { name: { en: "P8 · Asian Vegetables w/ Chicken", fr: "P8 · Légumes asiatiques au poulet" }, desc: { en: "Wok-tossed seasonal vegetables with tender chicken in garlic sauce", fr: "Légumes de saison sautés au wok avec poulet tendre dans une sauce à l'ail" }, price: "21" },
      { name: { en: "P9 · Basil (Pad Bai Grapao)", fr: "P9 · Basilic (Pad Bai Grapao)" }, desc: { en: "Spicy Thai basil stir-fry with chilies, garlic, green beans & holy basil", fr: "Sauté épicé au basilic thaï avec piments, ail, haricots verts et basilic sacré" }, price: "21", img: "/images/thai-basil-chicken.jpg", spicy: true },
      { name: { en: "P10 · Ginger (Pad Khing)", fr: "P10 · Gingembre (Pad Khing)" }, desc: { en: "Fragrant stir-fry with julienned ginger, mushrooms & onions", fr: "Sauté parfumé avec gingembre en julienne, champignons et oignons" }, price: "21" },
      { name: { en: "P11 · Cashew", fr: "P11 · Noix de cajou" }, desc: { en: "Wok-fried chicken with roasted cashews, vegetables & light chili sauce", fr: "Poulet sauté au wok avec noix de cajou grillées, légumes et sauce chili légère" }, price: "21", img: "/images/cashew-chicken.jpg" },
      { name: { en: "P12 · Peanut", fr: "P12 · Arachides" }, desc: { en: "Chicken or beef stir-fried with crushed peanuts in a savoury peanut sauce", fr: "Poulet ou bœuf sauté avec arachides concassées dans une sauce aux arachides savoureuse" }, price: "21", img: "/images/peanut-stir-fry.jpg" },
      { name: { en: "P13 · General's Chicken", fr: "P13 · Poulet du Général" }, desc: { en: "Crispy battered chicken in our signature sweet & spicy sauce", fr: "Poulet pané croustillant dans notre sauce sucrée et épicée signature" }, price: "21", popular: true, chefSpecial: true, img: "/images/general-thai-stir-fry.jpg", spicy: true },
    ],
  },
  {
    id: "curries",
    name: { en: "Thai & Cambodian Curries", fr: "Caris thaïs et cambodgiens" },
    icon: "🍛",
    priceNote: { en: "All $21 · Served with jasmine rice", fr: "Tous 21 $ · Servi avec riz jasmin" },
    items: [
      { name: { en: "P14 · Thai Chicken Curry", fr: "P14 · Cari thaï au poulet" }, desc: { en: "Classic yellow curry with tender chicken, potatoes & coconut milk", fr: "Cari jaune classique avec poulet tendre, pommes de terre et lait de coco" }, price: "21" },
      { name: { en: "P15 · Pineapple Curry (Gaeng Sapparod)", fr: "P15 · Cari à l'ananas (Gaeng Sapparod)" }, desc: { en: "Sweet and savoury curry with fresh pineapple chunks & coconut milk", fr: "Cari sucré-salé avec morceaux d'ananas frais et lait de coco" }, price: "21" },
      { name: { en: "P16 · Red Curry (Pa Nang)", fr: "P16 · Cari rouge (Pa Nang)" }, desc: { en: "Creamy coconut curry with red chili paste, bamboo, peppers & Thai basil", fr: "Cari crémeux au coco avec pâte de chili rouge, bambou, poivrons et basilic thaï" }, price: "21", popular: true, chefSpecial: true, img: "/images/thai-red-curry.jpg", spicy: true },
      { name: { en: "P17 · Green Curry (Gaeng Keow Warn)", fr: "P17 · Cari vert (Gaeng Keow Warn)" }, desc: { en: "Fragrant green curry with coconut milk, bamboo shoots, eggplant & basil", fr: "Cari vert parfumé au lait de coco, pousses de bambou, aubergine et basilic" }, price: "21", img: "/images/green-curry-chicken.jpg", spicy: true },
      { name: { en: "P18 · Mushroom Curry", fr: "P18 · Cari aux champignons" }, desc: { en: "Assorted mushrooms in a rich coconut curry with Thai herbs", fr: "Assortiment de champignons dans un riche cari au coco avec herbes thaïes" }, price: "21", img: "/images/mushroom-stir-fry.jpg" },
      { name: { en: "P19 · Pineapple Basil Curry", fr: "P19 · Cari ananas basilic" }, desc: { en: "Red curry with fresh pineapple, Thai basil & bell peppers in coconut milk", fr: "Cari rouge avec ananas frais, basilic thaï et poivrons dans du lait de coco" }, price: "21", spicy: true },
      { name: { en: "P20 · Hot Chilli Curry", fr: "P20 · Cari piment fort" }, desc: { en: "Our spiciest curry — fiery chili paste with bamboo, green beans & bold Thai spices", fr: "Notre cari le plus épicé — pâte de chili ardente avec bambou, haricots verts et épices thaïes audacieuses" }, price: "21", spicy: true },
    ],
  },
  {
    id: "seafood",
    name: { en: "Seafood", fr: "Fruits de mer" },
    icon: "🦐",
    priceNote: { en: "Served with jasmine rice", fr: "Servi avec riz jasmin" },
    items: [
      { name: { en: "F1 · Thai Shrimps", fr: "F1 · Crevettes thaïes" }, desc: { en: "Jumbo shrimps stir-fried with Thai spices, vegetables & aromatic sauce", fr: "Grosses crevettes sautées avec épices thaïes, légumes et sauce aromatique" }, price: "23", img: "/images/thai-shrimp.jpg" },
      { name: { en: "F2 · Malaca Shrimps", fr: "F2 · Crevettes Malaca" }, desc: { en: "Shrimps in a rich Malaca-style coconut curry with turmeric & spices", fr: "Crevettes dans un riche cari Malaca au coco avec curcuma et épices" }, price: "23" },
      { name: { en: "F3 · Royal Shrimps", fr: "F3 · Crevettes royales" }, desc: { en: "Shrimps served on a crispy noodle nest with stir-fried vegetables", fr: "Crevettes servies sur un nid de nouilles croustillantes avec légumes sautés" }, price: "23", img: "/images/royal-shrimp-nest.jpg" },
      { name: { en: "F4 · King's Skewers", fr: "F4 · Brochettes du roi" }, desc: { en: "Grilled shrimp skewers marinated in lemongrass and served with peanut sauce", fr: "Brochettes de crevettes grillées marinées à la citronnelle, servies avec sauce aux arachides" }, price: "23" },
      { name: { en: "F5 · Seafood Basil", fr: "F5 · Fruits de mer au basilic" }, desc: { en: "Mixed seafood wok-tossed with chilies, garlic & fresh Thai basil", fr: "Fruits de mer assortis sautés au wok avec piments, ail et basilic thaï frais" }, price: "25", spicy: true },
      { name: { en: "F6 · Seafood Bamboo", fr: "F6 · Fruits de mer au bambou" }, desc: { en: "Mixed seafood stir-fried with bamboo shoots, vegetables & savoury sauce", fr: "Fruits de mer assortis sautés avec pousses de bambou, légumes et sauce savoureuse" }, price: "26" },
      { name: { en: "F7 · General's Shrimps", fr: "F7 · Crevettes du Général" }, desc: { en: "Crispy battered shrimps in sweet and spicy General's sauce", fr: "Crevettes panées croustillantes dans la sauce sucrée et épicée du Général" }, price: "23", spicy: true },
      { name: { en: "F8 · Pineapple Shrimps", fr: "F8 · Crevettes à l'ananas" }, desc: { en: "Shrimps stir-fried with fresh pineapple, peppers & a tangy sweet sauce", fr: "Crevettes sautées avec ananas frais, poivrons et sauce sucrée-acidulée" }, price: "23" },
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
      { name: { en: "2 People — Jardin Éternel", fr: "2 personnes — Jardin Éternel" }, desc: { en: "Our signature couple's menu — a specially curated multi-course experience for two", fr: "Notre menu signature pour couple — une expérience gastronomique multi-services pour deux" }, price: "60" },
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
