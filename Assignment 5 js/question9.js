// Q9: Prototype-based version from Q5.
function Person(name) {
  this.name = name;
}
Person.prototype.printName = function () {
  return `Name: ${this.name}`;
};

function Student(name, branch) {
  Person.call(this, name);
  this.branch = branch;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.printBranch = function () {
  return `Branch: ${this.branch}`;
};

// ES6 class version: extends sets up the prototype chain; super initializes Person.
class ClassPerson {
  constructor(name) {
    this.name = name;
  }

  printName() {
    return `Name: ${this.name}`;
  }
}

class ClassStudent extends ClassPerson {
  constructor(name, branch) {
    super(name);
    this.branch = branch;
  }

  printBranch() {
    return `Branch: ${this.branch}`;
  }
}

const prototypeStudent = new Student("Ravi", "Computer Science");
const classStudent = new ClassStudent("Ravi", "Computer Science");

console.log(prototypeStudent.printName(), prototypeStudent.printBranch());
console.log(classStudent.printName(), classStudent.printBranch());
// Both versions produce the same output and both have working inheritance.
console.log(prototypeStudent instanceof Person); // true
console.log(classStudent instanceof ClassPerson); // true
