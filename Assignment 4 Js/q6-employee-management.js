"use strict";

class Employee {
  constructor(id, name, department, salary) { this.id = id; this.name = name; this.department = department; this.salary = salary; }
  getAnnualSalary() { return this.salary * 12; }
  applyBonus(percent) { this.salary += this.salary * percent / 100; }
}
const employees = [new Employee(1, "Amit", "Engineering", 60000), new Employee(2, "Sara", "Design", 55000), new Employee(3, "Kiran", "Sales", 50000), new Employee(4, "Meera", "HR", 48000), new Employee(5, "Ravi", "Finance", 62000)];
employees[0].applyBonus(10);
employees.forEach((employee) => console.log(`${employee.name}: ₹${employee.getAnnualSalary()} annually`));
console.log("Total annual payout: ₹" + employees.reduce((total, employee) => total + employee.getAnnualSalary(), 0));
