// Q7: The returned function closes over and remembers `multiplier`.
function makeMultiplier(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}

const triple = makeMultiplier(3);
console.log(triple(5)); // 15
// Even after makeMultiplier has returned, triple can still read its saved multiplier.
