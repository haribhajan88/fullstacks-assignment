"use strict";

if (typeof document === "undefined") console.log("Open this file in a browser.");
else {
  document.body.innerHTML += `<form id="bookingForm"><h2>Movie Booking</h2><label>Name <input name="name"></label><br><label>Email <input name="email"></label><br><label>Seats <input name="seats" type="number"></label><br><button>Book</button></form><p id="message"></p><pre id="ticket"></pre>`;
  document.querySelector("#bookingForm").addEventListener("submit", (event) => {
    event.preventDefault(); const form = event.currentTarget; const booking = { name: form.name.value.trim(), email: form.email.value.trim(), seats: Number(form.seats.value) };
    const valid = /^[A-Za-z ]+$/.test(booking.name) && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(booking.email) && Number.isInteger(booking.seats) && booking.seats >= 1 && booking.seats <= 10;
    document.querySelector("#message").textContent = valid ? "Booking confirmed." : "Enter a valid name, email, and 1–10 seats.";
    if (valid) { document.querySelector("#ticket").textContent = `TICKET\nName: ${booking.name}\nEmail: ${booking.email}\nSeats: ${booking.seats}`; console.log("Booking:", booking); }
  });
}
