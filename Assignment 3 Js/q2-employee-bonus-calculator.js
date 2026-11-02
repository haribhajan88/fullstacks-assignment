"use strict";

const employees = [
  { name: "Amit", salary: "45000", years: "5" },
  { name: "Sara", salary: "38000", years: "2" },
  { name: "Kiran", salary: "52000", years: "7" }
];

console.log("=== Employee Bonus Calculator ===");
for (const employee of employees) {
  try {
    if (!employee || !employee.name || employee.salary === undefined || employee.years === undefined) {
      throw new Error("Missing required employee property");
    }
    const salary = Number(employee.salary);
    const years = Number(employee.years);
    if (!Number.isFinite(salary) || !Number.isFinite(years)) {
      throw new TypeError("Salary and years must convert to finite numbers");
    }
    const bonusRate = years > 3 ? 0.1 : 0.05;
    const bonus = salary * bonusRate;
    // Strict mode prevents accidental assignments such as bonusRate = ... without const/let.
    console.log(`${employee.name} | Salary: ₹${salary} | Years: ${years} | Bonus: ₹${bonus} (${bonusRate * 100}%)`);
  } catch (error) {
    console.log(`Employee record error: ${error.message}`);
  }
}
