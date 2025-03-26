// const userEmail = "ashiv"
// const userEmail = ""
 const userEmail = []
if (userEmail){
    console.log("got user email")
}
else{
    console.log("Don't have email")
}


//falsy values 
// false,0,-0,BigInt 0n,"",null,undefined,NaN,

// truthy values 
// '0','false'," ",[],{},function(){} 
//false == 0 ,false == '',0 == '' == True 
 if (userEmail.length === 0){
    console.log("array is empty")
}

const emptyObj ={}
if (Object.keys(emptyObj).length === 0){
    console.log('obj is empty')
}


// Nullish coalescing operator(??): null undefined
let  val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
val1 = undefined ?? 10

console.log(val1);

// terniary operator
// condtion ? true : false

