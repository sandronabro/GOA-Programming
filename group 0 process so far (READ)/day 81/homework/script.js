  
const manualMap = function(array, subFunc){
    const resArr = []

    for (let i=0; i<array.length; i++){
        resArr.push(subFunc(array[i]))
    }

    return resArr
}

const secondDegree = function(element){
    return element**2
}

console.log(manualMap([1, 2, 3, 4, 5], secondDegree))


  
const manualFilter = function(array, subFunc){
    const resArr = []

    for (let i=0; i<array.length; i++){

        if (subFunc(array[i])){
            resArr.push(array[i] ** 3)
        }

    }

    return resArr
}

console.log(manualFilter([1, 21, 2, 22, 3, 23, 4, 24, 5, 25], function(element){
    return element >= 20
}))


  
const namesArr = [" sandro", "luka", " sandro", "dachi"]
console.log(namesArr.map((element) => element.toUpperCase()))


  
const namesArr2 = ["luke", "gio", " sandro", "js"]
console.log(namesArr2.filter(function(element){
    return element[0] == element[0].toUpperCase() && element.length <= 5
}))
