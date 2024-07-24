// 1
setInterval(function realTimeClock(){
  let currentDate = new Date();
  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  let seconds = currentDate.getSeconds();
  console.log(hours, ":", minutes, ":", seconds);
}, 1000);

// 2
function calculateCircleArea(radius){
  let area = Math.PI * radius ** 2;
  console.log(area);
}

calculateCircleArea(20);

// 3
function convertToKebabCase(str){
  let kebabCase = str.replaceAll(" ", "-");
  console.log(kebabCase);
}

convertToKebabCase("hello i am sandro");

// 4
let second = 60;
let minute = 5;

let countdown = setInterval(function () {
  second--;
  if (second === 0) {
    minute--;
    second = 60;

    if (minute === 0) {
      clearInterval(countdown);
      console.log("ding ding");
    }
  }
}, 1000);

// 5
function getDayOfWeek(date){
  let daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let dayOfWeek = daysOfWeek[date.getDay()];
  console.log(dayOfWeek);
}

getDayOfWeek(new Date())

// 6
let currentDate = new Date();
let year = currentDate.getFullYear();
let birthDate = 2010;
let age = year - birthDate

console.log("you are", age, "years old")
