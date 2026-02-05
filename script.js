let cart = [];

function addToCart(item) {
  cart.push(item);
  document.getElementById("cartCount").textContent = cart.length;
  alert("تمت إضافة " + item + " إلى السلة ✅");
}
