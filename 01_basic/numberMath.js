// const number = 400
// // console.log(number)
// const account = new Number(98723)
// console.log(account)

// console.log(account.toString().length)//convert number to string
// console.log(account.toFixed(3))

// const  balance = 2304.0987
// console.log(balance.toPrecision(5))
/*The toPrecision() method of Number 
values returns a string representing this
 number to the specified number of significant 
 digits.*/

//  const hundred = 10000000
//  console.log(hundred.toLocaleString('en-IN'))

// console.log(Math)
// console.log(Math.abs(-5))
// console.log(Math.floor(4.5))
// console.log(Math.ceil(4.6))
// console.log(Math.round(6.4))
// console.log(Math.random())
// console.log((Math.random()*10) + 1)
// console.log(Math.floor(Math.random() *10)+1)


// const min = 10
// const max = 20

// console.log(Math.floor(Math.random() *(max - min + 1))+ min)
/* math. random gives value b/w 0 and 1
max - min + 1 is used to get the value b/w 10 and 20 
min is used to get th min value i.e 10 .*/


const number = 123
// console.log(number)

const balance = new Number(12345)
// console.log(balance.toString().length)
// console.log(balance.toFixed(4))

const ammount =100000000
// console.log(ammount.toLocaleString('en-IN'))

// console.log(Math.abs(-8))
// console.log(Math.floor(6.9))
// console.log(Math.ceil(4.1))
// console.log(Math.round(8.6))
// console.log(Math.random())
// console.log(Math.random()*10 +1)
// console.log(Math.floor(Math.random()*10 +1))

// const max = 15
// const min = 5


// console.log(Math.floor(Math.random()*( max - min + 1))+ min)



function Area(){
    let raduis = 10
    let rect = 2 * Math.PI * raduis
    console.log(rect)
}
Area()