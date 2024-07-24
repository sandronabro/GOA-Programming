function Person(name, lastname, age){
    this.name = name;
    this.lastname = lastname;
    this.age = age;

    this.about = function(){
        console.log(`hi ${this.name} ${this.lastname}, you are ${this.age} years old`);
    }
}

const person = new Person("sandro", "jalaghonia", 14);
person.about();

console.log(person);
