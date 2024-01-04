document.querySelectorAll(".btn").forEach((item) => {
  item.addEventListener("click", () => {
    alert("this is awesome");
  });
});

// I prefer the console.log approach as it can display objects as well
console.log("Hello Orange Cat");
document.write("Hello Orange Cat");
// alert("Hello Orange");

// Variable
let day1_name = "Orange The Cat";
console.log(day1_name);

// Varaible challenge 1
const firstName = "Orange";
const lastName = "CAt";
let address = "MAin street";
console.log(address);
address = "first street";
console.log(firstName, lastName, address);

// 2
const country = "Cat";
const fullMailingAddress = address + "" + country;
console.log(fullMailingAddress);

// 3

let score1, score2, score3;
score1 = 99;
score2 = 89;
score3 = 79;

const total_score = score1 + score2 + score3;
const average_score = total_score / 3;
console.log(total_score, average_score);
let plates = 20;
let people = 7;
const remaining_plates = plates % people;

console.log(remaining_plates + 1);
