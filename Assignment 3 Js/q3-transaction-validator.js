"use strict";

const transactions = [{ id: 1, amount: 2000 }, { id: 2, amount: -500 }, { id: 3 }, null];
const valid = [];
const invalid = [];

class NegativeAmountError extends Error { constructor(message) { super(message); this.name = "NegativeAmountError"; } }
class MissingFieldError extends Error { constructor(message) { super(message); this.name = "MissingFieldError"; } }
class NullTransactionError extends Error { constructor(message) { super(message); this.name = "NullTransactionError"; } }

console.log("=== Transaction Validator ===");
for (let index = 0; index < transactions.length; index += 1) {
  const transaction = transactions[index];
  debugger; // Pause here in VS Code to inspect index, transaction, valid, and invalid.
  try {
    if (transaction === null) throw new NullTransactionError("Transaction entry is null");
    if (transaction.id === undefined || transaction.amount === undefined) throw new MissingFieldError("Transaction needs both id and amount");
    if (transaction.amount < 0) throw new NegativeAmountError("Amount cannot be negative");
    valid.push(transaction);
    console.log(`SUCCESS: id=${transaction.id}, amount=${transaction.amount}`);
  } catch (error) {
    invalid.push({ index, type: error.name, message: error.message, entry: transaction });
    console.log(`FAILED [${error.name}]: ${error.message}`);
  }
}
console.log(`Final report: ${valid.length} successful, ${invalid.length} failed`);
console.log("Valid transactions:", valid);
console.log("Invalid transactions:", invalid);
