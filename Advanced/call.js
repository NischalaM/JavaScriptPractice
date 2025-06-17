// call() is a method of the Function prototype that allows you to call a function with a specified this value and arguments provided individually.
// It is useful for borrowing methods from one object and applying them to another object.
function greeting() {
    console.log(`Hello, ${this.name}! ,I am ${this.age} years old.`);
}
const person1 = {
    name: "Lilly",
    age:6
}
const person2 = {
    name: "Nischala",
    // age: 34
} 
// Using call to invoke the greeting function with person1 as this
greeting.call(person2); // Output: Hello, Nischala!
greeting.call(person1); // Output: Hello, Lilly!

greeting.bind(person2)(); // Output: Hello, Nischala
greeting.bind(person1)(); // Output: Hello, Lilly

// Using apply to invoke the greeting function with person1 as this
greeting.apply(person1); // Output: Hello, Lilly!
greeting.apply(person2,[34]); // Output: Hello, Nischala!