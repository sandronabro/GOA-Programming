// hw1
const numArr = [1, 2, 3, -4, 5, 6]
console.log(numArr.every(function(value){
    return value > 0
}))


// hw2
const strArr = ["hello", "this", "is", ""]
console.log(strArr.every(function(value){
    return value != ""
}))


// hw3
const boolArr = [true, false, false, true, true, true]
console.log(boolArr.every(function(value){
    return value == true
}))


// hw4
console.log(numArr.every(function(value){
    return value %2 == 0
}))


// hw5
function manualEvery(iterable, userFunc){
    for (let i = 0; i<iterable.length; i++){
        if (! userFunc(iterable[i])){
            return false
        }
    }

    return true
}


// hw6
const gradeArr = [10, 5, 7, 8, 2, 2, 3, 4, 5]
console.log(gradeArr.some(function(value){
    return value >= 5
}))


// hw7
const userArr = [{role: "Civilian"}, {role: "Policeman"}, {role: "Nurse"}, {role: "Detective"}, {role: "Admin"}]
console.log(userArr.some(function(value){
    return value["role"].toLowerCase() == "admin"
}))


// hw8
const itemArr = [{overdue: false}, {overdue: false}, {overdue: false}, {overdue: false}, {overdue: true}]
console.log(itemArr.some(function(value){
    return value["overdue"] == true
}))


// hw9
const numArr2 = [10, 12, 13, 14, 15, 16, 17]
console.log(numArr2.some(function(value){
    return primeCheck(value)
}))

function primeCheck(num) {
    if (num <= 1) return false;

    for (let i = 2; i <= Math.floor(num ** 0.5); i++) {
        if (num % i === 0) {
            return false; 
        }
    }

    return true;
}


// hw10
function manualSome(iterable, userFunc){
    for (let i = 0; i<iterable.length; i++){
        if (userFunc(iterable[i])){
            return true
        }
    }

    return false
}


// hw11
console.log(numArr.find(function(value){
    return value < 0
}))


// hw12
const userArr2 = [{id: 1234}, {id: 2234}, {id: 3234}, {id: 4234}]
console.log(userArr2.find(function(value){
    return value.id == 3234
}))


// hw13
const taskArr = [{status: "complete", id: 1}, {status: "complete", id: 2}, {status: "incomplete", id: 1}, {status: "incomplete", id: 2}]
console.log(taskArr.find(function(value){
    return value.status === "incomplete"
}))


// hw14
const productArr = ["apple", "banana", "mango", "peach", "melon"]
console.log(productArr.find(function(value){
    return value === "peach"
}))


// hw15
function manualFind(iterable, user_value){
    for (let i = 0; i<iterable.length; i++){
        if (iterable[i] === user_value){
            return iterable[i]
        }
    }

    return undefined
}


// hw16
const numArr3 = [4, 5, 6, 7];
console.log(numArr3.findIndex(function(value){
    return primeCheck(value);
}));

function primeCheck(value){
    if (value <= 1){
        return false;
    }
    
    for (let i = 2; i <= Math.floor(Math.sqrt(value)); i++){
        if (value % i == 0){
            return false;
        }
    }
    
    return true;
}

// ima go to sleep and do the rest after