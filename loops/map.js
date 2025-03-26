//mapp is a call back fucntion
const number = [1,2,3,4,5,6,7,8,9,10]
let New = number.map((val) => (val*2))
New = number.map((val) => (val + 10))
       .filter((val)=>(val < 15))//cainnning 
console.log(New)