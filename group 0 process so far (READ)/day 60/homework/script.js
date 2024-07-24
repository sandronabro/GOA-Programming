// hw 1. messing around with objects
const me = {
    name: "sandro",
    age: 14,
    city: "poti",
    greet: function(){
        console.log("Welcome back, " + me.name)
    }
};

const school ={
    student: {
        name: "sandro",
        age: 14
    }
}

const random = {
    name: "sandro",
    age: 14,
    city: "poti",
    greet: function(){
        console.log("Welcome back, " + me.name)
    }
}

const calculator ={
    add: function(num1, num2){
        return num1 + num2
    },
    substract: function(num1, num2){
        return num1 - num2
    },
    multiply: function(num1, num2){
        return num1 * num2
    },
    devide: function(num1, num2){
        return num1 / num2
    },
}

console.log(me == random)

me.age = 15;
me.country = "georgia";


console.log(me.country);
console.log(me.age);
console.log(me.name);
me.greet();


console.log(school.student.name);
console.log(school.student.age);

console.log(calculator.add(5,8));
console.log(calculator.substract(5,8));
console.log(calculator.multiply(5,8));
console.log(calculator.devide(5,8));

console.log(me)


// hw2. making a username and password system
const form = document.getElementById("form");
const user = {}

form.addEventListener("submit", function(e){
    e.preventDefault();

    const username = form.elements.username.value;
    const password = form.elements.username.value;

    if(username.lenght >= 5){
        user.username = username
    } else{
        alert("Username must be 5 characters long")
    }

    if(password.lenght >= 8){
        user.password = password
    } else{
        alert("Password must be 8 characters long")
    }

    console.log(user)
})