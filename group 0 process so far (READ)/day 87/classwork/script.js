const isAnyRed = carArr.some(function(value){
    return value.color.toLowerCase() === "red";
})
console.log(isAnyRed)

function manualSome(arr, func){
    for (let i=0; i<arr.length; i++){
        const isTrue = func(arr[i])

        if (isTrue){
            return true
        }
    }

    return false
}
console.log(manualSome(carArr, function(value){
    return value.color.toLowerCase() === "red"
}))



console.log(carArr.findIndex(function(value){
    return value.color.toLowerCase() === "red"
}))

function manualFindIndex(arr, func){
    for (let i=0; i<arr.length; i++){
        const isTrue = func(arr[i])

        if (isTrue){
            return i
        }
    }

    return -1
}
console.log(manualFindIndex(carArr, function(value){
    return value.color.toLowerCase() === "red"
}))
