let arr = [2,3,4,5,6]
// arr.forEach( function (i){
//     console.log(i)
// } ) //callback function with no name

// arr.forEach( () => {
//     console.log(i)
// } ) 

// function printme(item){
//     console.log(item)
// }
// arr.forEach(printme)

// arr.forEach( (item,index,arr) => {
//     console.log(item,index,arr)
// })

const coding = [
    {
        languageName : "javascript",
        languageFile : "js"
    },
    {
        languageName : "cplusplus",
        languageFile : "cpp"
    },
    {
        languageName : "python",
        languageFile : "py"
    },
]
coding.forEach( (i) => {
    console.log(i.languageFile,i.languageName)
})