
const manualMap = function(arr, subFunc){
    const resArr = []

    for (let i = 0; i<arr.length; i++){
        resArr.push(subFunc(arr[i]))
    }

    return resArr
}

const degree = manualMap([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], function(item){
    return item**2
})

console.log(degree)



const students = [
    {
        name: "David",
        grade: 80
    },

    {
        name: "Andria",
        grade: 55
    },

    {
        name: "Tobi",
        grade: 65
    }
]

const manualFilter = function(arr, subFunc){
    const newArray = [];

    for (let i=0; i<arr.length; i++){
        if (subFunc(arr[i])){
            newArray.push(arr[i].name)
        }
    }

    return newArray;
}
