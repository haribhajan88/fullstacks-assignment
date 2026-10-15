const results = [];

for (let number = 1; number <= 30; number++) {
  let answer;

  if (number % 3 === 0 && number % 5 === 0) {
    answer = "FizzBuzz";
  } else if (number % 2 === 0) {
    answer = "Even";
  } else {
    answer = "Odd";
  }

  results.push(number + ": " + answer);
}

console.log(results.join("\n"));
