// to prevent global scope pollution
(function website()

//named iife
{
    console.log(`DB connected`)
})(); ///<--- execution call

( () => {
    console.log(`DB 2 connected`)
})()
