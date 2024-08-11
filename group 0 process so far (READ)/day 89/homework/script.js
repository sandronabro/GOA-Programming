function findSum(numbers){
    let sum = 0;
    for(const num of numbers){
        sum += num;
    }

    return sum
}
console.log(findSum([1, 2, 3, 4, 5, 6, 7]))


function countProp(obj){
    let count = 0;

    for (let i in obj){
        count ++;
    }

    return count
}
console.log(countProp({a: 10, b: 20, c: 30, d:40}))

function returnKeys(obj){
    let keys = [];

    for (key in obj){
        keys.push(key)
    }

    return keys
}
console.log(returnKeys({a: 10, b: 20, c: 30, d:40}))

