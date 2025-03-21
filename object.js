// singleton 
/* when you create something 
from constructors  a unqiue 
singleton object is created*/


// ****** object literal*********
const mySym = Symbol("key1")

const User1 = {
    name : "Ashiv",
    age : 24,
    [mySym] : "key1", // if you want to reffere the value as symbol use []brackets 
    email : "abc@gmail.com",
    Phone : 23456789
}
console.log(User1.email)
console.log(User1["email"])
console.log(User1[mySym])

User1.email = "ashiv@google.com"
// if you want that no once can change the value of object use object.freeze method
// Object.freeze(User1)
console.log(User1)

User1.greeting = function(){
    console.log(`hello how are you user`)
}
User1.greeting2 = function(){
    console.log(`hello how are you ${this.name}`)
    // when you want to reference the same user object use (this) to
    // use that property
}
console.log(User1.greeting)//gives fucntion reference
console.log(User1.greeting())
console.log(User1.greeting2())

