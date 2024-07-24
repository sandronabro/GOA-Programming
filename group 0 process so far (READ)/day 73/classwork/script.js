//cw 1
// const child = document.getElementById("child-container");

// let position = 0;
// let position2 = 1;

// const moveRight = setInterval(function(){
//     child.style.left = position + "px";
//     position += position2

//     if (position >= 300){
//         position2 += -1;
//     }else if(position == 0){
//         clearInterval(moveRight)
//     }
// }, 1);

//cw 2
const child = document.getElementById("child-container");

let position = 0;
let position2 = 1;

const moveRight = setInterval(function(){
    child.style.left = position + "px";
    position += position2

    if (position >= 300){
        position2 += -1;
    }else if(position == 0){
        const moveDown = setInterval(function(){
            child.style.top = position + "px";
            position -= position2
        
            if (position >= 300){
                position2 -= -1;
            }else if(position == 0){
                clearInterval(moveDown)
            }
        }, 1)
        clearInterval(moveRight)
    }
}, 1);


