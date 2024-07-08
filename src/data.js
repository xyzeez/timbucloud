const productData = [
  {
    id: 1,
    name: "13' Macbook Air 2020",
    description:
      'Lightweight, powerful, and efficient with the latest M2 chip, Retina display, and up to 18 hours of battery life. Perfect for work and play.',
    price: 1080,
    sale_price: 1200,
    image: '/assets/products/laptop.png',
    category: 'laptops',
    star_rating: 4,
  },
  {
    id: 2,
    name: 'iPhone XSMAX',
    description:
      'Enjoy a stunning 6.5-inch Super Retina display, powerful A12 Bionic chip, and advanced dual-camera system for exceptional performance and photography.',
    price: 720,
    image: '/assets/products/iphone.png',
    category: 'smartphones',
    star_rating: 5,
  },
  {
    id: 3,
    name: 'Easy SMX Game Controller',
    description:
      'Elevate your gaming with ergonomic design, high-quality buttons, and customizable features for a truly immersive and competitive gameplay experience.',
    price: 95,
    sale_price: 100,
    image: '/assets/products/gamepad.png',
    category: 'gaming',
    star_rating: 2,
  },
  {
    id: 4,
    name: 'Airpods pro',
    description:
      'Experience superior sound with active noise cancellation, a customizable fit, and seamless integration with your Apple devices for an unparalleled listening experience.',
    price: 1000,
    sale_price: 1100,
    image: '/assets/products/airpods.png',
    category: 'laptops',
    star_rating: 0,
  },
];

export default productData;

