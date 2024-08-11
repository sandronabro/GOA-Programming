const form = document.getElementById("form1");
const dataBase = [];

const form2 = document.getElementById("form2");
const dataBase2 = [];

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = form.elements["input1"].value;
    const surname = form.elements["input2"].value;
    const mail = form.elements["input3"].value;
    const password = "defaultPassword"; 

    dataBase.push(new UserInfo(name, surname, mail, password));
    console.log(dataBase);

    form.elements["input1"].value = "";
    form.elements["input2"].value = "";
    form.elements["input3"].value = "";

    form.style.opacity = "0";
    form2.style.opacity = "1";
});

form2.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = form2.elements["input4"].value;
    const surname = form2.elements["input5"].value;
    const mail = form2.elements["input6"].value;
    const password = "defaultPassword";

    dataBase2.push(new UserInfo(name, surname, mail, password));
    console.log(dataBase2);

    form2.elements["input4"].value = "";
    form2.elements["input5"].value = "";
    form2.elements["input6"].value = "";

    checkFunc(dataBase, dataBase2);

    form.style.opacity = "1";
    form2.style.opacity = "0";
});
