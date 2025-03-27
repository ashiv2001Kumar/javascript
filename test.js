let array = [1,2,3,4,5,6,7,8]

// let New = array.reduce( function (acc , curr) {
//     console.log(`acc is : ${acc} and current is ${curr}`)
//     return (acc + curr)
// } ,0)
// console.log(New)

// let New = array.reduce( (acc ,cur)=> (
//     console.log(`acc is : ${acc} and current is ${cur}`),
//     (acc + cur)
// ),0)
// console.log(New)




// let New =array.map((val) =>(val*2))
//               .filter((val) => (val <10))
//               .map((val) => (val + 10 ))
// // console.log(New)

// for (const i of array) {
//     console.log(i)
    
// }

// function Print(val){
//     console.log(val)
// }

// array.forEach(Print)


// let myObject = {
//     java : "java",
//     py : 'python'
// }
// for (const key in myObject) {
//     console.log (`${key}  values are ${myObject[key]}`)
  
// }



const Course =[
    {
        coursenName : "java",
        price : 2300
    },
    {
        coursenName : "js",
        price : 2000
    },
    {
        coursenName : "py",
        price : 1500
    },
    {
        coursenName : "ruby",
        price : 1300
    },

]
const total = Course.reduce((acc,item ) => 
    (console.log(`acc is ${acc} and  item price is ${item.price}`),
    (acc + item.price)),0)
console.log(total)