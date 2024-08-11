const person = {
    name: "sandro",
    surname: "jala"
}
const employee = Object.assign(person, {position: "Mentor"});
console.log(employee)

const obj1 = {name: "a", surname: "b"}
const obj2 = {age: 20, field: "Programming"}
const obj3 = Object.assign(obj1, obj2)
console.log(obj3)

const extend = function(objectOne, objectTwo){
    return Object.assign(objectOne, objectTwo);
}
console.log(extend({name: "sandro"}, {surname: "jala"}))


const manualAssign = function(target, ...sources){
    for (let source of sources){
        for (let key in source){
            target[key] = source[key]
        }
    }

    return target
}
console.log(manualAssign({}, {a: 10}, {b: 20}, {c: 30, d: 40}))

const manualAssign2 = function(target, ...sources){
    for (let obj of sources){
        for (let key of Object.keys(obj)){
            target[key] = obj[key]
        }
    }

    return target
}
console.log(manualAssign2({}, {a: 10}, {b: 20, h: 80}, {c: 30, d: 40}))
const [numberFour, , , , numberFive] = [1, 2, 3, 4, 5];
console.log(numberFour, numberFive)

function filterObjectsByAge(objects, minAge) {
    return objects.filter(({ age }) => age >= minAge);
}
const filteredUsers = filterObjectsByAge(users, 30);
console.log(filteredUsers);
