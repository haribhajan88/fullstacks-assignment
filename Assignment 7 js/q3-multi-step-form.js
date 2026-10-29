const steps = [...document.querySelectorAll(".step")];
let current = 0;
const back = document.getElementById("back");
const next = document.getElementById("next");

function showStep() {
  steps.forEach((step, index) => step.classList.toggle("active", index === current));
  back.style.visibility = current ? "visible" : "hidden";
  next.textContent = current === 2 ? "Finish" : "Next";
}

function validStep() {
  const input = steps[current].querySelector("input");
  const error = steps[current].querySelector(".error");
  let text = "";
  if (!input.value.trim()) text = "This field is required.";
  else if (input.id === "email" && !input.value.includes("@")) text = "Enter a valid email.";
  else if (input.id === "password" && input.value.length < 6) text = "Password needs at least 6 characters.";
  error.textContent = text;
  return !text;
}

next.addEventListener("click", () => {
  if (!validStep()) return;
  if (current < 2) {
    current++;
    showStep();
  } else {
    document.getElementById("form").style.display = "none";
    document.getElementById("summary").innerHTML = `<h3>Form complete</h3><p>Name: ${document.getElementById("name").value}</p><p>Email: ${document.getElementById("email").value}</p>`;
  }
});
back.addEventListener("click", () => {
  if (current) { current--; showStep(); }
});
showStep();
