const accountId=12345
let accountEmail="mj@gmail.com"
var AccountPassword="1567"
accountCity="Bengaluru"

// accountId=1
accountEmail="m@gmail.com"
AccountPassword="21212"
accountCity="Jaipur"
/* prefer not to use var
because of issue in block scope and functional scope
*/
console.log(accountId);
console.table([accountId,accountEmail,accountCity,AccountPassword])
