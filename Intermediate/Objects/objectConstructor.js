/*Object constructor function is used when we want work with many objects of same type
the function name should start with uppercase */

function Employees(fname, lname, dept, sal) {
    this.firstname = fname;
    this.lastname = lname;
    this.department = dept;
    this.salary = sal;
}

const emp1 = new Employees("Nischala", "Matcha", "Tester", 8.4);
const emp2 = new Employees("Liliya", "Rani", "Tester", 10.4);
const emp3 = new Employees("Steffi", "Matcha", "Tester", 8.4);
// emp1 = new Employees("xxx", "hjhjh", "hjhj", 0);// gives TypeError as we cannot reassign to const variable
console.log(emp2.firstname);

// Adding method to object
emp1.newmethod = function (str) {
    this.lastname = str;
}
emp1.newmethod("newstring");
console.log(emp1.lastname);

// Adding new method to constructor using .prototype
Employees.prototype.nationality = function addingNationality(country) {
    this.nationality = country;
};

emp1.nationality = "American";
emp2.nationality = "Indian";
emp3.nationality = "European";
console.log(emp1.department);

// Destructuring the object: extracting the values of objects/arrays and assign them to variables
let { firstname, lastname,...rest } = emp2;
console.log(firstname, lastname,rest);

