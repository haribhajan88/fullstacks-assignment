"use strict";

class Product {
  constructor(id, name, price, category) { this.id = id; this.name = name; this.price = price; this.category = category; }
  applyDiscount(percent) { this.price -= this.price * percent / 100; }
  displayDetails() { return `#${this.id} | ${this.name} | ₹${this.price.toFixed(2)} | ${this.category}`; }
}

const products = [new Product(1, "Laptop", 65000, "Electronics"), new Product(2, "Notebook", 120, "Stationery"), new Product(3, "Headphones", 1800, "Electronics")];
products[2].applyDiscount(10); // Apply a 10% discount to headphones.
console.log("All products:");
products.forEach((product) => console.log(product.displayDetails()));
console.log("Products above ₹1000:");
products.filter((product) => product.price > 1000).forEach((product) => console.log(product.displayDetails()));
