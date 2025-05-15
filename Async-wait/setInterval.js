// setInterval is used to execute a function repeatedly at specified intervals of time.
let interval = setInterval(myFunction, 3000);

function myFunction() {
  let d = new Date();
  console.log(d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());
}

//setTimeout:
// setTimeout is used to execute a function after a specified number of milliseconds.

let timeout = setTimeout(myFunction, 3000);

setTimeout(() => {
  clearTimeout(timeout);
  console.log("Timeout has been cancelled before execution");
}, 3000);

function myFunction() {
  let d = new Date();
  console.log(d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());
  console.log("Timeout executed after 3 seconds");
}
