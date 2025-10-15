const myArray = [0,1,2,3,4,5] //shadow memory read from mdn

myArray.push(6)
myArray.pop()
console.log(myArray);
myArray.unshift(9)
console.log(myArray)
myArray.shift()
console.log(myArray)
console.log(myArray.includes(9)) //bool
console.log(myArray.join()) //string output

//slice , splice
console.log("A" , myArray)

console.log(myArray.slice(1,3)) //keeps og same

console.log("B" , myArray)

console.log(myArray.splice(1,3)) //changes original array

console.log("C" , myArray)