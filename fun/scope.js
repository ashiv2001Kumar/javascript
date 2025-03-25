//global scope
// var c = 809
let a = 890
if (true){//block scope 
    let a = 23
    const b = 45
    var c = 90
  //  console.log("inner", a)
}
//console.log(a)
// console.log(b)
// console.log(c)


function one(){
    const username = "ashiv"
    function two(){
        const website = "Blogs"
        console.log(username)
    }
    // console.log(website)
    two()
}
// one()


if (true){
    const  name = "ashiv"
    if (name == "ashiv"){
        const website = " kumar"
       // console.log(name + website)
    }
    // console.log(website)
}
// console.log(name)

// console.log(increment(5))
// function increment(num1){
//     return num1 + 1
// }

increment2(6) 
const increment2 = function(num2){
    return num2 + 2
}
//console.log(increment2(6))
/* if function is stored inside the variable then 
it connot be intlized before  fucntion where as if the function is not 
stored inside the variable the it can be initlize before 
function */