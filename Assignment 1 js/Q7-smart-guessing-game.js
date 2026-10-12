// Q7: Try changing userGuess. The secret number is randomly chosen from 1 to 50.
const secretNumber = Math.floor(Math.random() * 50) + 1;
const userGuess = 24;

if (userGuess === secretNumber) {
  console.log("Correct guess!");
} else if (userGuess >= secretNumber - 3 && userGuess <= secretNumber + 3) {
  console.log("Very close!");
} else if (userGuess > secretNumber) {
  console.log("Too high");
} else {
  console.log("Too low");
}

console.log(`Secret number: ${secretNumber}`);
