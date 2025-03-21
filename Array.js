const Arr = [1,2,3,4,5,5,6]
// // console.log(Arr[0])
// // const Fruits = ["apple","mango","pineapple","banana"]
// // console.log(Fruits[2])

// // const NewArray = new Array(4,5,67,8,9)
// // console.log(NewArray[2])

// /*shallow copy : when there is a change in the copy
//  it will also  effect the original one*/

//  /* deep copy :
//  when there is change in the copy the original copy does not 
//  affect becaues it id independent to the copy*/


// //  Array methods
// // push method is used to add the element inside the array
// // Arr.push(9)
// // Fruits.push("lichi")
// // console.log(Fruits)
// // console.log(Arr)

// // pop  method is used to remove the last added element
// // Arr.pop()
// // console.log(Arr)
// // unshift()  add elemnt and shift () remove  at the starting of array
// // includes() method to find the elent in side the array
// // indexof()

// // join method join the array also converted it into string
// console.log(Arr)
const NewArray = Arr.join()
console.log(NewArray)
console.log(typeof NewArray)


const  arry = [1,2,3,4,5,6]
// console.log(arry.reverse())


// console.log(arry.copyWithin(2,3,5))



// console.log(arry)

// const newArray = new Array(1,2,3,4,5,6,7,8,9,0)
// console.log(newArray.includes(5))
// console.log(newArray.indexOf(8))



// console.log(newArray)
// console.log(newArray.pop())
// console.log("a",newArray)
// newArray.push(10)
// console.log(newArray)

// newArray.unshift(9)
// console.log("B",newArray)
// newArray.shift()
// console.log("c",newArray)


// const n1 = newArray.slice(1,5)
// console.log("A",newArray)
// console.log(n1)

// const n2 = newArray.splice(1,5)
// console.log("B",newArray)
// console.log(n2)

// console.log( newArray.join())




// const newArray = new Array(1,2,3,4,5,6,7,8,9,0)
// console.log(newArray.lastIndexOf(9))