// Q5: Student inherits Person's name property and prototype methods.
function Person(name) {
  this.name = name;
}

Person.prototype.printName = function () {
  console.log(`Name: ${this.name}`);
};

function Student(name, branch) {
  Person.call(this, name); // Initialize the inherited name property.
  this.branch = branch;
}

// Link Student instances to Person.prototype while preserving the constructor reference.
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.printBranch = function () {
  console.log(`Branch: ${this.branch}`);
};

const student = new Student("Ravi", "Computer Science");
student.printName(); // inherited from Person.prototype
student.printBranch(); // defined on Student.prototype
console.log(student instanceof Student); // true
console.log(student instanceof Person); // true: confirms the prototype chain
