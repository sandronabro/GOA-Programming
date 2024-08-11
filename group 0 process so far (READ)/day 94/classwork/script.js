const pantsCount = 100;

const executerFunction = (resolve, reject) => {
    if (pantsCount > 0){
        setTimeout(() => {resolve("can buy")}, 1000)
    } else{
        setTimeout(() => {reject("cant buy")}, 1000)
    }
}
