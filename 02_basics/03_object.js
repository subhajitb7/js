// Objects litarals

// Declaring Symbol to Add as an Object Key
const sym = Symbol("Key1")

const  jsUser = {
    name: "Subhajit",
    age: 21,
    email: "subhajit@google.com",
    location: "Kolkata",
    isLoggedin: false,
    "full name": "Subhajit Bag", 
    [sym] : "mykey"
}

// console.log(jsUser);
// console.log(jsUser.name);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[sym]);

jsUser.email = "subhajit@outlook.com"
// console.log(jsUser)
// Object.freeze(jsUser)
// jsUser.email = "subhajit@microsoft.com"
// console.log(jsUser)

jsUser.greetings = function () {
    console.log("Hello JS user");
};
console.log(jsUser.greetings())

jsUser.greetingsTwo = function () {
    console.log(`Hello ${this.name}`);
};
console.log(jsUser.greetingsTwo())