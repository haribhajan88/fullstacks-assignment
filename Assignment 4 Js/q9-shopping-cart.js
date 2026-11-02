"use strict";

class Cart {
  constructor() { this.items = []; }
  addItem(name, price, quantity) { this.items.push({ name, price, quantity }); }
  getTotal() { return this.items.reduce((total, item) => total + item.price * item.quantity, 0); }
  applyCoupon(coupon) {
    const match = /^(SAVE|DISC)(\d{1,2})$/.exec(coupon.toUpperCase());
    if (!match) throw new Error("Coupon must look like SAVE20 or DISC10.");
    const percent = Number(match[2]);
    return this.getTotal() * (1 - percent / 100);
  }
}
const cart = new Cart();
cart.addItem("Keyboard", 1500, 1); cart.addItem("Mouse", 700, 2);
console.log("Cart total: ₹" + cart.getTotal());
try { console.log("Final total after SAVE20: ₹" + cart.applyCoupon("SAVE20")); } catch (error) { console.log(error.message); }
