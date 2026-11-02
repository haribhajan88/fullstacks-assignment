"use strict";

// Open in a browser: this script creates the required form and validates each field.
if (typeof document === "undefined") console.log("Open this file in a browser.");
else {
  document.body.innerHTML += `<form id="studentForm"><h2>Student Registration</h2>
    <label>Name <input name="name"></label><small></small><br>
    <label>Email <input name="email"></label><small></small><br>
    <label>Phone <input name="phone"></label><small></small><br>
    <label>Password <input type="password" name="password"></label><small></small><br>
    <button>Register</button><p id="result"></p></form>`;
  const form = document.querySelector("#studentForm");
  const rules = {
    name: [/^[A-Za-z ]+$/, "Use alphabets only."],
    email: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Enter a valid email."],
    phone: [/^\d{10}$/, "Enter exactly 10 digits."],
    password: [/^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/, "Need uppercase, number, and special character."]
  };
  function validate(input) {
    const [pattern, error] = rules[input.name];
    const valid = pattern.test(input.value.trim());
    input.style.border = `2px solid ${valid ? "green" : "red"}`;
    input.parentElement.nextElementSibling.textContent = valid ? "Valid" : error;
    input.parentElement.nextElementSibling.style.color = valid ? "green" : "red";
    return valid;
  }
  form.querySelectorAll("input").forEach((input) => input.addEventListener("input", () => validate(input)));
  form.addEventListener("submit", (event) => { event.preventDefault(); const valid = [...form.querySelectorAll("input")].every(validate); document.querySelector("#result").textContent = valid ? "Registration successful." : "Correct the errors."; console.log("Student form valid:", valid); });
}
