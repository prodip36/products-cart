const loadProductsCart = () => {
  url = "https://dummyjson.com/products";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayProductsCart(data.products));
};
/*
"id": 1,
      "title": "Essence Mascara Lash Princess",
      "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
      "category": "beauty",
      "price": 9.99,
      "discountPercentage": 10.48,

*/
const displayProductsCart = (object) => {
  const products_cart = document.getElementById("section-products-cart");
  object.forEach((items) => {
    const div = document.createElement("div");
    div.innerHTML = `
     <div class="flex bg-base-100 shadow-sm gap-3 p-2 h-full">
  <!-- Image -->
  <div class="w-2/5">
    <img class="h-full w-full object-cover" src="${items.thumbnail}" alt="" />
  </div>

  <!-- Content -->
  <div class="flex flex-col w-3/5 h-full">
    <!-- Top content takes all space -->
    <div class="flex-1 space-y-2">
      <h2 class="card-title font-bold text-2xl">${items.title}</h2>
      <p class="text-sm text-gray-600">${items.description}</p>
      <h2 class="font-bold text-3xl">$${items.price}</h2>
      <h4 class="font-bold text-2xl text-[#5eb664]">${items.discountPercentage}% off</h4>
      <h3 class="text-xl text-[#5eb664]">In Stock</h3>
    </div>

    <!-- Button stays at the bottom -->
    <div class="card-actions">
      <button class="btn btn-primary btn-block">Add to cart</button>
    </div>
  </div>
</div>
      `;
    products_cart.appendChild(div);
  });
};

loadProductsCart();
