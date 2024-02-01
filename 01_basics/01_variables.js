const accountId = 19003
let accountEmail = "subhajit@gmail.com"
var accountPassword = "@#$34343"
accountCity = "Kolkata"
let accountState;

console.log(accountId)
console.table([accountId, accountEmail, accountPassword, accountCity, accountState ])

// accountId = 19005 / not allowed

accountEmail = "subhaiitb@gmail.com"
accountPassword = "#&*83hde"
accountCity = "Bengaluru"
accountState = "Savings"
console.table([accountId, accountEmail, accountPassword, accountCity, accountState ])

/* Prefer not to use var because of issues in block and functioanal scope */