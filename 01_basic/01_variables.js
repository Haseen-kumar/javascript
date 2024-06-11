const accountId = 144553
let accountEmail="haseen@gmail.com"
var accountpassword="12345"
accountCity="abohar"
let accountState;

// accountId=2 //not allowed
accountEmail="vikas@gmail.com"
accountpassword="876543"
accountCity="modi"

/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.log(accountId);
console.table([accountEmail,accountId,accountpassword,accountState,accountCity])

