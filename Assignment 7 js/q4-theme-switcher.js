document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () => {
    const theme = button.dataset.theme;
    document.body.setAttribute("class", theme);
    document.body.setAttribute("data-theme", theme);
  });
});
