// if (1 > 200){
//     console.log("wrongg")
// } else  if (200 > 1){
//     console.log("CORRECT")
// } else{
//     console.log("um")
// }

let text = document.getElementById("myText");

let userInput = prompt("enter number boya:"); 

if (userInput > 10) {
  text.textContent = "goa";
} else {
  text.textContent = "no way, bro";
}