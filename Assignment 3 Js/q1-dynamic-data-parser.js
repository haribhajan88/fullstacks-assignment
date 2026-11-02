"use strict";
const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];
const validNumericData = [];
const invalidData = [];

console.log("=== Dynamic Data Parser ===");
for (let index = 0; index < apiData.length; index += 1) {
  const value = apiData[index];
  const numberValue = Number(value);
  const booleanValue = Boolean(value);
  const stringValue = String(value);
  const isBlankString = typeof value === "string" && value.trim() === "";
  const isValidNumber = !Number.isNaN(numberValue) && !isBlankString && value !== undefined;

  if (isValidNumber) {
    validNumericData.push(numberValue);
    console.log(`[${index}] valid | original: ${JSON.stringify(value)} | Number: ${numberValue} | Boolean: ${booleanValue} | String: "${stringValue}"`);
  } else {
    invalidData.push(value);
    console.log(`[${index}] INVALID NUMBER | original: ${JSON.stringify(value)} | Number: ${numberValue} | Boolean: ${booleanValue} | String: "${stringValue}"`);
  }
}
console.log("Valid numeric data:", validNumericData);
console.log("Invalid data:", invalidData);
