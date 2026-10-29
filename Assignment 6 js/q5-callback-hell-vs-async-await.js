
const stages = ["Design complete", "Build complete", "Tests passed", "Deployed", "Celebrate! 🎉"];

function runStageWithCallback(message, callback) {
  setTimeout(() => {
    console.log(message);
    callback();
  }, 1000);
}

console.log("Callback version:");
runStageWithCallback(stages[0], () => {
  runStageWithCallback(stages[1], () => {
    runStageWithCallback(stages[2], () => {
      runStageWithCallback(stages[3], () => {
        runStageWithCallback(stages[4], () => {
          console.log("Callback pipeline finished.\n");
          runAsyncAwaitVersion();
        });
      });
    });
  });
});

function runStage(message) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(message);
      resolve();
    }, 1000);
  });
}

async function runAsyncAwaitVersion() {
  console.log("async/await version:");
  for (const stage of stages) {
    await runStage(stage);
  }
  console.log("async/await pipeline finished.");
}
