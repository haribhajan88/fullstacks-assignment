
function coffeeStep(message) {
  return new Promise((resolve, reject) => {
    const delay = 1000 + Math.floor(Math.random() * 1001);
    setTimeout(() => {
  
      if (Math.random() < 0.15) {
        reject(new Error(`${message} failed.`));
        return;
      }
      console.log(message);
      resolve();
    }, delay);
  });
}

coffeeStep("Water boiled")
  .then(() => coffeeStep("Coffee brewed"))
  .then(() => coffeeStep("Coffee poured into the cup"))
  .then(() => console.log("Coffee ready for the team!"))
  .catch((error) => console.error("Coffee process failed:", error.message));
