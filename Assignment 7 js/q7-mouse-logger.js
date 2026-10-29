const box = document.getElementById("box"), coordinates = document.getElementById("coordinates");
box.addEventListener("mousemove", (event) => { coordinates.textContent = `clientX: ${event.clientX}, clientY: ${event.clientY}`; });
box.addEventListener("dblclick", (event) => { const rect = box.getBoundingClientRect(), dot = document.createElement("span"); dot.className = "dot"; dot.style.left = `${event.clientX - rect.left}px`; dot.style.top = `${event.clientY - rect.top}px`; box.append(dot); });
