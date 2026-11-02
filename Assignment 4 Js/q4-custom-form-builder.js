"use strict";

class FormBuilder {
  constructor(fields) { this.fields = fields; }
  render(container) {
    // innerHTML builds controls from every object in the field configuration.
    container.innerHTML = `<form id="dynamicForm">${this.fields.map((field) => `<label>${field.label}<br><input type="${field.type}" name="${field.name}" ${field.required ? "required" : ""}></label><br><br>`).join("")}<button>Submit</button></form><pre id="output"></pre>`;
    container.querySelector("form").addEventListener("submit", (event) => { event.preventDefault(); const data = this.getFormData(event.currentTarget); container.querySelector("#output").textContent = JSON.stringify(data, null, 2); console.log("Form data:", data); });
  }
  getFormData(form) { return Object.fromEntries(new FormData(form).entries()); }
}
if (typeof document === "undefined") console.log("Open this file in a browser.");
else { const container = document.createElement("section"); document.body.append(container); new FormBuilder([{ type: "text", label: "Username", name: "username", required: true }, { type: "email", label: "Email", name: "email", required: true }, { type: "number", label: "Age", name: "age" }]).render(container); }
