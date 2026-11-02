"use strict";

function outer() {
  // outer's var count is hoisted to undefined in outer's own execution context.
  console.log("outer before assignment:", count);
  var count = 5;
  function inner() {
    // inner has a separate hoisted var count (undefined), which shadows outer's count.
    console.log("inner before assignment:", count);
    var count = 10;
    console.log("inner after assignment:", count);
  }
  debugger; // Call stack: global -> outer. Stepping into inner adds its own context.
  inner();
  console.log("outer after inner:", count);
}

console.log("=== Nested Hoisting and Closures ===");
outer();

function outerWithArrow() {
  const count = 5;
  const inner = () => {
    console.log("arrow inner before assignment:", localCount);
    var localCount = 10;
    console.log("arrow inner after assignment:", localCount, "outer count:", count);
  };
  inner();
}
outerWithArrow();
