const marvel = ["thor", "loki", "stark"]
const dc = ["superman", "batman", "flash"]
// marvel.push(dc); //it pushes anything in this case it will push whole array
// console.log(marvel);
// const all = marvel.concat(dc) //adds into new array
// console.log(all) 

// const all = [...marvel, ...dc] //it spreads like a broken glass,, can do more than 2
// console.log(all) 

// const another_array = [1,2, [3,4,5], 6,7, [8,[4,5]]] 
// const real_another_array = another_array.flat(Infinity) //flattens and brings element out && takes depth as well if u want to flatten everyone use infinity
// console.log(real_another_array)

//CHECK AND CONVERT

// console.log(Array.isArray("Divyam"))
// console.log(Array.from("Divyam")) //convert
// console.log(Array.from({name: "Divyam"})) //return empty as u dont specify keys or values

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)) //makes array of variables

