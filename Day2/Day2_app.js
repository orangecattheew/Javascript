const color = ["blue", "red", "yellow", "green"];

color.forEach((element) => {
  console.log(element);
});

// function
let a = 5;
let b = 6;
function add(a, b) {
  console.log(a + b);
  return a + b;
}

const c = add(a, b);
console.log(c);

const d = function (a, b) {
  return a * b;
};
console.log(d(33, 55));

function calculateTotal(subTotal, tax) {
  return subTotal + tax;
}
console.log(calculateTotal(55000, 1112));

const calculateTotal_expression = function (subTotal, tax) {
  return subTotal + tax;
};

q = calculateTotal_expression(112121, 66767645);
console.log(q);

let order1, order2, order3;
function calculateResult(a, b, c) {
  order1 = a;
  order2 = b;
  order4 = c;
  console.log(order1, order2, order3);
}

console.log(typeof []);
console.log(typeof 23);
console.log(typeof "VAlue");
console.log(typeof true);

const person = {
  _name: "Orange",
  lastNAme: "CAT",
  education: false,
  say_hello: function () {
    console.log("Hello My NAme is Orange");
  },
  say_bye() {
    console.log("Bye");
  },
};
person.say_hello();
person.say_bye();

const car = {
  make: "hero",
  model: "200",
  year: 2011,
  hybrid: false,
  drive() {
    console.log("I am driving");
  },
  stop() {
    console.log("brake");
  },
  color: "white and blue",
};
car.drive();
car.stop();

console.log(23 == "23");
console.log(23 === "23");

console.log(true || false);
console.log(true && false);
