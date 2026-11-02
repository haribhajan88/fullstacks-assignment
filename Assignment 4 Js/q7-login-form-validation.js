"use strict";

if (typeof document === "undefined") console.log("Open this file in a browser.");
else {
  document.body.innerHTML += `<form id="loginForm"><h2>Login</h2><label>Username <input name="username"></label><br><label>Password <input type="password" name="password"></label><br><button>Login</button></form><ul id="messages"></ul>`;
  document.querySelector("#loginForm").addEventListener("submit", (event) => {
    event.preventDefault(); const form = event.currentTarget; const errors = [];
    if (!/^.{5,}$/.test(form.username.value)) errors.push("Username must have at least 5 characters.");
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/.test(form.password.value)) errors.push("Password needs 8+ characters, upper/lowercase, number, and special character.");
    document.querySelector("#messages").innerHTML = errors.length ? errors.map((error) => `<li style="color:red">${error}</li>`).join("") : "<li style='color:green'>Login successful.</li>";
    console.log(errors.length ? errors : "Login successful.");
  });
}
