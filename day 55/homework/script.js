let num1 = prompt("Enter first number");
let num2 = prompt("Enter second number");

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);

function changeTextAndColor() {
    let text = document.getElementById("text").value;
    let color = document.getElementById("color").value;
    let result = document.getElementById("result");
    result.style.color = color;
    result.innerText = text;
}

function valuePrinter() {
    console.log(input1.value, input2.value, input3.value);
}