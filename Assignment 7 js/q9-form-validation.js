const form = document.getElementById("signup");
const fields = {
  fullName: "Name is required.", email: "Enter a valid email.", password: "Password must have at least 6 characters."
};
function validate(input) {
  let error = "";
  if (!input.value.trim()) error = input.id === "fullName" ? fields.fullName : "This field is required.";
  else if (input.id === "email" && !input.value.includes("@")) error = fields.email;
  else if (input.id === "password" && input.value.length < 6) error = fields.password;
  document.getElementById(`${input.id === "fullName" ? "name" : input.id}Error`).textContent = error;
  return !error;
}
Object.keys(fields).forEach((id) => document.getElementById(id).addEventListener("input", (event) => validate(event.target)));
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const ok = Object.keys(fields).every((id) => validate(document.getElementById(id)));
  document.getElementById("success").textContent = ok ? "Form Submitted Successfully" : "";
});
