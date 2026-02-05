let cart = [];

function addToCart(item) {
  cart.push(item);
  document.getElementById("cartCount").textContent = cart.length;
  alert("تمت إضافة " + item + " إلى السلة ✅");
}
function maintenance() {
  const msg = event.target.nextElementSibling;
  msg.classList.remove("hidden");
}
