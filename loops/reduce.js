
const  array = [1,2,3,4]
// const newarray = array.reduce(
//     function(accomulator,currentval){
//         console.log(`acc is ${accomulator} and current :${currentval}`)
//         return accomulator + currentval
//     } ,0
// )

const newarray = array.reduce( (acc,current) =>
    (console.log(`acc is: ${acc},and current: ${current}`),
    (acc + current)),0)
console.log(newarray)