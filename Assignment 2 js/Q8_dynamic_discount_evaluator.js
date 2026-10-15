const cart = [
  { item: "Laptop", category: "electronics", price: 45000 },
  { item: "Shoes", category: "fashion", price: 2500 },
  { item: "Book", category: "education", price: 600 },
];

const cartTotal = cart.reduce(function (total, product) {
  return total + product.price;
}, 0);

let totalAfterItemDiscounts = 0;

for (let i = 0; i < cart.length; i++) {
  let price = cart[i].price;

  if (cart[i].category === "electronics") {
    price = price - price * 0.10;
  } else if (cart[i].category === "fashion") {
    price = price - price * 0.05;
  }

  totalAfterItemDiscounts = totalAfterItemDiscounts + price;
  console.log(cart[i].item + " after discount: " + price.toFixed(2));
}
let finalTotal = totalAfterItemDiscounts;
if (cartTotal > 50000) {
  finalTotal = finalTotal - finalTotal * 0.05;
}

console.log("Original cart total: " + cartTotal.toFixed(2));
console.log("Final total: " + finalTotal.toFixed(2));
