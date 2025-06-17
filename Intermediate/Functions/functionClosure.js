// Initiate counter

// Closure is a function that has access to its own scope, the outer function's scope, and the global scope.
// In this example, the inner function Counter has access to the variable counter defined in the outer function add.
// Function to increment counter

function add() {
  let counter = 0;
  return function Counter() {
    counter += 2;
    console.log(`The counter is : ${counter}`);
  }   
}
let res = add();
for(let i=0; i<5; i++){
  res();
}

