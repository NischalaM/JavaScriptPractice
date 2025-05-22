var employees = ["Nikitha", "Ananya", "Ajay", "Vinod", "Priyankaaaa"];
console.log("Size of an Array: " + employees.length);

// ---------------------------------POP---------------------------------------------------------
// //Remove element from array
console.log("Pop method:");
let newlist = employees.pop("Ajay");
console.log("After Pop metod:" + newlist);

// ------------------------------------PUSH-------------------------------------------------------
// //Add new element to array
console.log("Push method:");
employees.push("Liliya");
  console.log(employees);


// ---------------------------------------UNSHIFT----------------------------------------------------------------
console.log("After splicing the array: "+employees.splice(1, 2)); // Removes the elements from given staring postion(1),two elements will be removed
console.log("Before unshifting the array:"+employees);
employees.unshift("Steffi"); // Adds the element to the start of the array
console.log("After unshifting the array: "+employees);

// ---------------------------------------SLICE---------------------------------------------------------
// Removes elements from index starting - 2 from statring 2 elements will be removed
// console.log(employees.slice(2));

// ---------------------------------------SHIFT--------------------------------------------------------
// console.log(employees);
// console.log(employees.shift());// Removes first element of an array
// console.log(employees);// prints the array after removing first element

// ------------------------------------------SPLICE--------------------------------------------------------------
// console.log(employees);// array after emoving the elements

// ---------------------------------------Accessing Items using For ..of, for..in, map() & filter()-------------------------------------------------------
// //printing all the elemnets of an array one by one using for loop

for (let i=0; i<employees.length; i++) {
    console.log("Printing each emp using for loop:"+employees[i]);
}

for (let employee of employees) {
    console.log("Printing each emp using for of loop:"+employee);
}
for (let emp in employees) { //gives the indexes of the array elements
    console.log("Printing each emp index using for in loop:"+emp);
}

// ------------------------------------------FILTER-----------------------------------------------
console.log("======== Filter method =========");
const isLong = (emp) => {
  return emp.length > 8;
};
let newlist1 = employees.filter(isLong);
console.log(newlist1);

// -----------------------------------------MAP-------------------------------------------------------
console.log("======== Map method =========");
const currentage = (age) => {
  return age + 2;
};
let age = [20, 30, 45, 50];
let presentage = age.map(currentage);
console.log(presentage);

// ---------------------------Converting string to array----------------------------------------------------------------------------

let str = "This takes a single parameter, the Character you want to separate the string ";
let strarr = str.split(" ");
console.log(strarr.length + "--" + strarr);


let newstr = strarr.join("-");
console.log(newstr);


let str1 = "Nischala";
let chararr = str1.split("");
console.log(chararr);

let newstr1 = chararr.toString();
console.log(typeof(newstr1)+newstr1);
