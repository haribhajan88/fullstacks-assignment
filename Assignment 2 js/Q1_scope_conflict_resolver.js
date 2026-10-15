let bonus = 5000;

function calculateSalary(isPermanent) {
  let salary = 40000; 

  if (isPermanent === true) {
    salary = salary + bonus;
  }

  console.log("Total salary: " + salary);
}

calculateSalary(true);  
calculateSalary(false); 
console.log("Global bonus is still: " + bonus);
