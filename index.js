let number1;
let operator;
let number2;
let displayValue = document.getElementById('calculator-display').value;

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    if (!isNaN(button.innerText)) {
        button.classList.add('number');
    }

    button.addEventListener('click', () => {
        if (button.classList.contains('number')) {
            appendNumber(button.innerText)
        }
    })
})

function updateDisplay() {
    document.getElementById('calculator-display').value = displayValue;
}

function appendNumber(number) {
    if (displayValue === "0") {
        displayValue = number;
    } else {
        displayValue += number;
    }

    updateDisplay();
}
function add (a, b) { return a + b};

function subtract (a, b) { return a - b };

function multiply (a, b) { return a * b };

function divide (a, b) { return a / b };


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
