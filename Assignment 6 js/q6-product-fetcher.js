
async function loadProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const products = await response.json();
    products.forEach((product) => {
      console.log(`Product: ${product.title}`);
      console.log(`Price: $${product.price}`);
      console.log(`Image: ${product.image}`);
      console.log("--------------------");
    });

    // Optional browser-only product cards.
    if (typeof document !== "undefined") {
      const container = document.createElement("section");
      products.forEach((product) => {
        const card = document.createElement("article");
        card.innerHTML = `<h3>${product.title}</h3><p>$${product.price}</p>`;
        const image = document.createElement("img");
        image.src = product.image;
        image.alt = product.title;
        image.width = 120;
        card.append(image);
        container.append(card);
      });
      document.body.append(container);
    }
  } catch (error) {
    console.error("Failed to load products. Please try again.");
    console.error(error.message);
  }
}

loadProducts();
