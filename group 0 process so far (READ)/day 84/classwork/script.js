
function invert(array) {
   let res = [];
  
  for (let i=0; i<array.length; i++){
    res.push(array[i] * -1)
  }
  
  return res
}

const binaryArrayToNumber = arr => {
  let binaryString=""
  for (let i=0; i<arr.length; i++){
    binaryString+=String(arr[i])
  }
  let decimalNumber = 0;
    for (let i = 0; i < binaryString.length; i++) {
        if (binaryString[i] === '1') {
            decimalNumber = decimalNumber * 2 + 1;
        } else if (binaryString[i] === '0') {
            decimalNumber = decimalNumber * 2;
        } 
    }
    return decimalNumber;
};

const areaOrPerimeter = function(l , w) {
  if (l==w){
    return l**2
  }
  return 2*(l+w)
};

function twiceAsOld(dadYearsOld, sonYearsOld) {
  let count = dadYearsOld - (sonYearsOld*2);
  
  if (count < 0){
    return count*(-1)
  }
  return count
}

function oddCount(n){
  return parseInt(n/2)
}

function rowSumOddNumbers(n) {
	return n**3
}

var isAnagram = function(test, original) {
  return test.toLowerCase().split("").sort().join("") === original.toLowerCase().split("").sort().join("")
};

function sumDigits(number) {
  number = Math.abs(number);
  let res = 0
  
  for (let i=0; i<String(number).length; i++){
    res += Number(String(number)[i])
  }
  
  return res
}

function fakeBin(x){
    return x.split('').map(function(char){
      if(parseInt(char) < 5) return '0';
      else return '1';
    }).join('');
}

// dont know rest lol