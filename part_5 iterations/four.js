// const coding = [js,Cpp,py ,rb ,java]

// const item = coding.forEach((i) => {
// return i
// })
// console.log(item) //doesnt give outputs

//hence we use filter

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter((i) => {
//     return i>4
// })
// console.log(newNums)

// const newNums = myNums.map((num) =>num+10)
// console.log(newNums)

// const newNums = myNums.reduce(function (acc,currentval)  {
//     console.log(`acc: ${acc} and currval ${currentval}`)
//     return acc + currentval

// }, 0)
const newNums = myNums.reduce((acc,curr) => acc +curr ,0)
console.log(newNums)

