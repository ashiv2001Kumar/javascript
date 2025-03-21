/* merging of array */
const arry1 = ['a','b','c']

const arry2 =['d','e','f']

// arry1.push(arry2)
// console.log(arry1)
// console.log(arry1[3][0])

// const arry3 = arry1.concat(arry2)
// console.log(arry3)
/*concat conbime two array and return new array*/
// const arry4 = [...arry1,...arry2]
// // console.log(arry4)

const arry5 =[1,2,3,[4,5,6],7,[8,9,10,1,[7,8]]]
// console.log(arry5.flat(Infinity))

const arry6 = "hitesh"
// console.log(arry6)
// console.log(Array.isArray(arry6))

// console.log(Array.from(arry6))



let a =200
let b="ashiv"
let c = [1,2,3,4]

const d =Array.of(a,b,c)

console.log(d)
const e = d.keys()
// for(const key  of e)
//     console.log(`${key} : ${d[key]}`)

const f = d.values()
// for(const value of f)
//     console.log(`${value}`)

const x = [1,2,3,45]
const y = x.map((i)=> i*2)
console.log(y)