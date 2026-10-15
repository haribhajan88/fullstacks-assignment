
const feedback = "Great product! Fast delivery and amazing sound quality!";
const words = feedback.split(" ");
const lowerCaseFeedback = feedback.toLowerCase();

console.log("Word count: " + words.length);

if (lowerCaseFeedback.includes("bad") || lowerCaseFeedback.includes("poor")) {
  console.log("Needs Improvement");
} else {
  console.log("Positive Feedback");
}
