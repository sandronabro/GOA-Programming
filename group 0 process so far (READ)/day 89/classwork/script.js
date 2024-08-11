const numbers = [1, 5, 8, 4, 9, 3, 10];
const lastPrime = numbers.lastIndexOf(function(value){
    let count = 0;
    for (let i=2; i<= value; i++){
        if (count > 2) return false;
        if (value%i==0) count ++;
        return true
    }
})

console.log(lastPrime)