// Initialise variables and flag
let number1 = null;
let operator = null;
let number2 = null;
let displayValue = document.getElementById('calculator-display').value;
let shouldResetDisplay = false;

const buttons = document.querySelectorAll('button');

// Assign class 'number' to all number buttons
buttons.forEach(button => {
    if (!isNaN(button.innerText)) {
        button.classList.add('number');
    }
    
    button.addEventListener('click', () => {
        if (button.classList.contains('number')) {
            appendNumber(button.innerText);
        } else if (
            button.classList.contains('divide') ||
            button.classList.contains('multiply') ||
            button.classList.contains('subtract') ||
            button.classList.contains('add')
        ) {
            handleOperatorClick(button.innerText);
        } else if (button.id === 'equals') {
            handleEqualsClick();
        }
    });
});

function updateDisplay() {
    document.getElementById('calculator-display').value = displayValue;
}

function appendNumber(number) {
    if (shouldResetDisplay) {
        displayValue = number;
        shouldResetDisplay = false;
    } else {
        if (displayValue === "0") {
            displayValue = number;
        } else {
            displayValue += number;
        }
    }
    updateDisplay();
}

function handleOperatorClick(op) {
    if (number1 === null) {
        number1 = parseFloat(displayValue);
        operator = op;
        displayValue = "";
    } else if (operator !== null) {
        number2 = parseFloat(displayValue);
        const result = operate(number1, operator, number2);
        displayValue = result.toString();
        number1 = result;
        operator = op;
        shouldResetDisplay = true;
    } else {
        operator = op;
    }

    updateDisplay();
}

function handleEqualsClick() {
    if (number1 !== null && operator !== null) {
        // Store the second number and perform the calculation
        number2 = parseFloat(displayValue);

        const result = operate(number1, operator, number2);

        displayValue = result.toString();

        // Set the flag and update the display
        shouldResetDisplay = true;
        updateDisplay();

        // Reset variables for the next calculation
        number1 = null;
        operator = null;
        number2 = null;
    }
}

function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) { return a / b; }

function operate(number1, operator, number2) {
    let result = null;
    if (operator === "-") {
        result = subtract(number1, number2);
    } else if (operator === "+") {
        result = add(number1, number2);
    } else if (operator === "/") {
        result = divide(number1, number2);
    } else if (operator === "*") {
        result = multiply(number1, number2);
    }
    return result;
}
