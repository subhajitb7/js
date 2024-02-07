//For loop

for (let i = 0; i < 10; i++) {
    const element = i;
    // console.log(element);
}

// Number Table 1 to 10
let num =5
for (let i = 1; i <= 10; i++) {
        // console.log(`${num} x ${i} = ${num*i}`); 
}


// Nested For Loop
for (let i = 1; i <= 10; i++) {
    // console.log("Outer Loop:"+i);
    for (let j = 1; j <= 10; j++) {
        // console.log("Inner Loop:"+j);
    }    
}

// Number Table 1 to 10
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        // console.log(`${i} x ${j} = ${i*j}`);
    }    
}

//Print Array Element
const myArray = ["HTML","CSS","JS"]
for (let index = 0; index < myArray.length; index++) {
    // console.log(myArray[index]);
}


// break and continue
for (let index = 1; index <= 10; index++) {
    if (index == 6){
        // console.log("6 Detected");
        break
    }
    // console.log(index)
}

for (let index = 1; index <= 10; index++) {
    if (index == 6){
        // console.log("6 Detected");
        continue
    }
    console.log(index)
}