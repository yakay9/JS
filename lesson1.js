//Task 1 💻

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

