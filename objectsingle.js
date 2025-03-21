// // const x ={} non singleton
// // const y = new object() singleton

// const mobile = {}

// mobile.id = '123asdf'
// mobile.name = "nokia"
// mobile.price = 200

// console.log(Object.keys(mobile))
// console.log(Object.values(mobile))
// console.log(Object.entries(mobile))


// const regular ={
//     email : "abc@jkl.com",
//     fullname:{
//         username : {
//             name : "Ashiv",
//             last :"choudahry"
//         }
//     }
// }
// // console.log(regular.fullname.username.name)
// const object = {1:"a",2:"b"}
// const object1 = {3:"c",4:"d"}

// //const obj = //
// // const obj3 = Object.assign({},object,object1)
// const obj3 = {...object , ...object1}
// // console.log(obj3)

const my = Symbol("key1")
const User2 ={
    name : "Ashiv",
   [ my] : "key1",
    email : "abc@gmail.com",
    phone : 1234567,
    isLoggedIn : false
}


// console.log(User2.email)
// console.log(User2['email'])
// User2.email = "ashiv@knn.com"
// console.log(User2.email)
// Object.freeze(User2)
// User2.email = "ashiv@google.com"

// console.log(User2)


const game = new Object()
game.id = 51195680099
game.name =  "battle through the heaven"
game.email = "ashiv@gmail.com"
console.log(game.hasOwnProperty('email'))
// console.log(game)
// console.log(Object.keys(game))
// console.log(Object.values(game))
// console.log(Object.entries(game))

const acro = {
    email : "abc@google.com",
    fullName : {
        username : {
            name : "YTR_shiv",
            realname :"anku",
            age:23
        }
    }

}
// console.log(acro.email)

let obj1 = {1:"ashiv",2:"kumar"}
let obj2= {3:"anku",4:"shiv"}

// const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1 , ...obj2}
// console.log(obj3)

const course = {
    coursename : "asdfgvbhn",
    courseprice : "999",
    courseinstructor  : "hitesh"
}
// console.log(course.courseinstructor)
const {courseinstructor : instruct} = course
console.log(instruct)
// object deconstruct 