let number1 = null;
let operator = null;
let number2 = null;
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

/* 
HANDLE OPERATOR INPUT AND PERFORM CALCULATIONS
    LOOP THROUGH EACH BUTTON
        CHECK IF THE BUTTON IS AN OPERATOR BUTTON
            IF YES,
                ADD CLICK EVENT LISTENER
                WHEN CLICKED, STORE THE OPERATOR
                UPDATE DISPLAY
    ADD CLICK EVENT LISTENER TO THE EQUALS BUTTON
        WHEN CLICKED,
            PERFORM CALCULATION USING STORED OPERATOR AND STORED NUMBERS
            UPDATE DISPLAY WITH THE RESULT
 */

buttons.forEach(button => {
    if (
        button.classList.contains('divide') ||
        button.classList.contains('multiply') ||
        button.classList.contains('subtract') ||
        button.classList.contains('add')
    ) {
        button.addEventListener('click', () => {
            // Store the current display value in number1
            number1 = parseFloat(displayValue);

            // Clear the display value
            displayValue = '';

            operator = button.innerText;
            console.log(operator)

            // Update the display 
            updateDisplay();
        })
    }
})

document.getElementById('equals').addEventListener('click', () => {
    if (number1 !== null && number2 !== null) {
        number2 = parseFloat(displayValue);
    }
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
