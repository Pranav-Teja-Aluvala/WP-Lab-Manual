// calculator.js

const PI = 3.14159;

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

// Exporting multiple items
module.exports = {
    add,
    subtract,
    constantPI: PI
};