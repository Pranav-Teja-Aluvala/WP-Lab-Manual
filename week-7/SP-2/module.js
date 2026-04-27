// Named export
export const PI = 3.14159;

// Named export
export function add(a, b) {
    return a + b;
}

// Default export
export default function multiply(a, b) {
    return a * b;
}

// Named export - Division
export function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
}

// Named export - Modulus
export function modulus(a, b) {
    if (b === 0) {
        return "Cannot perform modulus with zero";
    }
    return a % b;
}