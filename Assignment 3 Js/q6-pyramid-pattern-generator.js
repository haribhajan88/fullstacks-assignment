"use strict";

const enteredLimit = typeof prompt === "function" ? prompt("Rows for pyramid (default 5):") : null;
const rows = Number(enteredLimit) || 5;
console.log("=== Pyramid Pattern Generator ===");
for (let row = 1; row <= rows; row += 1) {
  let line = "";
  for (let column = 1; column <= row; column += 1) line += "* ";
  console.log(line.trim());
}

for (var debugRow = 1; debugRow <= 4; debugRow += 1) {
  var debugLine = "";
  for (var debugColumn = 1; debugColumn <= debugRow; debugColumn += 1) debugLine += "* ";
  console.log(`var row ${debugRow}: ${debugLine.trim()}`);
}
console.log(`var reuse observation: debugRow=${debugRow}, debugColumn=${debugColumn}`);