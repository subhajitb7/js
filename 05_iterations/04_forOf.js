// For of

// ["", "", ""]
// [{}, {}, {}]

const arr = ["a", "b" ,"c", "d", "e"]

for (const i of arr) {
    // console.log(i)
}

const greetings = "Hello World!"
for (const greet of greetings) {
    // console.log(greet)
}

// Map
const countryCode = new Map([
    ["IN", "India"],
    ["US", "United States"],
    ["CH", "Switzerland"]
]);
countryCode.set("IT",  "Italy")

// console.log(countryCode);

for (const [key, value] of countryCode) {
    // console.log(`${key}: ${value}`);
}


// Object is not iterable, therefore it does not work with the for-of loop.
const countryCodeObj = {
    IN: "India",
    US: "United States",
    H: "Switzerland"
}

for (const key of countryCodeObj) {
    // console.log(key);
}