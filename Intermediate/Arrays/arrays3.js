// Task3:
// Remove the last item in the array.
// Add two new names to the end of the array.
// Go over each item in the array and add its index number after the name inside parentheses, for example Ryu (0). Note that we don't teach how to do this in the Arrays article, so you'll have to do some research.
// Finally, join the array items together in a single string called myString, with a separator of "-".

let myArray = [
  "Ryu",
  "Ken",
  "Chun-Li",
  "Cammy",
  "Guile",
  "Sakura",
  "Sagat",
  "Juri",
];
myArray.pop(myArray.length - 1);
myArray.push('Lilly', 'Billy');
console.log(myArray);