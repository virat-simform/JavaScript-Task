let memory = 0;

// memory buttons
function memo(action) {
    let currentValue = parseFloat(document.getElementById('display').value);
    if (action === 'mc') { // Memory Clear
        memory = 0;
    } else if (action === 'mr') { // Memory Recall
        document.getElementById('display').value = memory;
    } else if (action === 'm+') { // Memory Add
        memory += currentValue;
    } else if (action === 'm-') { // Memory Subtract
        memory -= currentValue;
    } else if (action === 'ms') { // Memory Store
        memory = currentValue;
    }
    //memory update
    document.getElementById('mem').textContent = memory;
}
// Pi button
function appendPi() {
    document.getElementById('display').value += Math.PI;
}
// Euler's number button
function appendE() {
    document.getElementById('display').value += Math.E;
}

// all numbers 0 to 9
function appendNumber(number) {
    document.getElementById("display").value += number;
}

// +,-,x,/,mod
function appendOperator(operator) {
    document.getElementById("display").value += operator;
}
// x^2 button
function squareButton() {
    document.getElementById('display').value = Math.pow(parseFloat(document.getElementById('display').value), 2);
}

// x^3 button
function cubeButton() {
    document.getElementById('display').value = Math.pow(parseFloat(document.getElementById('display').value), 3);
}

// ln button
function lnButton() {
    document.getElementById('display').value = Math.log(parseFloat(document.getElementById('display').value));
}

// log button
function logButton(){
    document.getElementById('display').value = Math.log10(parseFloat(document.getElementById('display').value));
}

// sign function
function sign(){
    let x=document.getElementById("display").value;    
    document.getElementById("display").value=-x;
}

// absolute button 
function absButton() {
    document.getElementById('display').value = Math.abs(parseFloat(document.getElementById('display').value));
}
// inverse button
function inversebutton() {
    let x = parseFloat(document.getElementById('display').value);
    if (x == 0) {
        document.getElementById("display").value = 'Error';
    } else {
        document.getElementById('display').value = 1 / x;
    }
}

// sqrt Button
function sqrtButton(){
    document.getElementById('display').value = Math.sqrt(parseFloat(document.getElementById('display').value));
}
// factorial button
function factorial(n) {
    if (n < 0) return 'Error'; 
    if (n === 0 || n === 1) return 1; 
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
function factorialButton() {
    let x = parseInt(document.getElementById('display').value);
    if (x < 0) {
        document.getElementById('display').value = 'Error';
    } else {
        document.getElementById('display').value = factorial(x);
    }
}

// power of 10 
function powerof10(){
    document.getElementById('display').value = Math.pow(10, parseFloat(document.getElementById('display').value));
}

// backspace button
function clearOneCharacter() {
    let currentDisplay = document.getElementById('display').value;
    document.getElementById('display').value = currentDisplay.slice(0, -1);
} 
// clear screen button
function clearDisplay() {
    document.getElementById("display").value = '';
}

function calculateResult() {
    let expression = document.getElementById("display").value;
    try {
        document.getElementById("display").value = eval(expression);
    } catch (error) {
        document.getElementById("display").value = 'Error';
    }
}
