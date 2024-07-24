const img = document.getElementById("slider");
const nextBtn = document.getElementById("next")
const pervBtn = document.getElementById("perv")

const images = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEc9A_S6BPxCDRp5WjMFEfXrpCu1ya2OO-Lw&s"
    
]

let count = 0

nextBtn.addEventListener("click", function(){
    count += 1;

    if(count >= images.length){
        count = 0;
    }

    img.src = images[count];
})

pervBtn.addEventListener("click", function(){
    count -= 1

    if(count < 0){
        count = 0
    }

    img.src = images[count]
})