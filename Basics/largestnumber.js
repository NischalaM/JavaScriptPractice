// Largest among two integers

// Method1: using if - else statement
let a = 20, b = 30;
if (a > b) {
    console.log("a is the largest number");
}
else
    console.log("b is the largest number");

// Method2: using if-elseif statement & using function
const greaternumber = () => {
    let x = 8, y = 8;
    if (x > y) { console.log("x is greater number"); }
    else if (y > x) { console.log("y is greater"); }
    else { console.log(" x & y are equal"); }
}
greaternumber();

// Method3: input is taken from user
console.log("METHOD3:\n")
function comparenumbers( val1, val2) {
    // let val1, val2;
    val1 = window.prompt("Enter the first integer");
    val2 = window.prompt("Enter the second integer");

    if (val1 > val2) {
        console.log("val1=" + val1 + " is greater");
    }
    else
        console.log("val2=" + val2 + " is greater");
}
comparenumbers(20, 90);