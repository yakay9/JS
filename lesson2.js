// Task 1

let variable1 = true;
let variable2 = false;
let variable3 = 17;
let variable4 = undefined;
let variable5 = null;

console.log(typeof variable1);
console.log(typeof variable2);
console.log(typeof variable3);
console.log(typeof variable4);
console.log(typeof variable5);

//***
boolean
boolean
number
undefined
object

//Task 2
let height = 15;
let width = 20;

if (height > width) {
    console.log("Наибольшее число: " + height);
} else if (width > height) {
    console.log("Наибольшее число: " + width);
} else {
    console.log("Числа равны");
}
//Task 3
for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}
//Task 4
let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;

let shouldGoToWork = (key && documents && pen) && (apple || orange);
console.log(shouldGoToWork);

//Task 5
let number = prompt("Введите число:");

if (number % 3 === 0 && number % 5 === 0) {
    console.log("FizBuz");
} else if (number % 3 === 0) {
    console.log("Buz");
} else if (number % 5 === 0) {
    console.log("Fiz");
} else {
    console.log("Число не делится без остатка ни на 3, ни на 5");
}


