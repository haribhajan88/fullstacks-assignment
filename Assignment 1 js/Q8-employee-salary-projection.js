// Q8: Show the salary after each yearly increase.
const currentSalary = 50000;
const increasePercent = 5;
let salary = currentSalary;
const results = [];

for (let year = 1; year <= 5; year++) {
  salary += salary * increasePercent / 100;
  salary = Math.round(salary);
  results.push({ Year: year, Salary: salary });
}

console.table(results);
