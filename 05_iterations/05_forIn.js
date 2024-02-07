const countryCodeObj = {
    IN: "India",
    US: "United States",
    H: "Switzerland"
}

for (const key in countryCodeObj) {
    // console.log(key);
    // console.log(`${key}: ${countryCodeObj[key]}`);
}

// for (const [key,value] in countryCodeObj) {
//     console.log(key+" = "+value);
// }

const arr = ["a", "b" ,"c", "d", "e"]

for (const key in arr) {
    // console.log(key); //print only indexes
}

// const countryCode = new Map([
//     ["IN", "India"],
//     ["US", "United States"],
//     ["CH", "Switzerland"]
// ]);

// for (const key in countryCode) {
//     console.log(key)
// }