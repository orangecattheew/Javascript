console.log(typeof "string");
console.log("string".length); //length is a property
let text =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, assumenda!";
console.log(text.length);
console.log(text.toLowerCase());
console.log(text.toUpperCase());
console.log(text.charAt(0));
console.log(text.indexOf("t"));
console.log(text.replace(/o/g, "0"));
console.log(text.slice(0, 3));
console.log(text.slice(-3));

function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`.toUpperCase();
}
console.log(fullName("orange", "cat"));

let fruits = ["apple", "orange", "bananana", "mango"];
console.log(fruits.length - 1, fruits.reverse());
console.log(fruits.concat("watermelon"));
console.log(fruits.shift());
console.log(fruits.push("Apple"));
console.log(fruits.push("123"));
console.log(fruits);
