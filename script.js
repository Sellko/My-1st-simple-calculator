function appendNumber(number) {
    const display = document.getElementById('display');
    if (display.value === "0" && number !== ".") {
        display.value = number;
    } else {
        display.value += number;
    }
}

function appendOperator(op) {
    const display = document.getElementById('display');
    const lastChar = display.value.slice(-1);
    if (["+", "-", "*", "/"].includes(lastChar)) {
        display.value = display.value.slice(0, -1) + op;
    } else {
        display.value += op;
    }
}

function clearDisplay() {
    document.getElementById('display').value = "0";
}

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
    if (display.value === "") display.value = "0";
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = "Error";
    }
}

function calculateSqrt() {
    const display = document.getElementById('display');
    try {
        // Vypočíta odmocninu z aktuálneho čísla
        display.value = Math.sqrt(eval(display.value));
    } catch (e) {
        display.value = "Error";
    }
}

function percentage() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value) / 100;
    } catch (e) {
        display.value = "Error";
    }
}
