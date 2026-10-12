// Q4: Enter marks for five subjects. Each mark is out of 100.
const marks = [88, 76, 92, 81, 69];
let total = 0;
let hasLowMark = false;

// Add the marks and check whether any subject is below 35.
for (let i = 0; i < marks.length; i++) {
  total += marks[i];
  if (marks[i] < 35) {
    hasLowMark = true;
  }
}

const average = total / marks.length;
const percentage = (total / 500) * 100;
console.log(`Average: ${average.toFixed(2)}`);
console.log(`Percentage: ${percentage.toFixed(2)}%`);

if (hasLowMark || percentage < 50) {
  console.log("Detained");
} else if (percentage >= 85) {
  console.log("Promoted with Distinction");
} else {
  console.log("Promoted");
}
