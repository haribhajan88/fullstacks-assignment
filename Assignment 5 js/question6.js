// Q6: Each constructor adds its own data and prototype method.
function Person(name) {
  this.name = name;
}
Person.prototype.describePerson = function () {
  console.log(`Person: ${this.name}`);
};

function Faculty(name, department) {
  Person.call(this, name);
  this.department = department;
}
Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;
Faculty.prototype.describeFaculty = function () {
  console.log(`Department: ${this.department}`);
};

function Professor(name, department, subject) {
  Faculty.call(this, name, department);
  this.subject = subject;
}
Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;
Professor.prototype.describeProfessor = function () {
  console.log(`Subject: ${this.subject}`);
};

const professor = new Professor("Dr. Sen", "Physics", "Optics");
professor.describeProfessor(); // Professor.prototype
professor.describeFaculty(); // Faculty.prototype
professor.describePerson(); // Person.prototype
console.log(professor instanceof Professor); // true
console.log(professor instanceof Faculty); // true
console.log(professor instanceof Person); // true
