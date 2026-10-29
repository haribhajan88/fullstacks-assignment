const productInput = document.getElementById("productInput");
const addButton = document.getElementById("addButton");
const productList = document.getElementById("productList");
let editingItem = null;

function addProduct() {
  const name = productInput.value.trim();
  if (!name) return;
  const item = document.createElement("li");
  item.innerHTML = `<span>${name}</span> <button class="editBtn">Edit</button><button class="deleteBtn">Delete</button>`;
  productList.append(item);
  productInput.value = "";
}
addButton.addEventListener("click", addProduct);
productInput.addEventListener("keydown", (e) => { if (e.key === "Enter") addProduct(); });

// One listener on ul handles every current and future Edit/Delete button.
productList.addEventListener("click", (event) => {
  const item = event.target.closest("li");
  if (!item) return;
  if (event.target.classList.contains("deleteBtn")) { item.remove(); return; }
  if (event.target.classList.contains("editBtn")) startEditing(item);
});
function startEditing(item) {
  saveEditing();
  const name = item.querySelector("span").textContent;
  item.querySelector("span").replaceWith(Object.assign(document.createElement("input"), { value: name, className: "editInput" }));
  item.classList.add("edit"); editingItem = item; item.querySelector("input").focus();
}
function saveEditing() {
  if (!editingItem) return;
  const input = editingItem.querySelector("input");
  const span = document.createElement("span");
  span.textContent = input.value.trim() || "Untitled product";
  input.replaceWith(span); editingItem.classList.remove("edit"); editingItem = null;
}
document.addEventListener("click", (event) => { if (editingItem && !editingItem.contains(event.target)) saveEditing(); });
