// Singleton Object 
// const jsUser = new Object()

// Non-Singleton Object
const jsUser = {}
// console.log(jsUser)

jsUser.name = "Subhajit"
jsUser.email = "sbag@gmail.com"
jsUser.isLoggedin = true
// console.log(jsUser)

const regularUser = {
    email: "alvarez@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Subhajit",
            lastName: "Bag"
        }
    }
}

// console.log(regularUser);
// console.log(regularUser.fullName);
// console.log(regularUser.fullName.userFullName);
// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = { 1: "a", 2: "b"}
const obj2 = { 3: "c", 4: "d"}
const obj3 = { 5: "e", 6: "f"}

// const obj = {obj1, obj2}
// const obj = Object.assign(obj1, obj2) //Stores the value in obj1
// console.log(obj1)
// const obj = Object.assign({}, obj1, obj2) //Stores the value in an empty object 

const obj = {...obj1, ...obj2, ...obj3} //... spread operator
console.log(obj)

// Array of Objects

const ObjArr = [
    {
        id: 324,
        email: "a@bmail.com"
    },
    {
        id: 325,
        email: "b@bmail.com"
    },{
        id: 326,
        email: "s@bmail.com"
    },
]

// console.log(ObjArr);
// console.log(ObjArr[0]);
// console.log(ObjArr[2].email);

// console.log(Object.keys(jsUser))
// console.log(Object.values(jsUser))
// console.log(Object.entries(jsUser))
// console.log(jsUser.hasOwnProperty('isloggedin'))
// console.log(jsUser.hasOwnProperty('islogged'))

const course = {
    courseName: "JavaScript Mastery",
    coursePrice: "Free",
    courseInstructor: "Subhajit"
}

const {courseInstructor} = course
console.log(courseInstructor);

const {coursePrice: price} = course
console.log(price);
