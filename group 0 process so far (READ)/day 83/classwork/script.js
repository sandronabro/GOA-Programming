

const numbers = [1, 2, 3, 4, 5]
for (let i=0; i<numbers.length; i++){
    console.log(numbers[i])
}

let result = 0;

numbers.forEach(function(value){
    result += value
})
console.log(result)


function manualForEach(array, func1){
    for (let i=0; i<array.length; i++){
        func1(array[i])
    }
}

manualForEach(numbers, function(value){
    console.log(value)
})


function manualReduce(arr, func, startingValue){
    let result = startingValue;

    for (let i=0; i<arr.length; i++){
        result = func(result, arr[i])
    }

    return result
}
