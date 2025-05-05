// //  Different types of Loops in Js

//Example of for() loop
let num = 3;
// multiplesofnumber(num);

function multiplesofnumber(num) {
  let res = "";

  for (let i = 1; i <= 10; i++) {
    res = num * i;
    console.log(res);
  }
}

// example of for...in loop

let fruits = ["apple", "mango", "grapes"];
for (var fruit in fruits) {
  console.log(fruit); //prints the index of the array elements
}

for (var fruit of fruits) {
  console.log(fruit); // prints the values of array elements
}

// implementing for loop on Object
let vehicle = {
  brand: "Honda",
  model: "hunter",
  weight: 120,
};
for (let prop in vehicle) console.log(vehicle[prop]);

//
let emp = [
  { fname: "Lilly", age: "6" },
  { fname: "Lia", age: "9" },
  { fname: "Ian", age: "2" },
  { fname: "Blessy", age: "3" },
];
// for (let fname in emp)
emp.forEach((key) => {
    console.log(key.fname,key.age);
})
    