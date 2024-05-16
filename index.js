function add (a, b) { return a + b};

function subtract (a, b) { return a - b };

function multiply (a, b) { return a * b };

function divide (a, b) { return a / b };

let number1;
let operator;
let number2;

function operate (number1, operator, number2) {
    let result = null;

    if (operator === "-") {
        result = subtract(number1, number2);
    } else if (operator === "+") {
        result = add(number1, number2);
    } else if (operator === "/") {
        result = divide(number1, number2);
    } else if (operator === "*") {
        result = multiply(number1, number2);
    } else {
        return result
    }

    return result;
};