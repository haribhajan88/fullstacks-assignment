
function contactServer(name, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.15) {
        reject(new Error(`${name} did not respond`));
        return;
      }
      resolve(`${name} responded`);
    }, delay);
  });
}

const allServers = [contactServer("Server A", 2000), contactServer("Server B", 3000)];
Promise.all(allServers)
  .then((responses) => {
    console.log("Deployment completed for all servers");
    console.log(responses);
  })
  .catch((error) => console.error("Deployment failed:", error.message));

const racingServers = [contactServer("Server A", 2000), contactServer("Server B", 3000)];
Promise.race(racingServers)
  .then((fastest) => console.log("Fastest response:", fastest))
  .catch((error) => console.error("Race failed:", error.message));
