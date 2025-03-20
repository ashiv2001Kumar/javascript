let  myDate =  new Date()
// console.log(myDate.toISOString())
// // // 2025-03-20T11:11:22.012Z
// console.log(myDate.toDateString())
// // // Thu Mar 20 2025
// console.log(myDate.toString())
// // Thu Mar 20 2025 11:12:21 GMT+0000 
// // // (Coordinated Universal Time)
// console.log(myDate.toJSON())
// // // 2025-03-20T11:13:07.106Z

// console.log(myDate.toLocaleString())
// // // 3/20/2025, 11:13:34 AM
// console.log(myDate.toLocaleDateString())
// // 3/20/2025
// console.log(myDate.toLocaleTimeString())

// let mycreationDate = new Date(2001,9,7)

let mycreationDate = new Date(2001,0,7,6,40)
// console.log(mycreationDate.toLocaleString())
// console.log(mycreationDate.getTime())

// console.log(Math.floor(Date.now()/1000))


let mytimestamp = Date.now()
// console.log(mytimestamp)

let newDate = new Date()
// console.log(newDate.getDay())


newDate.toLocaleString('default',{
    weekday :"long",
})

