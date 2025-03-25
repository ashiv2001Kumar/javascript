// // function addnumber (number1 , number2){
// //    console.log(number1 + number2)
// // }
// // addnumber(3,5)
// // -------------------------------------------

// function addnumber (number1 , number2){
//    // let result = number1 + number2
//    // return result
//    return  number1 + number2
// }
// const result = addnumber(3,5)
// // console.log("Result:",result)

// // -------------------------------------------------
// function loginuser(username){
//    return `${ username},just login`
// }
// // console.log(loginuser("ashiv"))

// // -------------------------------------
// function loginuser(username){
//    // if(username == undefined)
//       if (!undefined){
//       console.log("please enter a username")
//       return
//    }
//    return `${ username},just login`
// }
// // console.log(loginuser())
// // ---------------------------------------

// // --------------------function/Array/objects----------------

function add (...num1){//rest operator
   return num1
}
// console.log(add(20,200))



// const user = {
//    name : "ashiv",
//    price : 354
// }

// function handleobject(anyobject){
//    console.log(` Username is ${anyobject.name} and price is ${anyobject.price} `)  
// }
// handleobject(user)
//---------------------------------------------------
// // handleobject({
// //    name:"Rubal",
// //    price: 2345
// // })

// const newarray = [200,900,560,800]
// function returnSecondvalue(getArray){
//    return getArray[2]

// }
// console.log(returnSecondvalue(newarray))

// const newarray = [200,900,560,800]
// function returnSecondvalue(getArray){
//    return getArray[2]
// }
// console.log(returnSecondvalue(newarray))



// const User = {
//    name:"ashiv",
//    price:47
// }
function handle(any){
   console.log(`username is ${any.name}, and price of machine is ${any.price}`)
}
// handle(User)

// handle({name:"rubal",price:98})

/*---------method1------------------*/

// const newarray= [200,3000,490,950,900]
// function getvalue(getnew){
//    return getnew[3]
// }
// console.log(getvalue(newarray))

/*-------------method2------------------- */
const newarray= [200,3000,490,950,900]
 function getvalue(getnew){
   console.log(getnew[2])
 }
 getvalue(newarray)