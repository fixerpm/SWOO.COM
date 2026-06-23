let products = [
  {
    id: 1,
    name: "Mac mini (for the desktop computer)",
    price: "$799.00",
    image: "./card-image/applemax.png",
    shipping: "FREE SHIPPING",
    stock: "In stock",
    save: "SAVE $199"
  },
  {
    id: 2,
    name: "aPod Pro Tablet 2023 LTE + WiFi",
    price: "$979.00",
    image: "./card-image/6c00b1b21e6859ec3f40138bedd69be262e356d3.png",
    shipping: "$2.99 SHIPPING",
    stock: "In stock",
    save: ""
  },
  {
    id: 3,
    name: "Samsung Galaxy X6 Ultra LTE",
    price: "$659.00",
    image: "./card-image/70fb3352120a006a36410fe660bdcf040428d535.png",
    shipping: "FREE SHIPPING • FREE GIFT",
    stock: "In stock",
    save: ""
  }
];

function renderCards() {
  cards.innerHTML = "";

  products.forEach((el) => {
    cards.innerHTML += `
      <div class="bg-white rounded-lg p-5 shadow-sm flex gap-5">

        <div class="relative">
          ${el.save
        ? `<span class="absolute -top-2 -left-2 bg-green-500 text-white text-[10px] px-2 py-1 rounded">
                  ${el.save}
                </span>`
        : ""
      }

          <img src="${el.image}" class="w-24 h-32 object-cover rounded">
        </div>

        <div class="flex-1">
          <h3 class="font-semibold text-sm">
            ${el.name}
          </h3>

          <p class="text-gray-900 text-2xl font-bold mt-2">
            ${el.price}
          </p>

          <div class="mt-3 text-xs text-green-500 font-semibold">
            ${el.shipping}
          </div>

          <div class="text-xs text-green-600 mt-1">
            ● ${el.stock}
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <button
            class="w-9 h-9 flex items-center justify-center rounded-full bg-red-50 text-red-500">
            ♥
          </button>

          <button
            onclick="deleteTeacher(${el.id})"
            class="w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-red-500 hover:text-white transition">
            ✕
          </button>
        </div>

      </div>
    `;
  });
}

renderCards();

function deleteTeacher(id) {
  products = products.filter((el) => el.id !== id);
  renderCards();
}