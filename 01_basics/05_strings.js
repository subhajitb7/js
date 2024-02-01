let name = "Subhajit Bag"
let age = 21;

//console.log("My name is " + name + "\nI am " + age + " years old")

console.log(`My name is ${name} \nI am ${age} years old`)

let webName = new String("Subhajit Bag")

console.log(webName[0])
console.log(webName.__proto__)
console.log(webName.length)
console.log(webName.toUpperCase());
console.log(webName.charAt(2));
console.log(webName.indexOf('j'));

let nArray = webName.split(" ")
console.log(nArray);
console.log(nArray[1])
console.log(typeof nArray)
console.log(typeof webName)

const newString = webName.substring(0, 4)
console.log(newString);

const anotherStr = webName.slice(-12, -4)
console.log(anotherStr);

const nstr = " sb  "
console.log(nstr)
console.log(nstr.trim());

const url = "https//:www.subhajitbag.co/subhajit%20bag"
console.log(url)
console.log(url.replace("%20", "-"))
console.log(url.includes("sub"))
console.log(url.includes("avi"))