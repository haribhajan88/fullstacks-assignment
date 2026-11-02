"use strict";

const user = { name: "John", email: "john@mail.com", age: 21 };
if (typeof document === "undefined") console.log("User:", user);
else {
  document.body.innerHTML += `<form id="userForm"><h2>Edit User</h2><label>Name <input name="name" value="${user.name}"></label><br><label>Email <input name="email" value="${user.email}"></label><br><label>Age <input name="age" type="number" value="${user.age}"></label><br><button>Update</button></form><pre id="userOutput"></pre>`;
  const output = document.querySelector("#userOutput");
  function showUser() { output.textContent = JSON.stringify(user, null, 2); }
  showUser();
  document.querySelector("#userForm").addEventListener("submit", (event) => { event.preventDefault(); const form = event.currentTarget; user.name = form.name.value.trim(); user.email = form.email.value.trim(); user.age = Number(form.age.value); showUser(); console.log("Updated user:", user); });
}
