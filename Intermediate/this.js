var num = 10;
function printNum() {
  console.log("Inside the function: " + num);//10
}
printNum();
console.log("Outside the function: " + this.num );//undefined -- pointint to global (window) object
// In the above example, the variable num is declared in the global scope.

