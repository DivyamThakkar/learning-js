function Adder(a,b){
    return a + b;
}

let a = Adder(10,5)
console.log(a)

function LoginMessage(username){
    if(!username){
        return "Username is undefined"
    }
    return (`${username} has just logged in`)
}

console.log(LoginMessage("Divyam"))
console.log(LoginMessage())
//upar parameter and andar argument