export const business = {
  name: "Krong Thai Restaurant",
  phone: "+18192435000",
  phoneDisplay: "(819) 243-5000",
  email: "restaurantkrongthai@gmail.com",
  address: {
    street: "205 Rue Bellehumeur",
    city: "Gatineau",
    province: "QC",
    postal: "J8T 8H3",
    country: "CA",
  },
  coordinates: {
    lat: 45.4765,
    lng: -75.7013,
  },
  website: "https://restaurantkrongthai.com",
  orderingUrl: "https://krongthai.order-online.ai/",
  social: {
    facebook: "https://www.facebook.com/krongthairestaurant",
    instagram: "https://www.instagram.com/krongthairestaurant",
    google:
      "https://maps.google.com/?cid=krongthairestaurant",
    yelp: "https://www.yelp.ca/biz/krong-thai-restaurant-gatineau",
  },
  delivery: {
    ubereats:
      "https://www.ubereats.com/ca/store/krong-thai-restaurant",
    doordash:
      "https://www.doordash.com/store/krong-thai-restaurant-gatineau",
    skip: "https://www.skipthedishes.com/krong-thai-restaurant",
  },
  forms: {
    // Formspree endpoints — sign up at https://formspree.io and replace these IDs
    contact: "https://formspree.io/f/REPLACE_CONTACT_FORM_ID",
    catering: "https://formspree.io/f/REPLACE_CATERING_FORM_ID",
  },
} as const;
