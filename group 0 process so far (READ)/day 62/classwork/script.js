// cw 1
const person = {
    name: "Sandro",
    age: 14,
    greet: function(){
        console.log("Welcome back, " + person.name)
    },
    about: {
        height: 180,
        weight: 70,
    }
};

console.log(person);

// cw2
const primitiveNumber = 7;

// cw 3
const print = console.log;
print("hello")

//cw 4
function flight(attitude, status){
    this.attitude = attitude;
    this.status = status
}

const boeing273 = new flight(10000, "flying");

console.log(boeing273)
