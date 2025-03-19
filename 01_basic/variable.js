const accountId = 123455
let accountEmail = "ashivkumar6@gmail.com"
var accountPassword = "1234564"
accountName = "ashiv"
let accountState

accountEmail = "ashiv@123hcl.com"
accountPassword ="8765"
accountName ="abhi"

// accountId = 983756278// constant variable cannot be changed 
console.log(accountId)
//  if we want to print all the  variable all at the same time 
console.table([accountId,accountEmail,accountPassword,accountName,accountState])


function myFun() {
    var x = 10 
    // functional scope and can be accessed any where within a func
    console.log(x,"variable x is printed");

    if(true){
        var x=20
        console.log(x,"after condtion true value is 20")
    }
    console.log(x,"now value remain same")
    
    let y = 10
    //  blocked scope  and can only accessed with in the blocek where it is defined
    console.log(y)
    if (true){
        let y = 30
        console.log(y ,"after condtion true value is 30")
    }
    console.log(y)
    console.log(x)
}
myFun();