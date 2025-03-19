// premitive data type
//  string , number ,Boolean ,null ,undefined ,symbol,bigInt

// symbol are used to make the value unique

/* premitive data type are call by value mean when you
copy  these type in different location then original refence of the memory 
are not give to you  ,only copy of the data are give
and you can do change only in the copy  .*/

const score = 100
const scorevalue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id  = Symbol("123")
const anotherId = Symbol("123")

// console.log(id === anotherId)



// reference type:(non premitive)
// when the refrence of the menory are directly allocated to you 

// array , Objetcs ,Functions

const fruits = ['mango','apple','watermelon']

let myobj = {
    name :'ashiv',
    age: 24
}
const myFun = function(){
    console.log("hello world ")
}
myFun()
// console.log(typeof isLoggedIn)

// *********************Stack(primitive) get the copy of declared variable 

let myName = "Ashiv"

let my2nd = myName
my2nd = "anku"
// console.log(my2nd)
// console.log(myName)


// , heap memory(non premitive) get the original ref ***************

let userOne = {
    email:"ashiv@google.com",
    upi :"user@ybl"
}
let userTwo = userOne

userTwo.email = "anku@google.com"
console.log(userOne.email)
console.log(userTwo.email)




