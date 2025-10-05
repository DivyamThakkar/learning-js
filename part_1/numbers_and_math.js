const balance = new Number(100)
// console.log(balance)

//
console.log( typeof balance.toString());
console.log(balance.toFixed(2))

const other_number = 123.986
console.log(other_number.toPrecision(4))
console.log(other_number.toPrecision(3))

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'))


// ----------------------------Maths----------------------------//

console.log(Math);
console.log(Math.abs(-4))
console.log(Math.round(2.4))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.7))
// .min ,.max
console.log(Math.random() )
//can be mult to 10 and add 1


// to define range
max = 20
min = 10
console.log(Math.floor((Math.random() * (max - min + 1 ))  +  min ))