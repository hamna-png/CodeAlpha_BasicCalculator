```javascript
let display = document.getElementById("display");

// Add value to display
function appendValue(value) {

    if (display.value === "0") {
        display.value = value;
    } 
    else {
        display.value += value;
    }
}

// Clear display
function clearDisplay() {
    display.value = "0";
}

// Delete last character
function deleteLast() {

    if (display.value.length === 1) {
        display.value = "0";
    } 
    else {
        display.value = display.value.slice(0, -1);
    }
}

// Calculate result
function calculate() {

    try {

        let expression = display.value;

        // Convert percentage
        expression = expression.replace(
            /(\d+(?:\.\d+)?)%/g,
            "($1/100)"
        );

        let result = eval(expression);

        if (!isFinite(result)) {
            display.value = "Error";
        } 
        else {
            display.value = result;
        }

    } 
    catch (error) {

        display.value = "Error";
    }
}

// Keyboard support
document.addEventListener("keydown", function(event) {

    let key = event.key;

    // Numbers and operators
    if (
        (key >= "0" && key <= "9") ||
        key === "+" ||
        key === "-" ||
        key === "*" ||
        key === "/" ||
        key === "."
    ) {
        appendValue(key);
    }

    // Enter = Calculate
    else if (key === "Enter") {
        calculate();
    }

    // Escape = Clear
    else if (key === "Escape") {
        clearDisplay();
    }

    // Backspace = Delete
    else if (key === "Backspace") {
        deleteLast();
    }

});
```;
