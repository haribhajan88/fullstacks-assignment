// Q3: Add monthly expenses and calculate the average and tax.
const food = 4500;
const travel = 1800;
const rent = 12000;
const bills = 2200;
const leisure = 1500;

const total = food + travel + rent + bills + leisure;
const average = total / 5;
const finalAmount = total + total * 0.10; // Add 10% tax.

console.log(`Total expenses: $${total.toFixed(2)}`);
console.log(`Average expense: $${average.toFixed(2)}`);
console.log(`Total with 10% tax: $${finalAmount.toFixed(2)}`);
