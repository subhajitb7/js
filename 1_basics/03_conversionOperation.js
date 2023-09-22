let age = "20"
//console.log(age)
//console.log(typeof age) //string
//console.log(typeof(age)) //string

let ageNumber = Number(age)
// console.log(ageNumber)
// console.log(typeof ageNumber) //number

/*  string to number conversion
    "20" => 20
    "20sb" => NaN
*/

let isLoggedIn = " "
// console.log(isLoggedIn)
// console.log(typeof isLoggedIn) 

let isLoggedInBoolean = Boolean(isLoggedIn)
// console.log(isLoggedInBoolean)
// console.log(typeof isLoggedInBoolean) //boolean

/*  string/number to boolean conversion
    1 => true
    "1" => true
    "sb" => true
    " " => true
    "" => false
    null => false
*/

let randNumber = 45
// console.log(randNumber)
// console.log(typeof randNumber) //number

let randNumberString = String(randNumber)
// console.log(randNumberString)
// console.log(typeof randNumberString) //string

/*  number to string conversion
    20 => "20"
*/

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion