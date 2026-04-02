const display = document.getElementById('display');

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        // eval() takes the string and executes it as math
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}