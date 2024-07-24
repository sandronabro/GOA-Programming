let global = "Hello"
console.log(global)

function func(){
    let local = "Hi"

    if(true){
        let nested = "Hey"
        console.log(nested)
    }

    console.log(local)
}

func()



