// Objects are variables too, but it contains multiple values.
// Objects can be declared in 3 ways:
// 1. Object Literal
// 2. Object Constructor
// 3. using new keyword
// *************************************************************
// 1. Object Literal:
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function username() {
    console.log(this.firstName, this.lastName);
  }
}; 
console.log(person.fullName());

//Display properties using loop
// 2. Using new keyword:
const employee = new Object();
employee.emp_fname = "Nischala";
employee.emp_lname = "Matcha";
employee.department = "testing";


for (let emp in employee)
{
    console.log(employee[emp]);
}
console.log("***************Display using .values*****************");
const emp_details = Object.values(person);
console.log(emp_details);

console.log("***************Display using .entries *****************");
for (let [key, val] of Object.entries(employee)) {
   console.log(key+":"+val); 
}

console.log("***************Display using JSON.stringify() *****************");
let emp = JSON.stringify(employee);
console.log(emp);