// // Strings
// const myVariable = "Mathematics";

// // The Length Property
// console.log(myVariable.length);

// // String Methods
// // charAt
// console.log(myVariable.charAt(5));

// // Indexof Method
// console.log(myVariable.indexOf("ath"));

// // Slice Method
// console.log(myVariable.slice(5, 8));

// // toUpperCase Method
// console.log(myVariable.toUpperCase());
// console.log(myVariable.toLowerCase());

// // includes method
// console.log(myVariable.includes("div"));
// console.log(myVariable.includes("tic"));

// // split method
// console.log(myVariable.split("e"));
// console.log(myVariable.split(""));
// console.log("John,Joe,Dave".split(","));
// console.log("Every good boy does fine".split(" "));

// // If Statements
// // let soup = "chicken noodle soup";
// // let reply;

// // if (soup) {
// //     reply = `Here's your order of ${soup}`;
// // } else {
// //     reply = `sorry, we're out of soup`;
// // }
// // console.log(reply);

// let customerIsBanned = false;
// let soup = "chicken noodle soup";
// let crackers = true;
// let reply;
// if (customerIsBanned) {
//   reply = "No Soup for you!";
// } else if (soup && crackers) {
//   reply = `Here's your order of ${soup} & crackers`;
// } else if (soup) {
//   reply = `Here's your order of ${soup}`;
// } else {
//   reply = `sorry, we're out of soup`;
// }
// console.log(reply);

// let testScore = 82;
// let collegeStudent = true;
// let grade;

// if (testScore >= 90) {
//   grade = "A";
// } else if (testScore >= 80) {
//   grade = "B";
// } else if (testScore >= 70) {
//   grade = "C";
// } else if (testScore >= 60) {
//   grade = "D";
// } else {
//   // Nested if statement
//   if (collegeStudent) {
//     grade = "U";
//   } else {
//     grade = "F";
//   }
// }
// console.log(grade);

// // Decision Tree!
// // if (playerOne === computer) {
// //     // tie game
// // } else if (playerOne === "rock") {
// //     if (computer === "paper"){
// //         // computer wins
// //     } else {
// //         // playerOne wins
// //     }
// // } else if (playerOne === "paper") {
// //     if (computer === "scissors"){
// //         // computer wins
// //     } else {
// //         // playerone wins
// //     }
// // } else {
// //     if (computer === "rock"){
// //         // computer wins
// //     } else {
// //         // playerone wins
// //     }
// // }

// let options = ["rock", "paper", "scissors"];
// let computerPick = options[Math.floor(Math.random() * options.length)];

// let playerOne = "paper";
// let computer = "computerPick";
// let result;
// if (playerOne === computer) {
//   result = "Tie!";
//   // tie game
// } else if (playerOne === "rock") {
//   if (computer === "paper") {
//     result = "Computer Wins!";
//     // computer wins
//   } else {
//     result = "PlayerOne Wins";
//     // playerOne wins
//   }
// } else if (playerOne === "paper") {
//   if (computer === "scissors") {
//     result = "Computer Wins";
//     // computer wins
//   } else {
//     result = "PlayerOne Wins";
//     // playerone wins
//   }
// } else {
//   if (computer === "rock") {
//     result = "Computer Wins";
//     // computer wins
//   } else {
//     result = "PlayerOne Wins";
//     // playerone wins
//   }
// }
// console.log(result);

// let player = "paper";
// let comp = "rock";
// let final;

// if (player === comp) {
//   final = "Tie";
//   // tie game
// } else if (playerOne === "rock") {
//   if (comp === "paper") {
//     final = "Comp Wins";
//     // comp wins
//   } else {
//     final = "Player Wins";
//     // playerOne wins
//   }
// } else if (playerOne === "paper") {
//   if (comp === "scissors") {
//     final = "Comp Wins";
//     // comp wins
//   } else {
//     final = "Player Wins";
//     // playerone wins
//   }
// } else {
//   if (comp === "rock") {
//     final = "Comp Wins";
//     // comp wins
//   } else {
//     final = "Player Wins";
//     // playerone wins
//   }
// }
// console.log(final);

// let time = 16;
// if (time < 12) {
//   console.log("Good morning");
// } else if (time < 14) {
//   console.log("Good Afternoon");
// } else {
//   console.log("Good evening");
// }

// // for loop

// for (let l = 1; l <= 5; l++) {
//   document.write("Hello World <br>");
// }

// // Forward For Loop

// for (let p = 1; p <= 10; p++) {
//   document.write(3, " x ", p, " = ", 3 * p, "<br>");
// }

