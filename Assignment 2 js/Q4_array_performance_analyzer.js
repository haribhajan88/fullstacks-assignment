const scores = [];
for (let i = 0; i < 8; i++) {
  const score = Math.floor(Math.random() * 71) + 30;
  scores.push(score);
}

const highest = Math.max(...scores);
const lowest = Math.min(...scores);
const total = scores.reduce(function (sum, score) {
  return sum + score;
}, 0);
const average = total / scores.length;
const passedScores = scores.filter(function (score) {
  return score >= 50;
});

console.log("Scores: " + scores.join(", "));
console.log("Highest: " + highest);
console.log("Lowest: " + lowest);
console.log("Average: " + average.toFixed(2));
console.log("Students who passed: " + passedScores.length);
