// cw1
let number = [2, 5, 3, 6, 4, 7, 9, 12, 15];

for (let i = 0; i < number.length; i++) {
  if (number[i] % 2 === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}

// cw2
let number1 = [2, 5, 3, 6, 4, 7, 9, 12, 15];
let number2 = [];

for (let i = 0; i < number1.length; i++) {
  if (number1[i] % 2 === 0) {
    number2.push(number1[i]);
  }
}

console.log(number2);

// cw3
let list = [];
let sums = 0;

for (let i = 0; i <= 100; i++) {
  if (i % 5 === 0) {
    list.push(i);
    sums += i;
  }
}

// cw4
let nums = [];
for (let i = 0; i < 10; i++) {
  let input = Number(prompt(`enter ${i + 1}th number:`));
  nums.push(input);
}

let sum = 0;
for (let num of nums) {
  sum += num;
}

let product = 1;
for (let num of nums) {
  product *= num;
}

let count = numbers.length;
let squareRoots = [];
for (let num of nums) {
  squareRoots.push(Math.sqrt(num));
}

console.log(nums);
console.log(sum);
console.log(product);
console.log(count);
console.log(squareRoots);

// cw5
function Ticket(name, lastname, age, ticketCode){
  this.name = name;
  this.lastname = lastname;
  this.age = age;
  this.ticketCode = ticketCode
}

let tickets = []

let ticket = Number(prompt("how many tickets do you want?: "));

for(let i = 0; i < ticket; i++){
  let name = prompt("enter name for each person: ")
  let lastname = prompt("enter last name for each person: ")
  let age = prompt("enter age for each person")
  let ticketCode = Math.round(Math.random() * 100000)

  let ticketInfo = new Ticket(name, lastname, age, ticketCode)

  tickets.push(ticketInfo)
}

console.log(tickets)