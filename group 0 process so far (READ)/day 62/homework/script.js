// 2) გააკეთეთ კონსტრუქტორი რომელიც შეგიქმნით სკოლის მოსწავლის id_ს რომელიც შედგება (სახელი გვარი ქულა)~ 
// 3) გააკეთეთ 5 მაგალითი კონსტრუქტორის და ნამუშევარი ატვირთეთ github ზე
// 4) კარგად გადაიმეორეთ რას ნიშნავს heap and stack და შემდეგ გაკვეთილზე დაგისვამთ შეკითხვებს ამასთან დაკავშირებით

// hw 1
function student(name, surname, score){
    this.name = name;
    this.surname = surname;
    this.score = score;
}

const id = new student("sandro", "jalaghonia", 10)

console.log(id)

// hw 2
function car(model, engine, year){
    this.model = model;
    this.engine = engine;
    this.year = year;
}

const bmw = new car("bmw", "v8", 2015)

console.log(bmw)

function person(name, age, height){
    this.name = name;
    this.age = age;
    this.height = height;
}

const sandro = new person("sandro", 14, 180)

console.log(sandro)

function book(title, pages, author){
    this.title = title;
    this.pages = pages;
    this.author = author;
}

const book = new book("The Great Gatsby", 137, "F. Scott Fitzgerald")

console.log(book)

// i cant think of new things

// h3
console.log("ok")
