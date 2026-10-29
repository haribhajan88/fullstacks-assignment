const search = document.getElementById("search");
const rows = [...document.querySelectorAll("tbody tr")];
const noResult = document.getElementById("noResult");

search.addEventListener("input", () => {
  const text = search.value.toLowerCase();
  let visible = 0;
  rows.forEach((row) => {
    const matches = row.textContent.toLowerCase().includes(text);
    row.style.display = matches ? "" : "none";
    if (matches) visible++;
  });
  noResult.style.display = visible ? "none" : "block";
});
