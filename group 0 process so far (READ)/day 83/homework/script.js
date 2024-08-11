let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let sum = 0;

numArr.forEach(function(value){
    sum += value
})

console.log(sum)



numArr.forEach(function(value, index){
    console.log(`Value: ${value}, index: ${index}`)
})


let product = numArr.reduce(function(accumulator, curValue){
    return accumulator *= curValue
})

console.log(product)

function manualForEach(iterable, func){
    let res = [];

    for (let i=0; i<iterable.length; i++){
        res.push(func(iterable[i]))
    }

    return res
}