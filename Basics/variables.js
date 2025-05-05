console.log(val);// undefined
console.log(b); // throws referrenceerror
console.log(c);

var val = "lilly";// global scope and the variable got hoisted
let b = 20;
const c = 50;

console.log(val);
console.log(a);

 function variablefunc() {
    let a = 34;
}
variablefunc();
// console.log(a); // throws error as it is defined inside the funtion.the scope is block level
