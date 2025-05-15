/*
    Generator functions are a special class of functions that simplify iterator-authoring using a function* syntax.
    They can be paused and resumed, allowing you to produce a sequence of values over time.
*/
console.log("--- Example1 for Generator Function ---");
function* testGenerator() {
    console.log("Inside generator function");
    yield true;
    console.log("After yield");
}
let res = testGenerator();
// console.log(res);
console.log(res.next());
console.log(res.next());
console.log(res.next());
console.log("--- Example2 for Generator Function ---");
// This is another generator function
function* test() {
  for (let p = 0; p < 6; p += 2) {
    yield p;
  }
}
let result = test();
console.log(result.next());
console.log(result.next());
console.log(result.next());
console.log(res.next());