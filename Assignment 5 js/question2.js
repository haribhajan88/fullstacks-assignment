// Q2: applyOperation uses the supplied callback on each array value.
function applyOperation(numbers, operation) {
  const results = [];

  for (const number of numbers) {
    results.push(operation(number));
  }

  return results;
}

const numbers = [1, 2, 3, 4];
const doubledNumbers = applyOperation(numbers, number => number * 2);
const squaredNumbers = applyOperation(numbers, number => number ** 2);

console.log("Doubled:", doubledNumbers); // [2, 4, 6, 8]
console.log("Squared:", squaredNumbers); // [1, 4, 9, 16]
