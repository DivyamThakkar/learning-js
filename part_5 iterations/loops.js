for(let i =0; i<=10;i++){
    console.log(i)
}
const map = new Map()

map.set('IN', "India")
map.set('US',"USA")
console.log(map)
for(const [key,value] of map){
    console.log(`key : ${key} -- value ${value}`)
}
// this loop doesnt work on objects
