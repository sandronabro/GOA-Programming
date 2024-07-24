// cw1
let date = new Date();

date.getFullYear();
date.getMonth();
date.getDate();
date.getHours();
date.getMinutes();
date.getSeconds();
date.getMilliseconds();
date.getTime();
date.getTimezoneOffset();
date.getDay();
date.getUTCDate();
date.getUTCFullYear();


date.setDate(15);
date.setFullYear(2020);
date.setMonth(2);
date.setDate(15);
date.setHours(12);
date.setMinutes(40);
date.setSeconds(50);
date.setMilliseconds(20);

console.log(date)

// cw2
setInterval(function(){
    let date = new Date();
    console.log(date.toString())
}, 1000)

// cw3
let seconds = 0;
let minutes = 0;
let hours = 0;

setInterval(function(){
    seconds++
    if(seconds === 60){
        seconds = 0;
        minutes++

        if(minutes === 0){
            minutes = 0;
            hours++
        }
    }

    console.log(hours, minutes, seconds)
}, 1000)

// cw 4
let minute = 5;
let second = 60;

const timer = setInterval(function(){
    second--
    if(second === 0){
        minute--
        second = 60

        if(minute === 0){
            clearInterval(timer);
            console.log("Times up")
        }
    }

    console.log(minute,second)
},1000)