// Q4: Constructor instances share getDetails through Car.prototype.
function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}

Car.prototype.getDetails = function () {
  console.log(`${this.brand} ${this.model}`);
};

const firstCar = new Car("Toyota", "Corolla");
const secondCar = new Car("Honda", "Civic");

firstCar.getDetails();
secondCar.getDetails();
console.log(firstCar.getDetails === secondCar.getDetails); // true: one shared method
