let count = 0;

const button = document.getElementById("click");
const counter = document.getElementById("counter");

const increse = function(){
    count++;
    counter.textContent = `counter: ${count}`;

    if (count === 10) {
        button.removeEventListener("click", increse);
    }
};

button.addEventListener("click", increse);
