// Initiate counter


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

