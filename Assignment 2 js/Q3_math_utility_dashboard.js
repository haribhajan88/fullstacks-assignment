const x = 16.75;

const rounded = Math.round(x); 
const squareRoot = Math.sqrt(x);
const cubed = Math.pow(x, 3);    
const randomNumber = Math.floor(Math.random() * 41) + 10;
const summary = `Value: ${x}
Rounded: ${rounded}
Square root: ${squareRoot}
x to the power of 3: ${cubed}
Random number (10-50): ${randomNumber}`;

console.log(summary);
