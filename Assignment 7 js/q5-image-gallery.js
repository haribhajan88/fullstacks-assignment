const gallery = document.getElementById("gallery"), modal = document.getElementById("modal"), bigImage = document.getElementById("bigImage");
for (let i = 1; i <= 6; i++) { const img = document.createElement("img"); img.src = `https://picsum.photos/seed/dom${i}/500/350`; img.alt = `Gallery image ${i}`; gallery.append(img); }
gallery.addEventListener("click", (event) => { if (event.target.tagName === "IMG") { bigImage.src = event.target.src; modal.classList.add("show"); } });
modal.addEventListener("click", () => modal.classList.remove("show"));
bigImage.addEventListener("click", (event) => event.stopPropagation());
