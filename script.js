let display = document.getElementById('display');

function appendToDisplay(value) {
    if (display.value === 'Error' || display.value === 'Infinity') {
        clearDisplay();
    }
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let expression = display.value
            .replace(/Math.PI/g, Math.PI)
            .replace(/\*\*/g, '^');
        
        // Handle x²
        expression = expression.replace(/(\d+\.?\d*)\^2/g, '($1*$1)');
        
        let result = eval(expression);
        display.value = result;
    } catch (e) {
        display.value = 'Error';
    }
}