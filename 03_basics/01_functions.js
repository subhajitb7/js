function myName() {
    console.log("Subhajit")
}
myName()

// function addTwoNumber(num1, num2) {
//     console.log(num1+num2)
// }
// addTwoNumber(3,4)

function addTwoNumber(num1, num2) {
    // let result = num1 +num2
    // return result
    return num1+num2
}
let result = addTwoNumber(3, 4)
// console.log("Result = ",result);

function userloggedin(userName = "Alvarez"){
// function userloggedin(userName){
    // if (userName === undefined){
    if (!userName) {
        return "Enter name"
    }
    return "${userName} logged in"
}
// console.log(userloggedin("Subhajit"))
// console.log(userloggedin())

function addCartPrice(...items) { // ... rest operator
    return items
}
// console.log(addCartPrice(654,46,446,45,4))


// pass Object as parameter
const userObj = {
    userName: "Subhajit Bag",
    age: 21
}

function user(userdetails) {
    console.log(`Username is ${userdetails.userName} and age is ${userdetails.age}`);
    // console.log(userdetails);
}
// user(userObj)
user({
    userName: "Alvarez",
    age: 30
})


// pass Array as parameter

let price = [199, 299, 599, 999]

function returnSecondPrice(getPrices) {
    return getPrices[2]
}
console.log(returnSecondPrice(price))
console.log(returnSecondPrice([500, 5002, 600]));