// // Reverse For Loop

// for (let f = 10; f >= 1; f--) {
//   document.write(16, " x ", f, " = ", 16 * f, "<br>");
// }

// let d = 5;
// for (let w = 1; w <= 10; ++w) {
//   console.log(d + " * " + w + " = " + d * w);
// }
// // document.write(d + " * " + w + " = " + d * w);

// // Nested For Loops
// // Nested Loops with Same Max Value

// for (let r = 1; r <= 2; r++) {
//   for (let t = 1; t <= 2; t++) {
//     document.write("Hello <br>");
//   }
// }

// // Nested Loops with Diff Max Value

// let y = 2;
// let x = 3;

// for (let z = 1; z <= y; z++) {
//   for (let a = 1; a <= x; a++) {
//     document.write("*World Of Index$ <br>");
//   }
// }

// Patterns of Numbers & Stars

// let row = 6;
// let col = 6;

// for (let q=1; q<=row; q++) { // Outer for loop - Rows
//     for (let g=1; g<=col; g++) { // Inner for loop - columns
//         document.write(" * ");
//     }
//     document.write("<br>")
// }

// let rows = 5;
// let cols = 5;

// for (let i=1; i<=rows; i++) {
//     for (let j=1; j<=cols; j++) {
//         document.write(" ",i, " ");
//     }
//     document.write("<br>");
// }

// let rowss = 5;
// let colss = 5;

// for (let i=1; i<=rowss; i++) {
//     for (let j=1; j<=colss; j++) {
//         document.write(" ",j, " ");
//     }
//     document.write("<br>");
// }

// Pyramid Patterns of Numbers & Stars

let r = 5;

for (let i = 1; i <= r; i++) {
  for (let k = 1; k <= r - i; k++) {
    document.write("&nbsp;");
  }
  for (let j = 1; j <= i; j++) {
    document.write("*  ");
  }
  document.write("<br>");
}

function deleteElement(arr, ele) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == ele) {
      arr.splice(i, 1); //Delete element from array
    }
  }
  return arr;
}
var arr = [23, 56, 4, 78, 5, 63, 210, 56];
arr = deleteElement(arr, 78);

console.log(arr);

//   const numNeighbours = Number(
//     prompt("How many neighbour countries does your country have")
//   );
//   console.log(numNeighbours);

//   if (numNeighbours === 1) {
//     console.log("Only 1 border");
//   } else if (numNeighbours > 1) {
//     console.log("More than 1 border");
//   } else {
//     console.log("No borders");
//   }

// Arrays
const friends = ["Michael", "Stefan", "Damon"];
console.log(friends);
console.log(friends[2]);
console.log(friends[0]);
console.log(friends.length - 1);
console.log(friends.length);
console.log(friends[friends.length - 1]);
console.log(friends[friends.length]);
friends[0] = "Elena";
console.log(friends);

const firstName = "Katherine";
const Katherine = [firstName, "Pierce", 2009 - 1864, "vampire", friends];
console.log(Katherine);
console.log(Katherine.length);

// Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const years = [1990, 1985, 1975, 2005, 2019];

//   const age1 = calcAge(years[0]);
//   const age2 = calcAge(years[1]);
//   const age3 = calcAge(years[years.length - 1]);
//   console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);

let names = new Array("Chan", "Chin", "Dan", "Den");

console.log(names);
document.write(names);
document.write(names[2]);
console.log(names[1]);

names[4] = "jan";
document.write(names);
console.log(names);
document.write("<br>");
document.write("<br>");
document.write("<br>");

// Array Traversal using For Loop
for (let v = 0; v < names.length; v++) {
  document.write(names.length);
  document.write(names[v]);
  document.write("<br>");
}
document.write(names.length);

// Destructuring Arrays
const ars = [1, 2, 3];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = ars;
console.log(x, y, z);

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function
console.log(restaurant.order(2, 0));

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested Destructuring
const nested = [2, 4, [5, 6]];
console.log(nested);
const [i, , j] = nested;
console.log(i, j);

// Destructuring Inside Destructuring
const [k, , [l, m]] = nested;
console.log(k, l, m);

// Default Values
const [p1, q1, r1] = [8, 9];
console.log(p1, q1, r1);

const [t = 1, u = 2, v = 3] = [2, 6];
console.log(t, u, v);

// Looping Arrays (FOR-OF Loop)
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const item of menu.entries()) {
  console.log(item);
}

console.log(menu.entries()); // Later in the Course
console.log([...menu.entries()]);

for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}

// ES6
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
