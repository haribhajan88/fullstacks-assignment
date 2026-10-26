// Q3: Arrow functions do not get their own `this`; they capture it from outside.
const userWithArrowMethod = {
  name: "Mira",
  showName: () => {
    console.log("Arrow method this.name:", this.name);
  }
};

userWithArrowMethod.showName(); // undefined in a Node.js CommonJS file
// `this` above is inherited from the surrounding module, not userWithArrowMethod.

const userWithRegularMethod = {
  name: "Mira",
  showName: function () {
    console.log("Regular method this.name:", this.name);
  }
};

userWithRegularMethod.showName(); // Mira
// A normal method receives the object as `this` when called as user.showName().
