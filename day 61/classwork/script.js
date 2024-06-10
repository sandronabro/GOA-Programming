console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

function compareNums() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    let andOperation = (num1 > 18) && (num2 > 18);
    let orOperation = (num1 > 18) || (num2 > 18);

    console.log(andOperation);
    console.log(orOperation);
}

let sunnyWeather = true;
let rainyWeather = false;

if (sunnyWeather && rainyWeather) {
    console.log("შეგიძლიათ გახვიდეთ გარეთ სათამაშოდ");
} else {
    console.log("თქვენ არ შეგიძლიათ გარეთ გასვლა სათამაშოდ");
}

let hotWeather = true;
let coldWeather = false;

if (isHot || isCold) {
    console.log("შეგიძლიათ მიირთვთ ნაყინი");
} else {
    console.log("ნაყინის მიღება არ შეიძლება");
}