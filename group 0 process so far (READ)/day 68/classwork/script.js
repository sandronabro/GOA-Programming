// cw1
const p1 = document.getElementById("p1")
console.log(p1)

const className = document.getElementsByClassName("activate")
console.log(className)

const tag = document.getElementsByTagName("p")
console.log(tag)

// cw2
const myDiv = document.getElementById("myDiv");
const btn = document.getElementById("btn");

myDiv.style.flexDirection = "row";

btn.addEventListener("click", function(){
    const flexDirection = myDiv.style.flexDirection

    if(flexDirection == "row"){
        myDiv.style.flexDirection = "column";
    } else{
        myDiv.style.flexDirection = "row";
    }
});

// cw3
const p = document.getElementById("p1")
const div = p.parentElement;
div.style.backgroundColor = "red"

// cw4
const change = document.getElementById("p2")

change.className = "class"
change.innerHTML = "new txt wohoo"
change.style.color = "blue"
/// ა.შ

// cw 5
const pChanger = document.getElementsByClassName("p")

for(i = 1; i < pChanger.length; i++){
    const paragraph = pChanger[i]
    paragraph.textContent += " jalaghonia"
}