let count = 0;

function increment() {
  count = count + 1;
  console.log("Count: " + count);
}

function decrement() {
  count = count - 1;
  console.log("Count: " + count);
}

function showCountUsingNestedFunction() {
  function displayCount() {
    console.log("Nested function sees count: " + count);
  }

  displayCount();
}


increment();
showCountUsingNestedFunction();
increment();
decrement();
