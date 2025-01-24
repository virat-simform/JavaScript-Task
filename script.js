let memory = 0; 
let op=['+','-','%','*','/']; // for operator validations
let flag=true; // for after result validations
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
    if ((op.includes((document.getElementById("display").value.charAt(document.getElementById("display").value.length - 1)))) || (document.getElementById("display").value=='')){
        document.getElementById('display').value += Math.PI;
    }
}
// Euler's number button
function appendE() {
    if ((op.includes((document.getElementById("display").value.charAt(document.getElementById("display").value.length - 1)))) || (document.getElementById("display").value=='')){
        document.getElementById('display').value += Math.E;
    }
}
// all numbers 0 to 9
function appendNumber(number) {
    if (flag==false){
        document.getElementById("display").value = number; // after result validation
    }else{
        document.getElementById("display").value += number;
    }
    flag=true;
}

// +,-,x,/,mod
function appendOperator(operator) {
    if (document.getElementById("display").value==''){ // placeholder
    }else if(op.includes((document.getElementById("display").value.charAt(document.getElementById("display").value.length - 1)))){
        document.getElementById('display').value = document.getElementById('display').value.slice(0, -1);
        document.getElementById("display").value += operator;
    }else if((document.getElementById("display").value != 'Error') &&
        (document.getElementById("display").value != 'NaN')) { 
        document.getElementById("display").value += operator;
    }
    
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
function logButton() {
    document.getElementById('display').value = Math.log10(parseFloat(document.getElementById('display').value));
}

//open bracket
function openBracket() {
    if ((document.getElementById("display").value != 'Error') &&
        (document.getElementById("display").value != 'NaN')) {
        document.getElementById("display").value += '(';
    }
}

//close bracket
function closeBracket() {
    let countopen = document.getElementById("display").value.split('(').length - 1;
    let countclose = document.getElementById("display").value.split(')').length - 1;
    if (countopen > countclose) {
        if(op.includes((document.getElementById("display").value.charAt(document.getElementById("display").value.length - 1)))){
        } else { // operator + close bracket validation
            document.getElementById("display").value += ')';
        }
    }
}

// sign function
function sign() {
    let x = document.getElementById("display").value;
    document.getElementById("display").value = -x;
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
function sqrtButton() {
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
    let x = parseInt(eval(document.getElementById("display").value));
    if (x < 0) {
        document.getElementById('display').value = 'Error';
    } else {
        document.getElementById('display').value = factorial(x);
    }
}

// power of 10 
function powerof10() {
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
    let countopen = document.getElementById("display").value.split('(').length - 1;
    let countclose = document.getElementById("display").value.split(')').length - 1;
    if (countopen != countclose) {
    } else{
        try {
            document.getElementById("display").value = eval(expression);
            flag=false;
        } catch (error) {
            document.getElementById("display").value = 'Error';
        }
    }
}
