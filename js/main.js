let greenHeader = document.querySelector('.green-header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    greenHeader.classList.add('-translate-y-full', 'opacity-0');
  } else {
    greenHeader.classList.remove('-translate-y-full', 'opacity-0');
  }
});


window.addEventListener("scroll", function () {
  if (this.window.scrollY > 50) {
    hdr.classList.remove("py-[40px]");
    hdr.classList.add("py-[20px");
  }
  else {
    hdr.classList.add("py-[40px]");
    hdr.classList.remove("py-[20px")
  }
});


let products = [
  {
    "id": 1,
    "name": "Samsung Galaxy S24 Ultra",
    "category": "Telefonlar",
    "price": 1299,
    "originalPrice": 1499,
    "discount": 13,
    "rating": 4.9,
    "reviews": 842,
    "inStock": true,
    "brand": "Samsung",
    "color": "Titanium Black",
    "description": "200MP kamera, 5000mAh batareya, S Pen qo'llab-quvvatlash bilan eng zamonaviy flagman smartfon.",
    "image": "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&q=80",
    "tags": [
      "flagship",
      "android",
      "5G"
    ]
  },
  {
    "id": 2,
    "name": "Apple iPhone 15 Pro",
    "category": "Telefonlar",
    "price": 999,
    "originalPrice": 1099,
    "discount": 9,
    "rating": 4.8,
    "reviews": 1204,
    "inStock": true,
    "brand": "Apple",
    "color": "Natural Titanium",
    "description": "A17 Pro chip, titanium korpus, USB-C port va ProMotion 120Hz ekran bilan jihozlangan.",
    "image": "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&q=80",
    "tags": [
      "ios",
      "flagship",
      "5G"
    ]
  },
  {
    "id": 3,
    "name": "Sony WH-1000XM5",
    "category": "Quloqchinlar",
    "price": 299,
    "originalPrice": 399,
    "discount": 25,
    "rating": 4.9,
    "reviews": 3210,
    "inStock": true,
    "brand": "Sony",
    "color": "Midnight Black",
    "description": "Sanoatdagi eng yaxshi shovqin o'chirish texnologiyasi, 30 soat batareya quvvati.",
    "image": "https://sonycenter.uz/wp-content/uploads/2024/08/d34ab169b70c9dcd35e62896010cd9ff2022082014251767650s1yubyio9h.png-600x600.webp.jpg",
    "tags": [
      "wireless",
      "noise-cancelling",
      "premium"
    ]
  },
  {
    "id": 4,
    "name": "MacBook Air M3",
    "category": "Noutbuklar",
    "price": 1099,
    "originalPrice": 1299,
    "discount": 15,
    "rating": 4.8,
    "reviews": 567,
    "inStock": true,
    "brand": "Apple",
    "color": "Space Gray",
    "description": "M3 chip, 18 soat batareya, 13.6 dyuymli Liquid Retina ekran bilan ultra yengil noutbuk.",
    "image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&q=80",
    "tags": [
      "macOS",
      "ultrabook",
      "M3"
    ]
  },
  {
    "id": 5,
    "name": "Dell XPS 15",
    "category": "Noutbuklar",
    "price": 1799,
    "originalPrice": 1999,
    "discount": 10,
    "rating": 4.7,
    "reviews": 423,
    "inStock": true,
    "brand": "Dell",
    "color": "Platinum Silver",
    "description": "Intel Core i9, OLED 4K ekran, NVIDIA RTX 4060 bilan professionallar uchun mo'ljallangan.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUPtIsu7r1g-lkhO9y4NgoREy05R6NfkdsTS5B-22IfRlvKG6HoAZzByE&s=10",
    "tags": [
      "windows",
      "4K",
      "gaming"
    ]
  },
  {
    "id": 6,
    "name": "iPad Pro 12.9 M4",
    "category": "Planshetlar",
    "price": 1099,
    "originalPrice": 1199,
    "discount": 8,
    "rating": 4.9,
    "reviews": 789,
    "inStock": true,
    "brand": "Apple",
    "color": "Space Black",
    "description": "Ultra Retina XDR ekran, M4 chip va Apple Pencil Pro bilan to'liq kreativ studio.",
    "image": "https://tabseller.com/wp-content/uploads/2025/06/ipad-pro-m4-inch-space-black-8b257c84-0bf5-4d37-b7f6-551a3332b00d-2.jpeg",
    "tags": [
      "iPadOS",
      "creative",
      "M4"
    ]
  },
  {
    "id": 9,
    "name": "Apple Watch Ultra 2",
    "category": "Soatlar",
    "price": 799,
    "originalPrice": 849,
    "discount": 6,
    "rating": 4.8,
    "reviews": 934,
    "inStock": true,
    "brand": "Apple",
    "color": "Natural Titanium",
    "description": "Titanium korpus, 60 soat batareya, dengiz va tog' sarguzashtlari uchun yaratilgan.",
    "image": "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&q=80",
    "tags": [
      "smartwatch",
      "fitness",
      "GPS"
    ]
  },
  {
    "id": 10,
    "name": "Garmin Fenix 7X Pro",
    "category": "Soatlar",
    "price": 699,
    "originalPrice": 849,
    "discount": 18,
    "rating": 4.7,
    "reviews": 621,
    "inStock": true,
    "brand": "Garmin",
    "color": "Carbon Gray DLC",
    "description": "Solar quvvatlash, 28 kun batareya, har qanday sharoit uchun multiband GPS.",
    "image": "https://garmin.com.uz/uploads/products/hcmN98QbiB.webp",
    "tags": [
      "GPS",
      "solar",
      "multisport"
    ]
  },
  {
    "id": 11,
    "name": "DJI Mini 4 Pro",
    "category": "Dronlar",
    "price": 759,
    "originalPrice": 959,
    "discount": 21,
    "rating": 4.8,
    "reviews": 478,
    "inStock": true,
    "brand": "DJI",
    "color": "Gray",
    "description": "249g, 4K/60fps video, 34 daqiqa uchish vaqti, omnidirectional halqa sensori.",
    "image": "https://se-cdn.djiits.com/stormsend/uploads/a04962b9405f36a2a0461142c149b909.png",
    "tags": [
      "drone",
      "4K",
      "portable"
    ]
  },
  {
    "id": 12,
    "name": "Canon EOS R5 Mark II",
    "category": "Kameralar",
    "price": 3299,
    "originalPrice": 3899,
    "discount": 15,
    "rating": 4.9,
    "reviews": 287,
    "inStock": false,
    "brand": "Canon",
    "color": "Black",
    "description": "45MP BSI CMOS sensor, 8K RAW video, in-body stabilizatsiya va AI autofocus.",
    "image": "https://in.canon/media/image/2024/07/17/3d47abeaf9574a9ba9401c6ff2ca7bb1_EOS+R5+Mark+II+%26+RF24-105mm+f4L+IS+USM+Front+Slant.png",
    "tags": [
      "mirrorless",
      "8K",
      "professional"
    ]
  },
  {
    "id": 13,
    "name": "Sony A7 IV",
    "category": "Kameralar",
    "price": 2499,
    "originalPrice": 2799,
    "discount": 11,
    "rating": 4.8,
    "reviews": 543,
    "inStock": true,
    "brand": "Sony",
    "color": "Black",
    "description": "33MP full-frame sensor, 4K/60fps, real-time AF va 10fps seriya suratga olish.",
    "image": "https://lh3.googleusercontent.com/rAlTlFxPU66VAXhLadxfkbTFcv5oCkW92nf2Yqn0VeQT1T2ar2wIjRyoGIVST5ep58as2Q048ziNNBT72EeheRxIqvKDJET76tvbCOY4AEDKrX2Vu54NWWdYoVhVoXB38xQVFX0i",
    "tags": [
      "mirrorless",
      "full-frame",
      "4K"
    ]
  },
  {
    "id": 14,
    "name": "Bose QuietComfort Ultra",
    "category": "Quloqchinlar",
    "price": 349,
    "originalPrice": 429,
    "discount": 19,
    "rating": 4.7,
    "reviews": 1876,
    "inStock": true,
    "brand": "Bose",
    "color": "White Smoke",
    "description": "Immersive Audio, world-class ANC, 24 soat batareya va maxfiy Aware mode.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKIZAnEbUQC18LtY4DOcwvKqx-IQHi4I_DL_tQe_Po-Erem58mZmd_i84&s=10",
    "tags": [
      "wireless",
      "ANC",
      "premium"
    ]
  },
  {
    "id": 15,
    "name": "Logitech MX Master 3S",
    "category": "Kompyuter aksesuarlari",
    "price": 99,
    "originalPrice": 119,
    "discount": 17,
    "rating": 4.8,
    "reviews": 4521,
    "inStock": true,
    "brand": "Logitech",
    "color": "Graphite",
    "description": "8000 DPI MagSpeed scroll, Bluetooth multi-device, 70 kun batareya, barcha sirtlar uchun.",
    "image": "https://dl.bs365.uz/storage/products/28303/TO5VFpX7fLC0PFl0GS2l-large_default.jpg",
    "tags": [
      "wireless",
      "ergonomic",
      "productivity"
    ]
  },
  {
    "id": 16,
    "name": "Keychron Q1 Pro",
    "category": "Kompyuter aksesuarlari",
    "price": 199,
    "originalPrice": 229,
    "discount": 13,
    "rating": 4.8,
    "reviews": 1234,
    "inStock": true,
    "brand": "Keychron",
    "color": "Carbon Black",
    "description": "Aluminium korpus, QMK/VIA qo'llab-quvvatlash, Gateron G Pro mexanik tugmalar.",
    "image": "https://i.ebayimg.com/images/g/1t8AAOSwyDBnDv7i/s-l1200.jpg",
    "tags": [
      "mechanical",
      "wireless",
      "programmable"
    ]
  },
  {
    "id": 17,
    "name": "Samsung 49\" Odyssey G9",
    "category": "Monitorlar",
    "price": 999,
    "originalPrice": 1299,
    "discount": 23,
    "rating": 4.6,
    "reviews": 876,
    "inStock": true,
    "brand": "Samsung",
    "color": "Black",
    "description": "49\" 32:9 DQHD, 240Hz, 1ms GTG, QLED va HDR2000 bilan ultra keng gaming monitor.",
    "image": "https://www.bigw.com.au/medias/sys_master/images/images/h2b/hb5/139429628510238.jpg",
    "tags": [
      "ultrawide",
      "240Hz",
      "gaming"
    ]
  },
  {
    "id": 18,
    "name": "LG 27\" UltraFine 5K",
    "category": "Monitorlar",
    "price": 1299,
    "originalPrice": 1499,
    "discount": 13,
    "rating": 4.7,
    "reviews": 432,
    "inStock": true,
    "brand": "LG",
    "color": "Silver",
    "description": "5120x2880 5K IPS, Thunderbolt 3, P3 gamut qamrovi, Mac uchun optimallashtirilgan.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEyV8hNIiIlYWVa4dWsGxPtmyrGWRNPYeCwaj338xNiQ&s=10",
    "tags": [
      "5K",
      "Thunderbolt",
      "Mac"
    ]
  },
  {
    "id": 19,
    "name": "Dyson V15 Detect",
    "category": "Maishiy texnika",
    "price": 699,
    "originalPrice": 799,
    "discount": 13,
    "rating": 4.8,
    "reviews": 2341,
    "inStock": true,
    "brand": "Dyson",
    "color": "Yellow/Nickel",
    "description": "Lazer changni ko'rsatadi, LCD ekran, HEPA filtrlash va 60 daqiqa ishlash vaqti.",
    "image": "https://macbro.uz/cdn/shop/files/7_5fe9806c-ebfb-43fb-bbb5-7fc14f97d366.png?v=1702900651",
    "tags": [
      "cordless",
      "HEPA",
      "smart"
    ]
  },
  {
    "id": 22,
    "name": "PlayStation 5 Pro",
    "category": "O'yin konsollari",
    "price": 699,
    "originalPrice": 799,
    "discount": 13,
    "rating": 4.8,
    "reviews": 3456,
    "inStock": false,
    "brand": "Sony",
    "color": "White",
    "description": "AMD Zen 2+ CPU, 45 TFLOPS GPU, 8K gaming qo'llab-quvvatlash va 2TB SSD.",
    "image": "https://macbro.uz/cdn/shop/files/smo0qvrtum00i008p4hg43w7f42vf5jy.webp?v=1758629277",
    "tags": [
      "gaming",
      "8K",
      "SSD"
    ]
  },
  {
    "id": 23,
    "name": "Xbox Series X",
    "category": "O'yin konsollari",
    "price": 499,
    "originalPrice": 549,
    "discount": 9,
    "rating": 4.7,
    "reviews": 2134,
    "inStock": true,
    "brand": "Microsoft",
    "color": "Black",
    "description": "12 TFLOPS, 4K/120fps, Xbox Game Pass Ultimate va 1TB Velocity Architecture SSD.",
    "image": "https://cms-assets.xboxservices.com/assets/f0/8d/f08dfa50-f2ef-4873-bc8f-bcb6c34e48c0.png?n=642227_Hero-Gallery-0_C2_857x676.png",
    "tags": [
      "gaming",
      "4K",
      "Game Pass"
    ]
  },
  {
    "id": 24,
    "name": "Razer Blade 16",
    "category": "O'yin noutbuklari",
    "price": 2799,
    "originalPrice": 3299,
    "discount": 15,
    "rating": 4.7,
    "reviews": 345,
    "inStock": true,
    "brand": "Razer",
    "color": "Black",
    "description": "Intel Core i9-14900HX, RTX 4090, 16\" QHD+ 240Hz Mini-LED va per-key RGB klaviatura.",
    "image": "https://m.media-amazon.com/images/I/814MWmHR66L.jpg",
    "tags": [
      "gaming",
      "RTX 4090",
      "240Hz"
    ]
  },
  {
    "id": 25,
    "name": "Anker 737 Power Bank",
    "category": "Aksessuarlar",
    "price": 89,
    "originalPrice": 119,
    "discount": 25,
    "rating": 4.7,
    "reviews": 8921,
    "inStock": true,
    "brand": "Anker",
    "color": "Black",
    "description": "24000mAh, 140W PD tez quvvatlash, uchta port, noutbuk va telefonlar uchun.",
    "image": "https://i.ebayimg.com/images/g/Ep0AAeSwa~1puxSx/s-l400.jpg",
    "tags": [
      "charging",
      "140W",
      "portable"
    ]
  },
  {
    "id": 28,
    "name": "Meta Quest 3",
    "category": "VR/AR",
    "price": 499,
    "originalPrice": 599,
    "discount": 17,
    "rating": 4.7,
    "reviews": 2876,
    "inStock": true,
    "brand": "Meta",
    "color": "White",
    "description": "Mixed Reality, Snapdragon XR2 Gen 2, 2064x2208 per eye va 110° ko'rish burchagi.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNGoMzovF1S7T60bEIE6h3dxYybk1scO2EXqjVwM6ie4_w2L0X4aafEsX1&s=10",
    "tags": [
      "VR",
      "mixed reality",
      "standalone"
    ]
  },
  {
    "id": 29,
    "name": "Asus ROG Ally X",
    "category": "O'yin konsollari",
    "price": 799,
    "originalPrice": 899,
    "discount": 11,
    "rating": 4.6,
    "reviews": 987,
    "inStock": true,
    "brand": "Asus",
    "color": "White",
    "description": "AMD Ryzen Z1 Extreme, 7\" FHD 120Hz, 80Wh batareya, Windows 11 bilan ko'chma gaming.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZsYIYNB9wdW7B_2nhrs7RQEQf9v0tzWTDEdCL3h9dCg&s=10",
    "tags": [
      "handheld",
      "Windows",
      "gaming"
    ]
  },
];

