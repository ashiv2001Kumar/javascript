// while (condition) {
    
// }


// let  i = 1
// while(i <= 10){
//     console.log(` value of i is ${i}`)
//     i++
// }

// let i = 0
// let  fruits =[ "apple","mangoes","banana","lichi","watermelon"]
// console.log(fruits.length)
// while (i < fruits.length){
//     console.log(fruits[i])
//     i++
// }

// table of 5
// let i = 5
// let j = 1
// while(j <= 10){
//     console.log( i + '*' + j + '=' + i*j)
//     j++
// }


// for (let i = 1; i <= 10 ; i++) {
//     if(i==5){
//         console.log("detected")
//         break;
//     }
//     console.log(i)
// }




/*-------------break----------------------------*/


// let i = 1
// while (i <= 10){
//     if(i==5){
//         console.log("5 is detected");
//         break;
//     }
//     console.log(i);
//     i++
// }

/*----------------------------continue---------------------------*/

// let i = 1
// while (i <= 10){
//     if(i==5){
//         console.log("5 is detected");
//         i++
//         continue;
//     }
//     console.log(i);
//     i++
// }

/*----------------------do while loop --------------------------*/
// Syntax
// do {
    
// } while (condition);


// let i =1

// do {
//     if(i==5){
//         console.log("detected")
//         break;
//     }
//     console.log("value of i is :",i)
//     i++
// } while (i<=10);


let i =1

do {
    if(i==5){
        console.log("detected")
        i++
        continue;
    }
    console.log("value of i is :",i)
    i++
} while (i<=10);

