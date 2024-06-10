function printUserInput() {
    let name = document.getElementById("name").value;
    let id = document.getElementById("id").value;

    console.log("Name:", name);
    console.log("ID:", id);

    document.getElementById("bankForm");
}

let num1 = prompt("enter first number: ");
let num2 = prompt("enter second number: ");

let isGreater = num1 > num2;
if (num1 > num2) {
    console.log(num1 + " is greater than " + num2 + ": true");
} else {
    console.log(num1 + " is greater than " + num2 + ": false");
}


const agreed = confirm("do you agree?");

if (agreed) {
    console.log("you agreed");
} else {
    console.log("you didnt agree.");
}