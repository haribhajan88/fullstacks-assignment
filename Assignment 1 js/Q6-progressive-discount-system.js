// Q6: Change this value to try another purchase total.
const purchaseTotal = 7200;
let discountPercent;

if (purchaseTotal >= 10000) {
  discountPercent = 25;
} else if (purchaseTotal >= 5000) {
  discountPercent = 15;
} else if (purchaseTotal >= 2000) {
  discountPercent = 5;
} else {
  discountPercent = 0;
}

const discount = Math.round(purchaseTotal * discountPercent / 100);
const finalPrice = Math.round(purchaseTotal - discount);
console.log(`Original total: $${purchaseTotal}`);
console.log(`Discount: ${discountPercent}%`);
console.log(`Final price: $${finalPrice}`);
