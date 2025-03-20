const  num1 = 10
const num2 = 10

// String Interpolation with Expressions
// You can also use JavaScript expressions inside ${}.
// console.log(`sum of num1 and num2 is ${num1 + num2}`)


/*String Interpolation is a technique in JavaScript
 used to embed variables or expressions inside a string. 
 It is done using template literals (backticks ` `)*/

function greet(name){
    return `hello ${name} !`

}
// console.log(`${greet('ashiv')}`)

function person(){
    let Name = 'Ashiv'
    console.log(`hello ${Name}`)  
}
// person()


const Person ={
    name : "ashiv",
    age : 24
}
// console.log(`My Name is ${Person.name} and I am ${Person.age} years old`)


// 2nd method to declare String

const gameName = new String("hello my name is ashiv kumar and i am 24 yes old")//new String('Ashiv') creates a string object


// Normally, strings in JavaScript are primitive values (e.g., "Ashiv").
// However, using new String() creates a String object, not a primitive string.
// name is now an object, not a primitive string

// Instead of storing the primitive "Ashiv", name stores an instance of the String object.

console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(3))
console.log(gameName.indexOf('s'))
console.log(gameName.slice(0,4))
console.log(gameName.substring(0,2))
console.log(gameName.split(" "))
console.log(gameName.blink())



const UserName = "   Ashiv   "
console.log(UserName.length)
console.log(UserName.trim())//trim method remove the white space 
str = UserName.trimStart()
console.log(str.length)


const web = "https//localhost:8000/blog%20demo.com"

console.log(web.replace('%20','--'))//replace method used to replace the value
