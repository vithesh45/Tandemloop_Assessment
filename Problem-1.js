let a = 10; // first number
let b = 5;  // second number
let operation = "add"; // add, subtract, multiply, divide

if (operation === "add") {
    console.log("Addition:", a + b);
} else if (operation === "subtract") {
    console.log("Subtraction:", a - b);
} else if (operation === "multiply") {
    console.log("Multiplication:", a * b);
} else if (operation === "divide") {
    if (b === 0) {
        console.log("Cannot divide by zero");
    } else {
        console.log("Division:", a / b);
    }
} else {
    console.log("Invalid operation");
}