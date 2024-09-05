let memoryValue = 0;

function appendToDisplay(value) {
    const display = document.getElementById("display");
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById("display");
    display.value = "";
}

function calculateResult() {
    const display = document.getElementById("display");
    try {
        const result = eval(display.value);
        if (result === Infinity) {
            display.value = "Error: Division by zero";
        } else {
            display.value = result;
        }
    } catch (error) {
        display.value = "Error";
    }
}

function calculateSquareRoot() {
    const display = document.getElementById("display");
    const value = parseFloat(display.value);
    if (value < 0) {
        display.value = "Error: Negative value";
    } else {
        display.value = Math.sqrt(value);
    }
}

function calculatePercentage() {
    const display = document.getElementById("display");
    display.value = parseFloat(display.value) / 100;
}

function memoryAdd() {
    const display = document.getElementById("display");
    memoryValue += parseFloat(display.value);
    clearDisplay();
}

function memorySubtract() {
    const display = document.getElementById("display");
    memoryValue -= parseFloat(display.value);
    clearDisplay();
}

function memoryRecall() {
    const display = document.getElementById("display");
    display.value = memoryValue;
}

function memoryClear() {
    memoryValue = 0;
}
