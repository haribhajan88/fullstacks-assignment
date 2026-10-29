// Q3 - Promise-based bug tracker. Run: node q3-bug-tracker.js
function getBugs() {
  return new Promise((resolve, reject) => {
    const apiFailed = Math.random() < 0.25;
    setTimeout(() => {
      if (apiFailed) {
        reject(new Error("Bug API is unavailable"));
        return;
      }
      resolve(["UI glitch", "API timeout", "Login failure"]);
    }, 1000);
  });
}

getBugs()
  .then((bugs) => {
    console.table(bugs.map((bug, index) => ({ id: index + 1, bug })));
  })
  .catch((error) => console.error("Could not fetch bugs:", error.message));
