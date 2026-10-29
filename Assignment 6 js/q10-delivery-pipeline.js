
function deliveryStep(number, message) {
  return new Promise((resolve, reject) => {
    const delay = 1000 + Math.floor(Math.random() * 1001);
    setTimeout(() => {
      if (Math.random() < 0.15) {
        reject(new Error(`${message} failed`));
        return;
      }
      console.log(`Step ${number}: ${message}`);
      resolve();
    }, delay);
  });
}

const takeOrder = () => deliveryStep(1, "Order taken");
const prepare = () => deliveryStep(2, "Food prepared");
const pack = () => deliveryStep(3, "Package ready");
const dispatch = () => deliveryStep(4, "Out for delivery");
const deliver = () => deliveryStep(5, "Delivered");

async function runPipeline() {
  console.log("Start Pipeline");
  try {
    await takeOrder();
    await prepare();
    await pack();
    await dispatch();
    await deliver();
    console.log("Delivery completed!");
  } catch (error) {
    console.error("Pipeline failed!");
    console.error(error.message);
  }
}

runPipeline();
