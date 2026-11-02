"use strict";

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25, num2 = 0;
class InvalidOperationError extends Error { constructor(operation) { super(`Unsupported operation: ${operation}`); this.name = "InvalidOperationError"; } }
class DivideByZeroError extends Error { constructor() { super("Cannot divide by zero"); this.name = "DivideByZeroError"; } }
class NegativeRootError extends Error { constructor() { super("Cannot find the real root of a negative number"); this.name = "NegativeRootError"; } }

function calculate(operation, first, second) {
  switch (operation) {
    case "add": return first + second;
    case "subtract": return first - second;
    case "power": return first ** second;
    case "divide": if (second === 0) throw new DivideByZeroError(); return first / second;
    case "root": if (first < 0) throw new NegativeRootError(); return Math.sqrt(first);
    default: throw new InvalidOperationError(operation);
  }
}
console.log("=== Smart Calculator ===");
for (const operation of operations) {
  try { console.log(`${operation}: ${num1}, ${num2} => ${calculate(operation, num1, num2)}`); }
  catch (error) { console.log(`${operation}: ERROR [${error.name}] ${error.message}`); }
}
