let name = "divyam"
let repoCount  = " 4"

// console.log(name + repoCount + " count" )

// use string interpolation instead
// console.log(`Hello my name is ${name} and this is the amount of repos I created: ${repoCount}`)

// another way to make strings

//provides a lot of prototypes and makes use of length and enumerates it

const gameName = new String("divyamhc")

// console.log(gameName[0]);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('v'));

//slicing 

// takes positive
const subbed = gameName.substring(0,4);
console.log(subbed)

//takes negative
const anotherString = gameName.slice(-7,4);
console.log(anotherString)

//trim
//.trim removes whitespace

//replace
const url = "https://divyam/thakkar%20.com"

const newUrl = url.replace('%20' , '-')
console.log(newUrl)
//look at split 

