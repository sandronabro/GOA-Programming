const form = document.getElementById("form");

const accounts = [];

const Account = function (username, email, password, repeatPassword) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.repeatPassword = repeatPassword;
};

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const usernameValue = form.elements.username.value;
    const emailValue = form.elements.email.value;
    const passwordValue = form.elements.password.value;
    const repeatPasswordValue = form.elements.repeatPassword.value;

    if (passwordValue != repeatPasswordValue) {
        alert("password doesnt match")
    } else {
        const newAccount = new Account(usernameValue, emailValue, passwordValue, repeatPasswordValue);

        accounts.push(newAccount);

        console.log(accounts);
        alert("success")
    }
});