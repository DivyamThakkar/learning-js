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

// console.log(LoginMessage("Divyam"))
// console.log(LoginMessage())
//upar parameter and andar argument


// Multiple arguments and amount unknown


//---------------------//
//unkonwn number of multiple parameters


// ... rest operator
function ShoppingCart(...num1){
    return num1;
}
console.log(ShoppingCart(200,300,500))

const user = {
    username: "divyam",
    price: "100"

}

function handleObject(anyObject){
    console.log(`The username is ${anyObject.username} and price is ${anyObject.price}`)

}

handleObject(user)

//these functions dont work when instead of price u have a small change like prices
//u can directly pass objects without declaring them outside 
