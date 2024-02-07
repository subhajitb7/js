//If Else Conditional Statement
const tempurature = 50

if (tempurature < 50) {
    // console.log(`Tempurature is ${tempurature}`);
} else {
    // console.log(`Tempurature is ${tempurature}`);
}

if (tempurature < 30) {
    // console.log("Tempurature is less than 30 degree");
} else if (tempurature < 40) {
    // console.log("Tempurature is less than 40 degree");
} else if (tempurature < 50) {
    // console.log("Tempurature is less than 50 degree");
} else {
    // console.log("Tempurature is beyond the meter");
}

const isUserLoggedIn = true

// if (isUserLoggedIn) console.log("User Logged in")

// if (isUserLoggedIn) console.log("User Logged in"), console.log("User not Logged in");

const loggedInFromGoogle = true
const loggedInFromEmail = false

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in")
}

const debitCard = true
const age = 21

if (isUserLoggedIn && debitCard && age>=21) {
    console.log("User is eligible for the subscription");
} else {
    console.log("User is not eligible for the subscription");
}
