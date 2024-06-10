function changeDiv() {
    const color = document.getElementById("color").value;
    const width = document.getElementById("width").value;
    const height = document.getElementById("height").value;
    const text = document.getElementById("text").value;
    const myDiv = document.getElementById("myDiv");
    const paragraph = myDiv.querySelector("p");

    myDiv.style.backgroundColor = color;
    myDiv.style.width = width + "px";
    myDiv.style.height = height + "px";
    paragraph.textContent = text;
}


const person = {
    name: "sandro jalaghonia",
    age: 14,
    address: {
        city: "poti",
        region: "samegrelo",
        country: "georgia"
    },
    job: {
        title: "programmer",
        company: "IT STep"
    }
};

person.address.city = "GOA LAND";
person.job.company = "GOA";

console.log(person);