function performOperations() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    const sum = num1 + num2;
    const difference = num1 - num2;
    const times = num1 * num2;
    const devision = num1 / num2;


    console.log(sum);
    console.log(difference);
    console.log(times);
    console.log(devision);

}

function calculateSum() {
    const start = parseFloat(document.getElementById("start").value);
    const end = parseFloat(document.getElementById("end").value);
    const sum = sumBetween(start, end);
    console.log(start + end + sum);
}

function sumOfEven() {
    const start = parseFloat(document.getElementById("start").value);
    const end = parseFloat(document.getElementById("end").value);
    const sum = sumEvenBetween(start, end);
    console.log("Sum of all even numbers between " + start + " and " + end + " " + sum);
  }

function sumBetweenNums(start, end) {
    return start + sumBetween(start + 1, end);
}


function sumEvenBetween(start, end) {
    if (start > end) {
      return 0;
    }
    if (start % 2 === 0) {
      return start + sumEvenBetween(start + 2, end);
    }
    return sumEvenBetween(start + 1, end);
  }