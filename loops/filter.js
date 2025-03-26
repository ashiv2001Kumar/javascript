// const array = ['js','py','rb','cpp']
// const value = array.forEach( (item) => {
//     // console.log(item)
//     return item
// })
// console.log(value)


/*-----filter operation-------*/

//arry.filter( (variable)=> condtion)

// const mynumber = [1,2,3,4,5,6,7,8]
// const newmunber = mynumber.filter((val) => (val > 4 ))//call
// // back fuction and conditon
// // //this function returns value
// console.log(newmunber)


const mynumber = [1,2,3,4,5,6,7,8]
const newmunber = mynumber.filter((val) => {
    return val > 4
})
// console.log(newmunber)


/*--------with forEach--------*/

// const array = [1,2,3,4,5,6,7,8]
// const New = []
// array.forEach( (num) => {
//     if(num < 4){
//         New.push(num)
//     }
// })
// console.log(New)

const books = [
    {
        title: "The Alchemist",
        publish: 1988,
        edition: "1st",
        genre: "Fiction"
    },
    {
        title: "Clean Code",
        publish: 2008,
        edition: "2nd",
        genre: "Programming"
    },
    {
        title: "Rich Dad Poor Dad",
        publish: 1997,
        edition: "3rd",
        genre: "Personal Finance"
    },
    {
        title: "Harry Potter and the Sorcerer’s Stone",
        publish: 1996,
        edition: "1st",
        genre: "Programming"
    },
    {
        title: "Harry Potter and the Sorcerer’s Stone",
        publish: 2007,
        edition: "1st",
        genre: "Programming"
    },
    {
        title: "Harry Potter and the Sorcerer’s Stone",
        publish: 1997,
        edition: "1st",
        genre: "Programming"
    }
]

let book = books.filter((bk) => (bk.genre === "Programming"))
book = book.filter((bk) =>(bk.publish < 1998))

console.log(book)





/*------------------map--------------------------*/
