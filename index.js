let hello = "";
hello = () =>{
  return "hello all!";
}
document.getElementById("demo0").innerHTML = hello();

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age(x) {
    return x - this.year;
  }
}

const date = new Date();
let year = date.getFullYear();

const myCar = new Car("Ford", 2014);
document.getElementById("demo1").innerHTML=
"My car is " + myCar.age(year) + " years old.";

document.getElementById("demo2").innerHTML = "'John' is " + typeof "John" + "<br><br>" +"('John' + 'Doe') is " + typeof ("John" + "Doe") + "<br><br>" +"3.14 is " + typeof 3.14 + "<br><br>" +"33 is " + typeof (33 + 66) + "<br><br>" +
"(33 + 66) is " + typeof 33 + "<br><br>" +
"NaN is " + typeof NaN + "<br><br>" +
"true is " + typeof true + "<br><br>" +
"false is " + typeof false + "<br><br>" +
"1234n is " + typeof 1234n + "<br><br>" +
"Symbol() is " + typeof Symbol() + "<br><br>" +
"x is " + typeof x;

const cars = ["bmw","volvo","ford","benz","audi"];
let text = "";
for(let i = 0; i < cars.length; i++){
    text += cars[i] + "<br>";
}
document.getElementById("demo3").innerHTML = text;

const numbers = [45,4,9,16,25];
let txt = "";
for (let x in numbers){
    txt += numbers[x] + "<br>";
}
document.getElementById("demo4").innerHTML = txt;

let txxt = "";
let i = 0;
while (i < 10){
    txxt += "<br>The number is " + i;
    i++;
}
document.getElementById("demo5").innerHTML =  txxt;

const letters = new Set();
const a ="a";
const b ="b";
const c ="c";
letters.add(a);
letters.add(b);
letters.add(c);
document.getElementById("demo6").innerHTML = "the set has " + letters.size + "values.";