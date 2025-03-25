// const  age  = 20
// if(age > 18){
//     console.log('you are eligible for voting ')
// }
// console.log("hye--------")



// const score = 200

// if (score == 100){
//     let power = "fly"
//     console.log(`user has power to ${power}`)
// }
// else{
//     console.log(`user does not have power `)
// }

const balance = 1000

// if (balance > 500 ){
//     console.log('balance less than 500')
// }
// else if (balance > 750){
//     console.log('balance less than 750')
// }
// else if (balance > 900){
//     console.log('balance is less than 900')
// }
// else{
//     console.log("balance less then 1200")
// }

const userIsLogged = true
const userLoggedByEmail = true
const userIsAdmin = false
if(userIsAdmin || userIsLogged && userLoggedByEmail){
    console.log("authentic user")
}
else{
    console.log('unauthenticaed user ')
}