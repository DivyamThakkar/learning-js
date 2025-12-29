//falsy values
/*
false ,0 ,-0, bigint, "", null, undefined, Nan*/

//truthy values
/* "0",'false', " ", [], {}, function(){} */

// Nullish coaelesing operator (??) : null undefined
let val1;
// val1 = 5 ?? 10
val1 = null?? 10
console.log(val1)
//terinary
condition ? true:false