let searchCards = document.querySelector(".search-cards");
let search = document.querySelector(".search");

for (let el of products) {
  searchCards.innerHTML += `
<div class="flex gap-[10px]">
            <img class="w-[70px] bg-cover h-[70px] rounded-[10px]" src=${el.image} alt="">
            <div class="">
              <h1 class="">${el.name}</h1>
            </div>
          </div>
  `;
};


search.addEventListener("input", function (e) {

  let searchValue = e.target.value;

  let result = products.filter((el) => el.name.toLowerCase().includes(searchValue.toLowerCase()));
  searchCards.innerHTML = "";

  if (result.length === 23) {
    searchCards.classList.add("hidden")
  } else {
    searchCards.classList.remove("hidden")
  }

  if (result.length === 0) {
    searchCards.innerHTML = `<div class="flex flex-col justify-center items-center h-full w-full gap-2">
    <svg class="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
            d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15z" />
    </svg>

    <h1 class="text-center text-gray-500 font-medium">
        Ma'lumot topilmadi
    </h1>

    <p class="text-xs text-gray-400 text-center">
        Boshqa kalit so'z bilan urinib ko'ring
    </p>
</div>`
  } else {
    for (let el of result) {
      searchCards.innerHTML += `
    <div class="flex gap-[10px]">
            <img class="w-[70px] bg-cover h-[70px] rounded-[10px]" src=${el.image} alt="">
            <div class="flex items-center gap-[5px]">
              <h1 class="">${el.name}</h1>
            </div>
          </div>
    `;
    }
  }
});

var dark = document.querySelector(".dark");
var body = document.querySelector("body");
var darkIcon = document.querySelector(".dark-icon");

dark.addEventListener("click", function () {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    darkIcon.textContent = "☀️";
    localStorage.setItem("swoo-theme", "dark");
  } else {
    darkIcon.textContent = "🌙";
    localStorage.setItem("swoo-theme", "light");
  }
});

// Sahifa yuklanganida tiklash
if (localStorage.getItem("swoo-theme") === "dark") {
  body.classList.add("dark-mode");
  darkIcon.textContent = "☀️";
}

let loading = document.querySelector(".loading")

window.addEventListener("load", function () {
  loading.classList.add("hidden")
});