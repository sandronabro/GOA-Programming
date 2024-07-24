// countdown
let seconds = Number(prompt("enter timer: "))

while(seconds > 0){
    console.log(seconds)
    seconds--;
}

// prime numbers
let primeNumbers = [];

let number = 2;

while(number <= 50){
    let prime = true;
    let division = 2

    while(division <= Math.sqrt(number)){
        if(number % division === 0){
            prime = false;
            break
        }
        division++
    }
    if(prime){
        primeNumbers.push(number);
    }
    number++
}

console.log(primeNumbers)

// object??
let person = {
    name: "sandro",
    lastname: "jalaghonia",
    age: 14,
}

console.log(`your name is ${person.name}`)
console.log(`your last name is ${person.lastname}`)
console.log(`your age is ${person.age}`)

// factoral
// tbc

