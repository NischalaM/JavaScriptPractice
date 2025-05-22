let fname = " Matcha";
let lname = " Nischala ";
let fullName=fname.concat(" ", lname);
console.log(fullName);

console.log("Character at index 4 is:"+fullName.at(-4));//works with negative index
console.log("Character at index 4 is:" + fullName.charAt(5));//does not work with negative index
console.log(fullName.includes("Matcha"));//fullName.includes("Matcha") returns true if the string is present in the fullName
console.log(fullName.indexOf("Nischala"));//returns the index of the first occurrence of the specified value in a string
console.log(fullName.length);//returns the length of the string
console.log(fullName.slice(0,8));//returns the string from index 0 to 8
console.log(fullName.slice(0, -2));//returns the string from index 0 to -2
console.log(fullName.trim());//removes the whitespace from both sides of a string
console.log(fullName.toLowerCase());//converts the string to lowercase
console.log(fullName.toUpperCase());//converts the string to uppercase
console.log(fullName.replace("Matcha", "Victor"));//replaces the first occurrence of the specified value in a string
console.log(fullName.replaceAll("Nischala", "Victor"));//replaces all occurrences of the specified value in a string
console.log(fullName.split(" "));//splits the string into an array of substrings
console.log(fullName.split(" ", 2));//splits the string into an array of substrings and returns the first two elements
console.log(fullName.split(" ", 2).join("-"));//splits the string into an array of substrings and returns the first two elements and joins them with a hyphen
console.log(fullName.valueOf());//returns the primitive value of a string object
console.log(fullName.search("Nischala"));//returns the index of the first occurrence of the specified value in a string