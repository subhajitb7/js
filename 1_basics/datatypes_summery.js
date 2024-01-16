//Datatypes in JS

//JS is a dynamically typed language
//This means that the same variable can be used to hold different data types

/*
#Primitive
    String, Number, Boolean, BigInt, Symbol, null, undefined
*/

//String
let fName = "Subhajit"
let age = "22"
//console.log(typeof fName)
//console.log(typeof age)

//Number
const score = 100
const scoreValue = 99.7
//console.log(typeof score)
//console.log(typeof scoreValue)

//Boolean
let isLoggedIn = true
//console.log(typeof isLoggedIn)

//BigInt
const bigNumber = 37463762370654747043792500357
//console.log(typeof isLoggedIn)

//Symbol
let id = Symbol('123')
let anotherId = Symbol('123')
//console.log(id == anotherId)
//console.log(id === anotherId)

//null
let outSideTemp = null
//console.log(typeof outSideTemp)

//undefined
let userEmail
//console.log(typeof userEmail)



/* 
#Refernce (Non-Primitive)
    Array, Objects, Function
*/

//Array
const success = ["Habit", "Consistency", "Discipine"]
//console.log(typeof success)

//Object
let myobj = {
    name: "Subhajit",
    age: 22,
}
//console.log(typeof myobj)

//Function
const myfunc = function (){
    console.log("Hello World")
}
console.log(typeof myfunc)

// https://262.ecma-international.org/5.1/#sec-11.4.3

//--------------------------------------------------------

// Stack (Primitive), Heap (Non-Primitive)

let ytName = "Subhajit"

let anotherName = ytName
anotherName = "Bag"

console.log(ytName)
console.log(anotherName)

let userOne = {
    email: "subhajit@google.com",
    upi: "users@ybl"
}

let userTwo = userOne

userTwo.email = "Subhajit@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)