// Task2:
// Convert the string into an array, removing the + characters in the process.Save the result in a variable called myArray.
// Store the length of the array in a variable called arrayLength.
// Store the last item in the array in a variable called lastItem.

let myString = "Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri";
let arr = myString.split("+");
// console.log(arr);
let arrayLength = arr.length;
let lastItem = arr[arrayLength - 1];
console.log(lastItem);