// {
//     id: 5,
//     name: 'HP Spectre x360',
//     description:
//       'Versatile 2-in-1 laptop with a 4K touchscreen, long battery life, and powerful performance for both work and entertainment.',
//     price: 1250,
//     image: '/assets/products/laptop.png',
//     category: 'laptops',
//     star_rating: 3,
//   },
//   {
//     id: 6,
//     name: 'Samsung Galaxy S21',
//     description:
//       'Experience the latest in smartphone technology with a dynamic AMOLED display, powerful Exynos 2100 processor, and pro-grade camera.',
//     price: 799,
//     sale_price: 899,
//     image: '/assets/products/laptop.png',
//     category: 'smartphones',
//     star_rating: 4,
//   },
//   {
//     id: 7,
//     name: 'Google Pixel 6',
//     description:
//       "Smart and intuitive, featuring Google's latest Tensor chip, brilliant camera system, and pure Android experience.",
//     price: 699,
//     sale_price: 799,
//     image: '/assets/products/laptop.png',
//     category: 'smartphones',
//     star_rating: 3,
//   },
//   {
//     id: 8,
//     name: 'OnePlus 9 Pro',
//     description:
//       'Flagship performance with Snapdragon 888, Fluid AMOLED display, and Hasselblad partnership for superior photography.',
//     price: 899,
//     image: '/assets/products/laptop.png',
//     category: 'smartphones',
//     star_rating: 5,
//   },
//   {
//     id: 9,
//     name: 'Sony WH-1000XM4',
//     description:
//       'Industry-leading noise canceling headphones with superior sound quality, long battery life, and smart listening technology.',
//     price: 350,
//     sale_price: 400,
//     image: '/assets/products/laptop.png',
//     category: 'audio',
//     star_rating: 4,
//   },
//   {
//     id: 10,
//     name: 'Bose SoundLink Revolve',
//     description:
//       'Portable Bluetooth speaker with deep, loud, and immersive sound, 360-degree coverage, and water-resistant design.',
//     price: 200,
//     sale_price: 220,
//     image: '/assets/products/laptop.png',
//     category: 'audio',
//     star_rating: 1,
//   },
//   {
//     id: 11,
//     name: 'JBL Charge 5',
//     description:
//       'Portable waterproof speaker with powerful sound, built-in power bank, and up to 20 hours of playtime.',
//     price: 180,
//     sale_price: 200,
//     image: '/assets/products/laptop.png',
//     category: 'audio',
//     star_rating: 5,
//   },
//   {
//     id: 12,
//     name: 'Fitbit Charge 5',
//     description:
//       'Advanced health and fitness tracker with built-in GPS, stress management tools, and 24/7 heart rate monitoring.',
//     price: 150,
//     sale_price: 170,
//     image: '/assets/products/laptop.png',
//     category: 'wearables',
//     star_rating: 4,
//   },
//   {
//     id: 13,
//     name: 'Apple Watch Series 7',
//     description:
//       'The ultimate device for a healthy life, featuring advanced sensors and a larger, more durable display.',
//     price: 399,
//     image: '/assets/products/laptop.png',
//     category: 'wearables',
//     star_rating: 0,
//   },
//   {
//     id: 14,
//     name: 'Garmin Forerunner 945',
//     description:
//       'Premium GPS running/triathlon smartwatch with advanced training features, music, and long battery life.',
//     price: 499,
//     sale_price: 529,
//     image: '/assets/products/laptop.png',
//     category: 'wearables',
//     star_rating: 4,
//   },
//   {
//     id: 15,
//     name: 'Canon EOS R6',
//     description:
//       'Full-frame mirrorless camera with 20.1 MP sensor, 4K video, and advanced autofocus for professional-quality photography.',
//     price: 2500,
//     sale_price: 2600,
//     image: '/assets/products/laptop.png',
//     category: 'photo/videography',
//     star_rating: 2,
//   },
//   {
//     id: 16,
//     name: 'Sony A7 III',
//     description:
//       'Versatile full-frame mirrorless camera with excellent image quality, fast autofocus, and 4K video recording.',
//     price: 2000,
//     sale_price: 2100,
//     image: '/assets/products/laptop.png',
//     category: 'photo/videography',
//     star_rating: 3,
//   },
//   {
//     id: 17,
//     name: 'DJI Mavic Air 2',
//     description:
//       'Compact and powerful drone with 4K camera, intelligent shooting modes, and up to 34 minutes of flight time.',
//     price: 799,
//     sale_price: 849,
//     image: '/assets/products/laptop.png',
//     category: 'photo/videography',
//     star_rating: 1,
//   },
//   {
//     id: 18,
//     name: 'Logitech MX Master 3',
//     description:
//       'Advanced wireless mouse with ergonomic design, customizable buttons, and hyper-fast scrolling for maximum productivity.',
//     price: 100,
//     image: '/assets/products/laptop.png',
//     category: 'accessories',
//     star_rating: 3,
//   },
//   {
//     id: 19,
//     name: 'Anker PowerCore 10000',
//     description:
//       'Ultra-compact portable charger with high-speed charging technology and a capacity of 10000mAh.',
//     price: 30,
//     sale_price: 35,
//     image: '/assets/products/laptop.png',
//     category: 'accessories',
//     star_rating: 5,
//   },
//   {
//     id: 20,
//     name: 'Samsung T7 Portable SSD',
//     description:
//       'High-speed external SSD with read/write speeds up to 1050MB/s, compact design, and shock-resistant durability.',
//     price: 150,
//     sale_price: 170,
//     image: '/assets/products/laptop.png',
//     category: 'accessories',
//     star_rating: 4,
//   },
//   {
//     id: 21,
//     name: 'Razer DeathAdder V2',
//     description:
//       'Ergonomic gaming mouse with high-precision optical sensor, customizable buttons, and Razer Chroma RGB lighting.',
//     price: 70,
//     sale_price: 80,
//     image: '/assets/products/laptop.png',
//     category: 'gaming',
//     star_rating: 2,
//   },
//   {
//     id: 22,
//     name: 'SteelSeries Apex Pro',
//     description:
//       'Mechanical gaming keyboard with adjustable switches, customizable RGB lighting, and OLED Smart Display.',
//     price: 200,
//     sale_price: 220,
//     image: '/assets/products/laptop.png',
//     category: 'gaming',
//     star_rating: 4,
//   },
