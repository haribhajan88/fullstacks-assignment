// Q8: Add a map-like method to arrays. It preserves sparse slots like Array.prototype.map.
Array.prototype.myMap = function (callback, thisArg) {
  if (this == null) {
    throw new TypeError("myMap called on null or undefined");
  }
  if (typeof callback !== "function") {
    throw new TypeError("myMap callback must be a function");
  }

  const source = Object(this);
  const length = source.length >>> 0;
  const results = new Array(length);

  for (let index = 0; index < length; index += 1) {
    if (index in source) {
      results[index] = callback.call(thisArg, source[index], index, source);
    }
  }

  return results;
};

console.log([1, 2, 3].myMap(number => number * 2)); // [2, 4, 6]
// Like map(), myMap returns a new array and leaves the original unchanged.
