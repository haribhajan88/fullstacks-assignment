const productName = " wireless headphones PRO ";

let title = productName.trim().toLowerCase();
let words = title.split(" ");
words = words.map(function (word) {
  return word[0].toUpperCase() + word.slice(1);
});
title = words.join(" ");
title = title.replace("Pro", "Pro Edition");

console.log("Product: " + title);
console.log("Length: " + title.length);
