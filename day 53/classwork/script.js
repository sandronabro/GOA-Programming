// // cw1

// const firstParagraph = document.getElementById("p1");
// console.log(firstParagraph);

// const lastParagraph = document.getElementById("p2");
// console.log(lastParagraph);



// // cw2
// const myInfo = {
//     name: "Sandro",
//     surname: "Jalaghonia",
//     age: 14
// }

// const myFriendInfo = {
//     name: "Andria",
//     surname: "Tvalavadze",
//     age: 14
// }



// // cw3
// function replaceText(){
//     const firstParagraph = document.getElementById("p1").textContent;
//     const secondParagraph = document.getElementById("p2").textContent;
    
//     document.getElementById("p1").textContent = secondParagraph;
//     document.getElementById("p2").textContent = firstParagraph;
// }



function add(a, b){
    return a + b;
}

function multiply(a, b){
    return a * b;
}


function greet(name){
    return "hello " + name;
}


function mathOperation(a, b, c){
    return (a + b) * c;
}

function even(a){
    return a % 2 == 0;
}

console.log(add(2, 5)); 
console.log(multiply(3, 7));
console.log(greet("Sandro"));
console.log(mathOperation(2, 5, 8));
console.log(even(9)); 


const car = {
    name: "BMW",
    model: "M4 GTS",
    year: 2015,
    start: function() {
        console.log("started");
    },
    break: function() {
        console.log("breaked");
    }
};

car.start();
car.break();

const myInfo = {
    name: "Sandro",
    surname: "Jalaghonia",
    infoName: function(){
        console.log("my name is " + myInfo.name + "my surname is " + myInfo.surname)
    }
}

myInfo.infoName();

