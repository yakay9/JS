//Task 1

let x = 20;
let y = 58;
let z = 42;

let sum = x + y + z;
console.log(sum);

//Task 2 //////////////////////////////////

let secondsInMinute = 60;
let minutesInHour = 60;
let hoursInDay = 24;
let daysInYear = 365;

let myAgeInYears = 45; //  возраст - 45 лет

let myAgeInSeconds = myAgeInYears * daysInYear * hoursInDay * minutesInHour * secondsInMinute;
console.log(myAgeInSeconds);

//Task 3 //////////////////////////////////

//1 способ
let count = 42;
let userName = '42';

let countAsString = String(count);
let userNameAsNumber = parseInt(userName);

console.log(countAsString);
console.log(userNameAsNumber);

//2 способ
let count = 42;
let userName = '42';

let countAsString = count + '';
let userNameAsNumber = +userName;

console.log(countAsString);
console.log(userNameAsNumber);

//Task 4 //////////////////////////////////

let a = 1;
let b = 2;
let c = "белых медведей";

let result = a.toString() + b.toString() + " " + c;
console.log(result);

//Task 5 //////////////////////////////////

let word1 = "доступ";
let word2 = "морпех";
let word3 = "наледь";
let word4 = "попрек";
let word5 = "рубило";

let lengthWords = word1.length + word2.length + word3.length + word4.length + word5.length;
console.log(lengthWords);

//Task 6 //////////////////////////////////

let numberVariable = 42;
let stringVariable = "Hello, world!";
let booleanVariable = true;

console.log(`Variable: numberVariable has type: ${typeof numberVariable}`);
console.log(`Variable: stringVariable has type: ${typeof stringVariable}`);
console.log(`Variable: booleanVariable has type: ${typeof booleanVariable}`);

//Task 7 //////////////////////////////////

let name = prompt("Введите ваше имя:");
let age = prompt("Введите ваш возраст:");

console.log("Имя пользователя:", name);
console.log("Возраст пользователя:", age);

//Task #1 ///
Поменяйте значение переменных местами не создавая дополнительной переменной:

    ```javascript
    let a = 4
    let b = 3
```
мне не понятна логика, (как догодываться), задачу нагуглил
let a = 4;
let b = 3;

a = a + b; // a = 7
b = a - b; // b = 4
a = a - b; // a = 3

console.log("a =", a); // Выведет: a = 3
console.log("b =", b); // Выведет: b = 4

//Task #2///
В данном послании скрыт шифр! Чтобы его разгадать нам нужно соединить все вторые символы слов!

    ```javascript
    let codeWord1 = "обернись";
    let codeWord2 = "неужели";
    let codeWord3 = "огурцы";
    let codeWord4 = "липкие";
    let codeWord5 = "?!";
```
Создайте переменную **`cipher`** и поместите туда необходимые символы

**************************
переменная `cipher` 

let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";

let cipher = codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1];
console.log(cipher);

беги!
