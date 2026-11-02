"use strict";

function showMessage() {
  // Original: greeting = "Welcome" throws ReferenceError in strict mode because it creates an implicit global.
  const greeting = "Welcome";
  const watchGreeting = greeting; // Add this variable to VS Code's Watch panel.
  debugger; // Call stack here: global -> showMessage.
  console.log(watchGreeting);
}

console.log("=== Debugging Mystery (fixed) ===");
showMessage();
console.log("Fix: declaring greeting makes it block-scoped instead of an accidental global.");
