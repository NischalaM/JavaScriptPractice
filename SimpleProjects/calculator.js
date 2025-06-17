let num1= document.getElementById("num1");
let num2 = document.getElementById("num2");
let result = document.getElementById("result");

function calculate(operation) {
    let value1 = parseFloat(num1.value);
    let value2 = parseFloat(num2.value);
    let output;

    switch (operation) {
        case 'add':
            output = value1 + value2;
            break;
        case 'subtract':
            output = value1 - value2;
            break;
        case 'multiply':
            output = value1 * value2;
            break;
        case 'divide':
            if (value2 === 0) {
                result.innerHTML = "Error: Division by zero is not allowed.";
                return;
            }
            output = value1 / value2;
            break;
        default:
            result.innerHTML = "Invalid operation";
            return;
    }

    result.innerHTML = "Result: " + output;
}

// function add() {
//     let sum = parseFloat(num1.value) + parseFloat(num2.value);
//     result.innerHTML = "Result: " + sum;
// }
// function subtract() {
//     let difference = parseFloat(num1.value) - parseFloat(num2.value);
//     result.innerHTML = "Result: " + difference;
// }
// function multiply() {
//     let product = parseFloat(num1.value) * parseFloat(num2.value);
//     result.innerHTML = "Result: " + product;
// }   
// function divide() {
//     if (parseFloat(num2.value) === 0) {
//         result.innerHTML = "Error: Division by zero is not allowed.";
//     } else {
//         let quotient = parseFloat(num1.value) / parseFloat(num2.value);
//         result.innerHTML = "Result: " + quotient;
//     }
// }