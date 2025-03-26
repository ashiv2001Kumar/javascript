const user = {
    name: "Ashiv",
    price : 344,
    welcome_message : function(){
        // console.log(`${this.name}, welcome user message`)
        // console.log(this)// this keyword refer to the current context 
        //context  what this value tells about
    } 
}
// user.welcome_message()
// user.name = "sam"
// user.welcome_message()
// console.log(this)




// function one(){
//     const username = "Ashiv"
//     console.log(this.username)
// }
// one()

// const one = function(){
//     let username = "ashiv"
//     console.log(this)
// }
// one()

//-----------------------arrow fun -------------------------------
// const addtwo = (num1,num2 ) => {
//     return num1 + num2
// }
const addtwo = (num1,num2 ) =>  (num1 + num2)
// "Implicit" means something happens automatically, 
// without being explicitly stated or written.
// console.log(addtwo(6,5))


// const  add = () => { 
//     return  {username : "Ashiv"}
// }
// console.log(add()) 


// const  add = () => ({username : "Ashiv"})
// console.log(add()) 
// 
// -----------------iife-------------------

function add(){
    console.log("Hello world");
}
add();

//IIFE stands for Immediately Invoked Function Expression. 
// It is a function that executes immediately after it is defined.
// (function greet(){
//     console.log("hello ,Ashiv");
// })();

// //---------------------------------//
// (() => {
//     console.log("hello sir")
// })();
// //------------------------------//
// ((name) => {
//     console.log(`hello ${name}`)
// })('sam')

//----------------------------------
((name) => 
    (console.log(`hello ${name}`))
)('rahul')

