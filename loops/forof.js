// for of
// let myarray = [1,2,3,4,5,6,7,7,8]
// for (const num of myarray) {
//     console.log(num)
// }

//Maps---------------------- for in
/*for...of Loop (Used for Arrays & Iterables)
 🔹 Iterates over values of an iterable (arrays, strings, maps, sets).
 🔹 Use it for Arrays, Strings, Maps, Sets.*/

const map = new Map()
map.set('IN','India')
map.set('UK','London')
map.set('Fr','France')
// console.log(map);

for (const key of map) {
    // console.log(key)
}

for (const [key,value] of map) {
    // console.log(`${key} stand are ${value}`)
}

// for (const [key,value] of map) {
//     console.log(`${key} stand are ${value}`)
// }

/*----------------can we apply for of on object?------------*/


const myObject = {
    game1 : 'NFS',
    game2 : 'BGMI'
}

// for (const key of myObject) {
//     console.log(key);
// }

// for (const [key,value] of myObject) {
//     console.log(`${key} stand are ${value}`)
// }
//---- for of does not work on object-----//

// for in loop  with object
 /*for...in Loop (Used for Objects)
 🔹 Iterates over keys (property names or indexes) of an object or array.
 🔹 Use it for Objects, not Arrays.
*/ 
const language = {
    js :'javascript',
    py :'pyhton',
    cpp :'c++',
    rb: 'ruby'
}

for (const key in language) {
    // console.log(language[key]);
    //console.log(`${key} for ${language[key]}`);
}


//----for in loop with array

const array = [1,2,3,4,5,6]
for (const key in array) {
    //console.log(key) 
}

const fruits = ["apple","mangoe","banana"]
for (const key in fruits) {
//    console.log(fruits[key])
}


//-------------------------for each loop ----
/*
forEach() Method (Used for Arrays)
🔹 Only works on Arrays (not objects).
🔹 Cannot use break or continue.
🔹 Executes a function for each element.*/


const coding = ['js','ruby','python','swift']

coding.forEach( function (val){
    console.log(val)
    
})


// coding.forEach( (val) => 
//     (console.log(val))
// )

//--------create a fun and pass to forEach loop
// function printme(item){
//     console.log(item)
// }

// coding.forEach(printme)

coding.forEach( (item,index,coding) => {
    console.log(item,index,coding)
})


//--access value from data or array of object=----

const MyData =[
    {
        id : 590002,
        name : "Ashiv"
    },
    {
        id : 590003,
        name : "Ankush"
    },
    {
        id : 590004,
        name : "mehat"
    }
]

MyData.forEach( (item) => {
console.log(item.id);
})