// Array

let myArr = [1, 5, 34, 54, 6, 0]
 console.log(myArr)

const myArray = new Array("Hi","hello", "namaste")
// console.log(myArray)
// console.log(myArray[2])
// console.log(typeof myArray)

// Array metthods

// myArr.push(9);
// myArr.push(7);
// console.log(myArr)
// myArr.pop();
// console.log(myArr)

// myArr.unshift(89);
// console.log(myArr)
// myArr.shift();
// console.log(myArr)

// console.log(myArr.indexOf(9))
// console.log(myArr.indexOf(54))
// console.log(myArr.includes(54))

// const newArr = myArr.join()
// console.log(newArr);
// console.log(typeof newArr);


//Slice 

const sliceArr = myArr.slice(1,4)
const sliceArr2 = myArr.slice(-5)
// console.log(sliceArr);
// console.log(sliceArr2);
// console.log("Slice ",myArr);


// Splice

const spliceArr = myArr.splice(1,4)
console.log(spliceArr);
console.log("Splice ",myArr);

const spliceArr2 = myArr.splice(1,0, 99)
console.log(spliceArr2);
console.log("Splice op",myArr);

const spliceArr3 = myArr.splice(1,1)
console.log(spliceArr3);
console.log("Splice op",myArr);