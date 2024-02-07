const myArray = ["HTML","CSS","JS"]

myArray.forEach( function (items) {
    // console.log(items)
})

myArray.forEach( (items) => {
    // console.log(items)
})

function printMe(items) {
    console.log(items)
}

// myArray.forEach(printMe)

myArray.forEach( (item, index, arr) => {
    // console.log(item, index, arr)
})

const programmingLang = [
    {
        languageName: "Javascript",
        languageFileName: "js"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
    {
        languageName: "Rust",
        languageFileName: "rs"
    }
] 

programmingLang.forEach((item) => {
    console.log(`File name of ${item.languageName} is ${item.languageFileName}`);
})