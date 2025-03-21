// function addnumber (number1 , number2){
//    console.log(number1 + number2)

// }
// addnumber(3,5)
// -------------------------------------------

function addnumber (number1 , number2){
   // let result = number1 + number2
   // return result
   return  number1 + number2
}
const result = addnumber(3,5)
// console.log("Result:",result)

// -------------------------------------------------
function loginuser(username){
   return `${ username},just login`
}
// console.log(loginuser("ashiv"))

// -------------------------------------
function loginuser(username){
   // if(username == undefined)
      if (!undefined){
      console.log("please enter a username")
      return
   }
   return `${ username},just login`
}
// console.log(loginuser())
// ---------------------------------------

// --------------------function/Array/objects----------------

function add (...num1){//rest operator
   return num1
}
// console.log(add(20,200))



const user = {
   name : "ashiv",
   price : 354
}

function handleobject(anyobject){
   console.log(` Username is ${anyobject.name} and price is ${anyobject.price} `)  
}
// handleobject(user)


// handleobject({
//    name:"Rubal",
//    price: 2345
// })

const newarray = [200,900,560,800]
function returnSecondvalue(getArray){
   return getArray[2]

}
console.log(returnSecondvalue(newarray))
