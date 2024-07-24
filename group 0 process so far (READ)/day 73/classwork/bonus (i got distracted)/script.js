const child = document.getElementById("child-container");

let topPosition = 0;
let leftPosition = 0;
let topPosition2 = 1;
let leftPosition2 = 1;

const moveUpDown = setInterval(function() {
    child.style.top = topPosition + "px";
    topPosition += topPosition2;

    if (topPosition >= 970 || topPosition <= 0) {
        topPosition2 = -topPosition2;
    }
}, 1);

const moveLeftRight = setInterval(function() {
    child.style.left = leftPosition + "px";
    leftPosition += leftPosition2;

    if (leftPosition >= 1750 || leftPosition <= 0) {
        leftPosition2 = -leftPosition2;
    }
}, 1);
