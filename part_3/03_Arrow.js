// const user = {
//     username: "Divyam",
//     price: 99,

//     welcomeMessage: function(){
// console.log(`${this.username}, welcome to the website `);
//         console.log(this)
//     }
// }
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this)

// function chai(){
//     let username = "Divyam"
//     console.log(this.username) //works only in object not in function
// }
// chai()



//////////// ARROW FUNCTION////////
// const chai  = () => {
// let username = "Divyam"
// console.log(this)
// }

// chai()

// const add = (num1,num2) => {
//     return num1+num2
// }

//implicit
// const add = (num1,num2) => /*return*/  (num1+num2)
//to return object
const add = (num1,num2) => /*return*/  ({username: "divyam"})