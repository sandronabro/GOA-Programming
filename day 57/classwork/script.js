let myInfo = {
    name: "Sandro",
    email: "sandrojalaghonia707@gmail.com",
    age: "14",
    work: {
        money: 0,
        workTime: "24/7"
    }
};

console.log(myInfo.name);
console.log(myInfo.email);
console.log(myInfo.age);
console.log(myInfo.work.money);
console.log(myInfo.work.workTime);
let newMoney = myInfo.work.workTime = 1000
console.log(newMoney)


function divChanger() {
    let bgColor = document.getElementById("bgColor").value;
    let width = document.getElementById("width").value;
    let height = document.getElementById("height").value;
    let div = document.getElementById("div");
    div.style.backgroundColor = bgColor;
    div.style.width = width + "px";
    div.style.height = height + "px";
}