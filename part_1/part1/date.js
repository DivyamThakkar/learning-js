let myDate = new Date()
console.log(myDate.toString())
console.table([myDate.toISOString(),myDate.toUTCString(),myDate.toDateString(),myDate.toLocaleString()])

// let newDate = new Date(2023, 0, 23,5,3)
// console.log(newDate.toLocaleString()) //month start from 0
// let newDate = new Date("2023-01-14") // month start from 1
// console.log(newDate) 
let newDate = new Date("01-14-2025")
// console.log(newDate.toLocaleString())


let mytimestamp = Date.now()
// console.log(newDate.getTime()) //miliseconds
console.log(mytimestamp) //miliseconds
console.log(Math.floor(mytimestamp/1000));

//.get methods give date, day, yr, etc
console.log(newDate.toLocaleString('default',{
weekday:"long"
}));

