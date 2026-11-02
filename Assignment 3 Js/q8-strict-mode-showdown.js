"use strict";

console.log("=== Strict Mode Showdown ===");
const sloppySource = "function demo(a, a) { total = 10; return delete total; } return demo(5, 10);";
try {
  console.log("Without strict mode, duplicate parameters and implicit global assignment run; delete result:", Function(sloppySource)());
} catch (error) { console.log("Sloppy-mode error:", error.name, error.message); }

const strictExamples = [
  ["duplicate parameters", "\"use strict\"; function demo(a, a) {}"],
  ["implicit global", "\"use strict\"; total = 10;"],
  ["delete identifier", "\"use strict\"; let total = 10; delete total;"]
];
for (const [label, source] of strictExamples) {
  try {
    Function(source)();
    console.log(`With strict mode (${label}): no error`);
  } catch (error) {
    console.log(`With strict mode (${label}): ${error.name} - ${error.message}`);
  }
}
function correctDemo(first, second) {
  const total = first + second;
  return total;
}
console.log("Correct ES6 version result:", correctDemo(5, 10));
console.log("Strict mode rejects duplicate parameters, implicit globals, and deleting unqualified identifiers.");
