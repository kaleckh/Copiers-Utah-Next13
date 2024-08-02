export function getCart() {
  const cartString = localStorage.getItem("cart");
  return cartString ? JSON.parse(cartString) : [];
}
