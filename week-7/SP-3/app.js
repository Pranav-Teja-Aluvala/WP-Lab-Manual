// app.js

// Importing the module
const math = require('./calculator.js');

// Using the imported functions
const sum = math.add(10, 5);
const diff = math.subtract(10, 5);

// Displaying results
console.log("--- CommonJS Module Results ---");
console.log(`Value of PI: ${math.constantPI}`);
console.log(`10 + 5 = ${sum}`);
console.log(`10 - 5 = ${diff}`);