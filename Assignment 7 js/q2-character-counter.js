const message = document.getElementById("message");
const counter = document.getElementById("counter");
function updateCounter() {
  if (message.value.length > 100) message.value = message.value.slice(0, 100);
  const remaining = 100 - message.value.length;
  counter.textContent = `${remaining} characters left`;
  counter.className = "counter";
  if (remaining === 0) counter.classList.add("red");
  else if (remaining <= 20) counter.classList.add("yellow");
}
message.addEventListener("input", updateCounter);
message.addEventListener("beforeinput", (event) => {
  if (message.value.length >= 100 && event.inputType.startsWith("insert")) event.preventDefault();
});
document.getElementById("reset").addEventListener("click", () => { message.value = ""; updateCounter(); message.focus(); });
