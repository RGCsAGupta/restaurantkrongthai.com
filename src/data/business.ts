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
    facebook: "https://www.facebook.com/restaurantkrongthai",
    instagram: "https://www.instagram.com/restaurantkrongthai",
    google:
      "https://www.google.com/maps/place/?q=place_id:ChIJu476UxUbzkwRSV2u84dWyWk",
    yelp: "https://www.yelp.ca/biz/krong-thai-gatineau-2",
    tripadvisor: "https://www.tripadvisor.ca/Restaurant_Review-g182166-d4852692-Reviews-Restaurant_Krong_Thai-Gatineau_Outaouais_Region_Quebec.html",
  },
  delivery: {
    ubereats:
      "https://www.ubereats.com/ca/store/restaurant-krong-thai/lJfufUEbRjGlH7yd9QsrvA",
    doordash:
      "https://www.doordash.com/en-CA/store/28750609",
    skip: "https://www.skipthedishes.com/restaurant-krong-thai",
  },
} as const;
