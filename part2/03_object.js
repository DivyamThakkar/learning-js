//2 ways constructor and literal
//Object.create // constructor and singleton is there

const id = Symbol("user_id") //u cant use new here
const myObj = {
    name: "divyam",
    [id] : 3, //use square bracket for symbol
    // symbol is use to make single key for object here instead of doing id1 id2, etc we can jus use one symbol for all
    "fullName" : "Divyam Thakkar",
    age: 19,
    isLoggedIn: false
} //literal and no singleton
//key val pairs
//WAYS TO ACCESS

console.log(myObj.name)
console.log(myObj["name"]) //use string when brackets

console.log(myObj["fullName"]) //cant access fullname with .

//SYMBOL CANT BE USED DIRECTLY IN OBJECT

console.log(myObj[id])

//To change values 
myObj.age = 50

//To freeze values
// Object.freeze(myObj)


//Declare functions

//unfreeze to make function
myObj.greetings = function(){
    console.log(`Hello user !!`)
}
console.log(myObj.greetings())
console.log(myObj.greetings)

myObj.greetings2 = function(){

    console.log(`Hello ${this.name}`) //this refers myobj as the object for this is myObj


}

console.log(myObj.greetings2())