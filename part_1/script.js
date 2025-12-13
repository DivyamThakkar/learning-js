// let score = "divyam";

// console.log(typeof(score));

// let valueInNum = Number(score);

// console.log(typeof(valueInNum));

// console.log(valueInNum);
//"33" => 33
//null => 0
//true => 1
//false => 0
//something else

// let boolLoggedin = Boolean(isLoggedin);
// console.log(boolLoggedin);
/* 1=>true
    0=>false
    "" => false
    "non-empty" => true
    */
// let val = 3;
// let negVal = -val;
// console.log(negVal);
// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 +"2");
// // aage add hoga peeche concat numbers
// //ganda code

// console.log("hello");
// console.log("galti");
// console.log("hey");

//primitive data types

// 7 => string, number, null, boolean, undefined, symbol, BigInt

//reference 

// arrays, objects, functions
// ***********************************************************************************//
// stack memory => Primitive data types 
let fname = "Divyam";
let sname = fname;
sname = "Thakkar"
console.table([fname,sname])

// hence copy mil rai dustre var ko


// uses copies to allocate to another variable 
// heap memory => reference data types

let userOne = {
    email:  "divyam.t1@ahduni.edu.in",
    AUID: "AU2340227"

};


let userTwo = userOne
userTwo.email = "payalthakkar899@gmail.com"
console.table([userOne.email,userTwo.email]);

//changes happen on both as the same value is provide to another variable instead of making a copy
