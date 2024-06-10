function operation(str, num) {
    console.log(str + num);
    console.log(str - num);
    console.log(str * num);
    console.log(str / num);
}

function compareNumbers(num1, num2) {
    console.log(num1 > num2);
    console.log(num1 >= num2);
    console.log(num1 < num2);
    console.log(num1 <= num2);
    console.log(num1 == num2);
    console.log(num1 != num2);
}


function parseElement(element) {
    console.log(parseInt(element));
    console.log(parseFloat(element));
}

parseElement("123.45");
parseElement("100");
parseElement("abc");


function changeColor() {
    document.getElementById('myButton').style.backgroundColor = 'red';
}