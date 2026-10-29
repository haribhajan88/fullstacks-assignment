const dropdown = document.getElementById("dropdown");
const toggle = document.getElementById("toggle");
const options = document.getElementById("options");
toggle.addEventListener("click", () => options.classList.toggle("show"));
options.addEventListener("click", (event) => {
  if (event.target.classList.contains("option")) {
    toggle.textContent = event.target.textContent;
    options.classList.remove("show");
  }
});
// Capture phase sees an outside click before it reaches other elements.
document.addEventListener("click", (event) => { if (!dropdown.contains(event.target)) options.classList.remove("show"); }, true);
