// function myFunction(){
//     document.getElementById("p1").textContent = document.getElementById("p3").textContent;
//     document.getElementById("p3").textContent = document.getElementById("p2").textContent;
//     document.getElementById("p2").textContent = document.getElementById("p1").textContent;
// }

// function devide(){
//     document.getElementById("myNumber").innerHTML--;
// }

// function reset(){
//     document.getElementById("myNumber").innerHTML = 0;
// }

// function plus(){
//     document.getElementById("myNumber").innerHTML++;
// }


// function green(){
//     document.getElementById("p1").style.color = "green";
//     document.getElementById("p2").style.color = "green";
//     document.getElementById("p3").style.color = "green";
// }

// function red(){
//     document.getElementById("p1").style.color = "red";
//     document.getElementById("p2").style.color = "red";
//     document.getElementById("p3").style.color = "red";
// }

// function yellow(){
//     document.getElementById("p1").style.color = "yellow";
//     document.getElementById("p2").style.color = "yellow";
//     document.getElementById("p3").style.color = "yellow";
// }


// const carInfo = {
//     brand: "BMW",
//     model: "M4 GTS",
//     year: 2010,
//     color: "gray",
//     engine: "M TwinPower Turbo ",
//     info: function(){
//         return this.brand + " " + this.model + ", " + this.year + ", " + this.color + ", " + this.engine;
//     }
// };

// console.log(carInfo.info());


// const movie1 = {
//     name: "Interstellar",
//     genre: "Space",
//     releaseYear: 2010
// };

// const movie2 = {
//     name: "Cars 2",
//     genre: "Cartoon",
//     releaseYear: 2008
// };

// console.log(movie1);
// console.log(movie2);


const calculator = {
    add: function (a, b){
        let result = a + b;
        console.log(result);
        return result;
    },
    subtract: function (a, b){
        let result = a - b;
        console.log(result);
        return result;
    },
    multiply: function (a, b){
        let result = a * b;
        console.log(result);
        return result;
    },
    divide: function (a, b){
        let result = a / b;
        console.log(result);
        return result;
    }
};

calculator.add(5, 3);
calculator.subtract(5, 3);
calculator.multiply(5, 3);
calculator.divide(5, 3);