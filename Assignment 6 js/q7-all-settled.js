
function loadModule(name, delay, shouldFail) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error(`${name} failed to load`));
        return;
      }
      resolve(`${name} Loaded`);
    }, delay);
  });
}

const modules = ["Profile", "Posts", "Messages"];
const failingIndex = Math.floor(Math.random() * modules.length);
const startTime = Date.now();

Promise.allSettled([
  loadModule("Profile", 2000, failingIndex === 0),
  loadModule("Posts", 1500, failingIndex === 1),
  loadModule("Messages", 1000, failingIndex === 2),
]).then((results) => {
  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`${modules[index]} succeeded: ${result.value}`);
    } else {
      console.error(`${modules[index]} failed: ${result.reason.message}`);
    }
  });
  console.log(`Total time: ${Date.now() - startTime} ms`);
});
