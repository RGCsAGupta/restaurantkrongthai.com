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
      { name: { en: "S1 · Bangkok Soup", fr: "S1 · Soupe Bangkok" }, desc: { en: "Our signature — velvety coconut broth simmered with shrimp, chicken, mushrooms & fragrant lemongrass", fr: "Notre signature — bouillon de coco velouté mijoté avec crevettes, poulet, champignons et citronnelle parfumée" }, price: "7/16", popular: true, chefSpecial: true, img: "/images/bangkok-soup.jpg" },
      { name: { en: "S2 · Wonton Soup", fr: "S2 · Soupe Wonton" }, desc: { en: "Silky pork and shrimp wontons floating in a fragrant, soul-warming broth", fr: "Wontons soyeux au porc et crevettes dans un bouillon parfumé et réconfortant" }, price: "7/16", img: "/images/wonton-soup.jpg" },
      { name: { en: "S3 · Phnom Penh Soup", fr: "S3 · Soupe Phnom Penh" }, desc: { en: "A hearty Cambodian favourite — rice noodles, tender pork, shrimp & crunchy bean sprouts in savoury broth", fr: "Un favori cambodgien copieux — nouilles de riz, porc tendre, crevettes et fèves germées croquantes dans un bouillon savoureux" }, price: "7/16", img: "/images/phnom-penh-soup.jpg" },
      { name: { en: "S4 · Tom Yum Koong", fr: "S4 · Tom Yum Koong" }, desc: { en: "Thailand's famous hot & sour soup — bright with lemongrass, galangal, lime leaves & juicy shrimp", fr: "La célèbre soupe thaïe piquante et acidulée — vibrante de citronnelle, galanga, feuilles de lime et crevettes juteuses" }, price: "7/16", spicy: true },
      { name: { en: "S5 · Tom Kha Koong", fr: "S5 · Tom Kha Koong" }, desc: { en: "Silky coconut broth infused with galangal, mushrooms & tender shrimp — comforting and aromatic", fr: "Bouillon de coco soyeux infusé au galanga, champignons et crevettes tendres — réconfortant et aromatique" }, price: "7/16" },
      { name: { en: "S6 · Vegetable Soup", fr: "S6 · Soupe aux légumes" }, desc: { en: "A wholesome bowl of garden-fresh Asian vegetables & silky tofu in a clean, fragrant broth", fr: "Un bol sain de légumes asiatiques du jardin et tofu soyeux dans un bouillon clair et parfumé" }, price: "7/16", img: "/images/vegetable-soup.jpg" },
    ],
  },
  {
    id: "meal-soups",
    name: { en: "Meal Soups", fr: "Soupes-repas" },
    icon: "🍜",
    priceNote: { en: "Chicken/Beef $18 · Shrimps $19 · Chicken & Shrimps $20", fr: "Poulet/Bœuf 18 $ · Crevettes 19 $ · Poulet & Crevettes 20 $" },
    items: [
      { name: { en: "S7 · Pho", fr: "S7 · Pho" }, desc: { en: "Slow-simmered Vietnamese broth with silky rice noodles, fresh herbs, lime & bean sprouts — pure comfort", fr: "Bouillon vietnamien longuement mijoté avec nouilles de riz soyeuses, herbes fraîches, lime et fèves germées — pur réconfort" }, price: "18", popular: true, img: "/images/pho-beef.jpg" },
      { name: { en: "S8 · Spicy Soup", fr: "S8 · Soupe épicée" }, desc: { en: "A fiery, warming bowl — spicy broth loaded with rice noodles, your choice of protein & bold Southeast Asian spices", fr: "Un bol ardent et réconfortant — bouillon épicé garni de nouilles de riz, votre choix de protéine et d'épices d'Asie du Sud-Est" }, price: "18", img: "/images/pho-spicy.jpg", spicy: true },
    ],
  },
  {
    id: "appetizers",
    name: { en: "Appetizers", fr: "Entrées" },
    icon: "🥟",
    items: [
      { name: { en: "E1 · Imperial Rolls", fr: "E1 · Rouleaux impériaux" }, desc: { en: "Shatteringly crispy rolls packed with savoury pork & served with our tangy house dipping sauce", fr: "Rouleaux d'une croustillance irrésistible farcis de porc savoureux, servis avec notre sauce maison acidulée" }, price: "6", img: "/images/imperial-rolls.jpg" },
      { name: { en: "E2 · Vegetable Rolls", fr: "E2 · Rouleaux aux légumes" }, desc: { en: "Golden, crunchy rolls bursting with garden vegetables & glass noodles", fr: "Rouleaux dorés et croquants débordant de légumes du jardin et vermicelles de verre" }, price: "6", img: "/images/vegetable-rolls.jpg" },
      { name: { en: "E3 · Fresh Spring Rolls", fr: "E3 · Rouleaux de printemps (frais)" }, desc: { en: "Delicate rice paper wrapping juicy shrimp, cool vermicelli & fragrant herbs — light, fresh, irresistible", fr: "Papier de riz délicat enveloppant crevettes juteuses, vermicelles frais et herbes parfumées — léger, frais, irrésistible" }, price: "9", popular: true, img: "/images/spring-rolls-fresh.jpg" },
      { name: { en: "E4 · Crispy Wontons", fr: "E4 · Wontons croustillants" }, desc: { en: "Golden, crunchy wontons with a sweet chili dip — addictively snackable", fr: "Wontons dorés et croquants avec trempette chili sucrée — irrésistiblement grignotables" }, price: "6", img: "/images/crispy-wontons.jpg" },
      { name: { en: "E5 · Cambodian Salad", fr: "E5 · Salade cambodgienne" }, desc: { en: "Bright Khmer salad tossed with zesty lime, aromatic herbs & smoky grilled protein", fr: "Salade khmère vibrante mélangée avec lime piquant, herbes aromatiques et protéine grillée fumée" }, price: "10" },
      { name: { en: "E6 · Fried Scallop", fr: "E6 · Pétoncle frit" }, desc: { en: "Sweet, buttery scallops in a light crispy batter — golden on the outside, melt-in-your-mouth tender inside", fr: "Pétoncles sucrés et beurrés dans une panure légère et croustillante — dorés à l'extérieur, fondants à l'intérieur" }, price: "9" },
      { name: { en: "E7 · Mango Salad", fr: "E7 · Salade de mangue" }, desc: { en: "Tangy green mango, fiery chilies, zesty lime & crunchy toasted peanuts — bold and refreshing", fr: "Mangue verte acidulée, piments ardents, lime piquant et arachides grillées croquantes — audacieuse et rafraîchissante" }, price: "12", spicy: true },
      { name: { en: "E8 · Chicken Wings", fr: "E8 · Ailes de poulet" }, desc: { en: "Crispy-skinned wings marinated in Southeast Asian spices — juicy inside, crunchy outside", fr: "Ailes à la peau croustillante marinées aux épices d'Asie du Sud-Est — juteuses à l'intérieur, croquantes à l'extérieur" }, price: "10" },
      { name: { en: "E9 · Mini Crispy Shrimp Rolls", fr: "E9 · Mini rouleaux crevettes croustillants" }, desc: { en: "Perfectly golden bite-sized shrimp rolls — impossibly crunchy and packed with flavour", fr: "Mini rouleaux de crevettes parfaitement dorés — incroyablement croquants et savoureux" }, price: "9", img: "/images/mini-shrimp-rolls.jpg" },
      { name: { en: "E10 · Appetizer Platter", fr: "E10 · Plateau d'entrées" }, desc: { en: "The ultimate starter — a generous spread of our best-loved appetizers, perfect for sharing", fr: "L'entrée ultime — un généreux assortiment de nos entrées les plus aimées, parfait pour partager" }, price: "18", popular: true, img: "/images/appetizer-platter.jpg" },
      { name: { en: "E11 · Dumplings", fr: "E11 · Dumplings" }, desc: { en: "Plump, flavour-packed dumplings — steamed or fried — with our rich, nutty peanut sauce", fr: "Dumplings dodus et savoureux — vapeur ou frits — avec notre riche sauce aux arachides" }, price: "9/16", img: "/images/dumplings-peanut-sauce.jpg" },
    ],
  },
  {
    id: "fried-rice",
    name: { en: "Fried Rice", fr: "Riz frit" },
    icon: "🍚",
    priceNote: { en: "All $21 (Seafood $26)", fr: "Tous 21 $ (Fruits de mer 26 $)" },
    items: [
      { name: { en: "R1 · Thai Fried Rice", fr: "R1 · Riz frit thaï" }, desc: { en: "Smoky wok-fired jasmine rice tossed with egg, crisp vegetables & aromatic Thai seasonings", fr: "Riz jasmin fumé au wok avec œuf, légumes croquants et assaisonnements thaïs aromatiques" }, price: "21", popular: true, img: "/images/thai-fried-rice.jpg" },
      { name: { en: "R2 · Ginger Fried Rice", fr: "R2 · Riz frit au gingembre" }, desc: { en: "Fragrant jasmine rice wok-tossed with sliced fresh ginger, crisp vegetables & a touch of soy", fr: "Riz jasmin parfumé sauté au wok avec gingembre frais tranché, légumes croquants et un soupçon de soya" }, price: "21" },
      { name: { en: "R3 · Cambodian Fried Rice", fr: "R3 · Riz frit cambodgien" }, desc: { en: "Hearty Khmer-style fried rice with bold Cambodian spices, aromatic herbs & wok-charred flavour", fr: "Riz frit copieux à la khmère avec épices cambodgiennes audacieuses, herbes aromatiques et saveur grillée au wok" }, price: "21" },
      { name: { en: "R4 · Seafood Fried Rice (Khao Pad Talay)", fr: "R4 · Riz frit fruits de mer (Khao Pad Talay)" }, desc: { en: "Jasmine rice wok-tossed with plump shrimp, tender squid, sweet scallops & fresh vegetables", fr: "Riz jasmin sauté au wok avec crevettes dodues, calmar tendre, pétoncles sucrés et légumes frais" }, price: "26" },
      { name: { en: "RS · House Fried Rice", fr: "RS · Riz frit maison" }, desc: { en: "Our house favourite — a generous mix of chicken, beef, shrimp & vegetables in smoky wok-kissed rice", fr: "Notre favori maison — un généreux mélange de poulet, bœuf, crevettes et légumes dans un riz fumé au wok" }, price: "21" },
    ],
  },
  {
    id: "noodles",
    name: { en: "Noodle Dishes", fr: "Plats de nouilles" },
    icon: "🍝",
    priceNote: { en: "Chicken/Beef base price · Veg/Tofu −$1 · Shrimps +$2 · Chicken & Shrimps +$4", fr: "Prix de base Poulet/Bœuf · Végé/Tofu −1 $ · Crevettes +2 $ · Poulet & Crevettes +4 $" },
    items: [
      { name: { en: "A1 · Pad Thai", fr: "A1 · Pad Thai" }, desc: { en: "Thailand's beloved noodle dish — silky rice noodles wok-tossed in tangy tamarind sauce with crunchy bean sprouts, crushed peanuts & a squeeze of lime", fr: "Le plat de nouilles emblématique de la Thaïlande — nouilles de riz soyeuses sautées au wok dans une sauce tamarin acidulée avec fèves germées croquantes, arachides concassées et un filet de lime" }, price: "21", popular: true, chefSpecial: true, img: "/images/pad-thai.jpg" },
      { name: { en: "A2 · Royal Nest (Crispy Noodles)", fr: "A2 · Nid Royal (Nouilles croustillantes)" }, desc: { en: "A showstopper — crunchy egg noodle nest crowned with sizzling stir-fried vegetables & your choice of protein", fr: "Un plat spectaculaire — nid de nouilles aux œufs croustillant couronné de légumes sautés grésillants et votre choix de protéine" }, price: "22", img: "/images/royal-nest.jpg" },
      { name: { en: "A3 · Thai Nest (Crispy Noodles)", fr: "A3 · Nid Thaïlandais (Nouilles croustillantes)" }, desc: { en: "Crunchy noodle nest glazed in a sweet-savoury Thai sauce — every bite is a perfect mix of crispy and saucy", fr: "Nid de nouilles croustillant nappé d'une sauce thaïe sucrée-salée — chaque bouchée est un parfait mélange de croustillant et de sauce" }, price: "22", img: "/images/thai-nest.jpg" },
      { name: { en: "A4 · Banh Bung (Vermicelli Bowl)", fr: "A4 · Banh Bung (Bol de vermicelles)" }, desc: { en: "Cool rice vermicelli layered with aromatic herbs, tangy pickled vegetables & a zesty fish sauce dressing", fr: "Vermicelles de riz frais disposés en couches avec herbes aromatiques, légumes marinés acidulés et vinaigrette piquante au nuoc-mâm" }, price: "18", img: "/images/banh-bung.jpg" },
      { name: { en: "B2 · Banh Hoi", fr: "B2 · Banh Hoi" }, desc: { en: "Delicate Cambodian rice vermicelli paired with smoky grilled meat, crisp herbs & a rich dipping sauce", fr: "Fines vermicelles de riz cambodgiennes accompagnées de viande grillée fumée, herbes croquantes et une riche sauce" }, price: "18", img: "/images/banh-hoi.jpg" },
    ],
  },
  {
    id: "vegetarian",
    name: { en: "Vegetarian", fr: "Végétarien" },
    icon: "🥬",
    priceNote: { en: "All $19 · Served with jasmine rice", fr: "Tous 19 $ · Servi avec riz jasmin" },
    items: [
      { name: { en: "P1 · Asian Vegetables (Tofu)", fr: "P1 · Légumes asiatiques (Tofu)" }, desc: { en: "Vibrant seasonal vegetables and golden crispy tofu, wok-tossed in a light, savoury soy glaze", fr: "Légumes de saison vibrants et tofu doré croustillant, sautés au wok dans un glaçage soya léger et savoureux" }, price: "19", img: "/images/asian-vegetables-stir-fry.jpg" },
      { name: { en: "P1A · Tofu & Beansprout Stir-Fry", fr: "P1A · Sauté de tofu et fèves germées" }, desc: { en: "Golden crispy tofu and crunchy bean sprouts tossed in a punchy garlic sauce — simple and satisfying", fr: "Tofu doré croustillant et fèves germées croquantes dans une sauce à l'ail relevée — simple et satisfaisant" }, price: "19" },
      { name: { en: "P1B · Panang Tofu", fr: "P1B · Panang au tofu" }, desc: { en: "Luxuriously creamy panang curry with silky tofu, roasted peppers & aromatic Thai basil", fr: "Cari panang d'un crémeux luxueux avec tofu soyeux, poivrons rôtis et basilic thaï aromatique" }, price: "19", spicy: true },
    ],
  },
  {
    id: "chicken-beef",
    name: { en: "Chicken & Beef", fr: "Poulet & Bœuf" },
    icon: "🥘",
    priceNote: { en: "All $21 · Served with jasmine rice", fr: "Tous 21 $ · Servi avec riz jasmin" },
    items: [
      { name: { en: "P2 · Broccoli", fr: "P2 · Brocoli" }, desc: { en: "Tender protein wok-seared with fresh broccoli florets in a glossy, savoury oyster sauce", fr: "Protéine tendre saisie au wok avec bouquets de brocoli frais dans une sauce aux huîtres lustrée et savoureuse" }, price: "21", img: "/images/broccoli-stir-fry.jpg" },
      { name: { en: "P3 · Loc Lac", fr: "P3 · Loc Lac" }, desc: { en: "Sizzling beef cubes marinated and seared, drizzled with a tangy lime-pepper sauce — a Cambodian favourite", fr: "Cubes de bœuf grésillants marinés et saisis, nappés d'une sauce lime-poivre acidulée — un favori cambodgien" }, price: "21" },
      { name: { en: "P4 · Khmer Beef", fr: "P4 · Bœuf khmer" }, desc: { en: "Boldly spiced beef with fragrant lemongrass, Cambodian herbs & crisp vegetables — smoky and aromatic", fr: "Bœuf aux épices audacieuses avec citronnelle parfumée, herbes cambodgiennes et légumes croquants — fumé et aromatique" }, price: "21", spicy: true },
      { name: { en: "P5 · 5-Spice Chicken", fr: "P5 · Poulet cinq épices" }, desc: { en: "Succulent chicken steeped in warm five-spice — star anise, cinnamon, clove — then pan-seared golden", fr: "Poulet succulent imprégné du mélange cinq épices — anis étoilé, cannelle, clou de girofle — puis poêlé doré" }, price: "21" },
      { name: { en: "P6 · Beloved Skewers", fr: "P6 · Brochettes adorées" }, desc: { en: "Chargrilled lemongrass chicken skewers, smoky and tender, with a rich, nutty peanut dipping sauce", fr: "Brochettes de poulet à la citronnelle grillées au charbon, fumées et tendres, avec une riche sauce aux arachides" }, price: "21" },
      { name: { en: "P7 · Khmer Chicken", fr: "P7 · Poulet khmer" }, desc: { en: "A taste of Cambodia — tender chicken simmered in a delicate curry sauce with traditional Khmer herbs", fr: "Un goût du Cambodge — poulet tendre mijoté dans une sauce cari délicate avec herbes khmères traditionnelles" }, price: "21" },
      { name: { en: "P8 · Asian Vegetables w/ Chicken", fr: "P8 · Légumes asiatiques au poulet" }, desc: { en: "Colourful seasonal vegetables and juicy chicken, wok-fired in a fragrant garlic sauce", fr: "Légumes de saison colorés et poulet juteux, sautés au wok dans une sauce à l'ail parfumée" }, price: "21" },
      { name: { en: "P9 · Basil (Pad Bai Grapao)", fr: "P9 · Basilic (Pad Bai Grapao)" }, desc: { en: "Fiery and fragrant — wok-charred with chilies, garlic, green beans & the unmistakable aroma of holy basil", fr: "Ardent et parfumé — grillé au wok avec piments, ail, haricots verts et l'arôme unique du basilic sacré" }, price: "21", img: "/images/thai-basil-chicken.jpg", spicy: true },
      { name: { en: "P10 · Ginger (Pad Khing)", fr: "P10 · Gingembre (Pad Khing)" }, desc: { en: "Warming and aromatic — julienned fresh ginger, earthy mushrooms & sweet onions in a savoury wok sauce", fr: "Réchauffant et aromatique — gingembre frais en julienne, champignons terreux et oignons sucrés dans une sauce au wok savoureuse" }, price: "21" },
      { name: { en: "P11 · Cashew", fr: "P11 · Noix de cajou" }, desc: { en: "Juicy chicken tossed with crunchy roasted cashews, crisp vegetables & a sweet-smoky chili glaze", fr: "Poulet juteux mélangé avec noix de cajou grillées croquantes, légumes croquants et un glaçage chili sucré-fumé" }, price: "21", img: "/images/cashew-chicken.jpg" },
      { name: { en: "P12 · Peanut", fr: "P12 · Arachides" }, desc: { en: "Wok-seared protein tossed in a rich, creamy peanut sauce with crushed roasted peanuts", fr: "Protéine saisie au wok dans une riche sauce crémeuse aux arachides avec arachides grillées concassées" }, price: "21", img: "/images/peanut-stir-fry.jpg" },
      { name: { en: "P13 · General Thao Chicken", fr: "P13 · Poulet Général Thao" }, desc: { en: "Golden, extra-crispy battered chicken drenched in our addictive sweet & spicy signature sauce", fr: "Poulet pané doré extra-croustillant nappé de notre sauce signature sucrée et épicée irrésistible" }, price: "21", popular: true, chefSpecial: true, img: "/images/general-thai-stir-fry.jpg", spicy: true },
    ],
  },
  {
    id: "curries",
    name: { en: "Thai & Cambodian Curries", fr: "Caris thaïs et cambodgiens" },
    icon: "🍛",
    priceNote: { en: "All $21 · Served with jasmine rice", fr: "Tous 21 $ · Servi avec riz jasmin" },
    items: [
      { name: { en: "P14 · Thai Chicken Curry", fr: "P14 · Cari thaï au poulet" }, desc: { en: "Comforting golden curry — tender chicken and soft potatoes simmered in silky coconut milk", fr: "Cari doré réconfortant — poulet tendre et pommes de terre fondantes mijotés dans un lait de coco soyeux" }, price: "21" },
      { name: { en: "P15 · Pineapple Curry (Gaeng Sapparod)", fr: "P15 · Cari à l'ananas (Gaeng Sapparod)" }, desc: { en: "Tropical and aromatic — sweet pineapple chunks in a luscious coconut curry that balances sweet and savoury", fr: "Tropical et aromatique — morceaux d'ananas sucrés dans un cari au coco savoureux qui équilibre sucré et salé" }, price: "21" },
      { name: { en: "P16 · Red Curry (Pa Nang)", fr: "P16 · Cari rouge (Pa Nang)" }, desc: { en: "Velvety coconut curry simmered with red chili paste, tender bamboo, roasted peppers & fragrant Thai basil", fr: "Cari au coco velouté mijoté avec pâte de chili rouge, bambou tendre, poivrons rôtis et basilic thaï parfumé" }, price: "21", popular: true, chefSpecial: true, img: "/images/thai-red-curry.jpg", spicy: true },
      { name: { en: "P17 · Green Curry (Gaeng Keow Warn)", fr: "P17 · Cari vert (Gaeng Keow Warn)" }, desc: { en: "Bright, herbaceous green curry in rich coconut milk with bamboo shoots, tender eggplant & aromatic basil", fr: "Cari vert vif et herbacé dans un riche lait de coco avec pousses de bambou, aubergine tendre et basilic aromatique" }, price: "21", img: "/images/green-curry-chicken.jpg", spicy: true },
      { name: { en: "P18 · Mushroom Curry", fr: "P18 · Cari aux champignons" }, desc: { en: "Earthy mixed mushrooms bathed in a rich, aromatic coconut curry with Thai herbs", fr: "Champignons variés et terreux baignés dans un riche cari aromatique au coco avec herbes thaïes" }, price: "21", img: "/images/mushroom-stir-fry.jpg" },
      { name: { en: "P19 · Pineapple Basil Curry", fr: "P19 · Cari ananas basilic" }, desc: { en: "Sweet pineapple meets fiery red curry, brightened with Thai basil & colourful bell peppers in coconut milk", fr: "L'ananas sucré rencontre le cari rouge ardent, relevé de basilic thaï et poivrons colorés dans du lait de coco" }, price: "21", spicy: true },
      { name: { en: "P20 · Hot Chilli Curry", fr: "P20 · Cari piment fort" }, desc: { en: "Our boldest curry — fiery chili paste, fragrant lemongrass, bamboo, green beans & intense Thai spices. Not for the faint-hearted!", fr: "Notre cari le plus audacieux — pâte de chili ardente, citronnelle parfumée, bambou, haricots verts et épices thaïes intenses. Pas pour les timides !" }, price: "21", spicy: true },
    ],
  },
  {
    id: "seafood",
    name: { en: "Seafood", fr: "Fruits de mer" },
    icon: "🦐",
    priceNote: { en: "Served with jasmine rice", fr: "Servi avec riz jasmin" },
    items: [
      { name: { en: "F1 · Thai Shrimps", fr: "F1 · Crevettes thaïes" }, desc: { en: "Plump jumbo shrimps sizzled in the wok with Thai spices, crisp vegetables & a fragrant aromatic sauce", fr: "Grosses crevettes dodues grésillantes au wok avec épices thaïes, légumes croquants et une sauce aromatique parfumée" }, price: "23", img: "/images/thai-shrimp.jpg" },
      { name: { en: "F2 · Malaca Shrimps", fr: "F2 · Crevettes Malaca" }, desc: { en: "Succulent shrimps in a golden, turmeric-infused Malaca coconut curry — rich, warm and aromatic", fr: "Crevettes succulentes dans un cari Malaca doré au coco infusé au curcuma — riche, chaleureux et aromatique" }, price: "23" },
      { name: { en: "F3 · Royal Shrimps", fr: "F3 · Crevettes royales" }, desc: { en: "Juicy shrimps perched atop a crunchy noodle nest with sizzling stir-fried vegetables — fit for royalty", fr: "Crevettes juteuses perchées sur un nid de nouilles croustillant avec légumes sautés grésillants — digne de la royauté" }, price: "23", img: "/images/royal-shrimp-nest.jpg" },
      { name: { en: "F4 · King's Skewers", fr: "F4 · Brochettes du roi" }, desc: { en: "Chargrilled shrimp skewers marinated in lemongrass, served with a rich, nutty peanut sauce", fr: "Brochettes de crevettes grillées au charbon marinées à la citronnelle, servies avec une riche sauce aux arachides" }, price: "23" },
      { name: { en: "F5 · Seafood Basil", fr: "F5 · Fruits de mer au basilic" }, desc: { en: "A sizzling medley of shrimp, squid & scallops wok-fired with chilies, garlic & aromatic Thai basil", fr: "Un mélange grésillant de crevettes, calmar et pétoncles sautés au wok avec piments, ail et basilic thaï aromatique" }, price: "25", spicy: true },
      { name: { en: "F6 · Seafood Bamboo", fr: "F6 · Fruits de mer au bambou" }, desc: { en: "Shrimp, squid & scallops wok-tossed with crisp bamboo shoots & vegetables in a savoury Thai sauce", fr: "Crevettes, calmar et pétoncles sautés au wok avec pousses de bambou croquantes et légumes dans une sauce thaïe savoureuse" }, price: "26" },
      { name: { en: "F7 · General Thao Shrimps", fr: "F7 · Crevettes Général Thao" }, desc: { en: "Extra-crispy battered shrimps smothered in our addictive sweet & spicy General Thao glaze", fr: "Crevettes panées extra-croustillantes enrobées de notre glaçage sucré et épicé Général Thao irrésistible" }, price: "23", spicy: true },
      { name: { en: "F8 · Pineapple Shrimps", fr: "F8 · Crevettes à l'ananas" }, desc: { en: "Juicy shrimps and sweet pineapple chunks tossed with colourful peppers in a tangy tropical sauce", fr: "Crevettes juteuses et morceaux d'ananas sucrés mélangés avec poivrons colorés dans une sauce tropicale acidulée" }, price: "23" },
    ],
  },
  {
    id: "table-dhote",
    name: { en: "Table d'Hôte", fr: "Table d'hôte" },
    icon: "🎉",
    priceNote: { en: "$3 extra for substitutions", fr: "3 $ de supplément pour substitutions" },
    items: [
      { name: { en: "1 Person — Main Course + Combo", fr: "1 personne — Plat principal + Combo" }, desc: { en: "Turn any dish into a feast — add soup, appetizer, jasmine rice, coffee or tea & almond cookies", fr: "Transformez tout plat en festin — ajoutez soupe, entrée, riz jasmin, café ou thé et biscuits aux amandes" }, price: "+10" },
      { name: { en: "2 People — Set Menu", fr: "2 personnes — Menu fixe" }, desc: { en: "A complete dining experience for two — choose from 3 curated menus with soup, appetizers, mains, rice & dessert", fr: "Une expérience culinaire complète pour deux — choisissez parmi 3 menus avec soupe, entrées, plats, riz et dessert" }, price: "60" },
      { name: { en: "2 People — Jardin Éternel", fr: "2 personnes — Jardin Éternel" }, desc: { en: "Our signature couple's menu — a lovingly curated multi-course journey through the best of Southeast Asia", fr: "Notre menu signature pour couple — un voyage gastronomique soigneusement composé à travers le meilleur de l'Asie du Sud-Est" }, price: "60" },
      { name: { en: "3 People — Set Menu", fr: "3 personnes — Menu fixe" }, desc: { en: "Share the flavours — choose from 2 curated menus with soup, appetizers, mains, rice & dessert for three", fr: "Partagez les saveurs — choisissez parmi 2 menus avec soupe, entrées, plats, riz et dessert pour trois" }, price: "85" },
      { name: { en: "4 People — Set Menu", fr: "4 personnes — Menu fixe" }, desc: { en: "The ultimate family feast — a complete multi-course spread with soup, appetizers, mains, rice & dessert for four", fr: "Le festin familial ultime — un repas complet multi-services avec soupe, entrées, plats, riz et dessert pour quatre" }, price: "110" },
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
