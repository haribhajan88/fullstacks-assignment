// Enter the user's name.
const userName = "Asha";

// Get the current hour (0–23).
const currentHour = new Date().getHours();

// Choose a greeting based on the time.
if (currentHour < 12) {
  console.log(`Good Morning ${userName}!`);
} else if (currentHour <= 17) {
  console.log(`Good Afternoon ${userName}!`);
} else {
  console.log(`Good Evening ${userName}!`);
}