// Q1: A callback runs after the greeting has been printed.
function showEndMessage() {
  console.log("Welcome to the course!");
}

function greetUser(name, callback) {
  console.log(`Hello ${name}`);
  callback();
}

// Passing the function by name lets greetUser decide when to call it.
greetUser("Asha", showEndMessage);
