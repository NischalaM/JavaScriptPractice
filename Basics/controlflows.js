let age = 20;
// voteEligibility(age);

let operation = "add";
let a = 10, b = 3;
calculator("div", a, b);

let num = 44;
evenOrodd(num);

function voteEligibility (age){
    if (age > 18)
        console.log("Eligible for voting");
    else
        console.log("Not eligible for voting");
}

function calculator(operation, a, b) {
    
    switch (operation) {
        case "add":
            console.log(a + b);
            break;
        case "sub":
            console.log(a - b);
            break;
        case "mul":
            console.log(a * b);
            break;
        case "div":
            console.log(parseInt(a / b));
            break;
    }
    
}

function evenOrodd(num) {
    if (num % 2 == 0)
        console.log("Even Number");
    else if (num % 2 == 1)
        console.log("Odd Number");
    else
        console.log("undefined");
}