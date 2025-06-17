// Callback functions are functions that are passed as arguments to other functions.
function greet(name, callback) {
  console.log("Hello, " + name + "!");
  callback();
}
function sayGoodbye() {
  console.log("Goodbye!");
}
// Using the callback function
greet("Alice", sayGoodbye);
// SetTimeout Example
function delayedGreeting(name) {
  console.log("Preparing to greet...");
  setTimeout(() => {
    console.log("Hello, " + name + "!");
  }, 2000); // Delay of 2 seconds
}       
// Using the delayedGreeting function
delayedGreeting("Bob");