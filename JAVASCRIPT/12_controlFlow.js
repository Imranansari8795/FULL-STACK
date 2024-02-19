// const userEmail = NaN

// if(userEmail) {
//     console.log("user has a email");
// }else{
//     console.log("Don't have user Email");
// }


// falsy value 

// false,0,-0, BigInt 0n,"",null,undefined,NaN

// truthy value

// "0",'false'," ", [],{},function(){}


// const userEmail = [];
// if(userEmail.length === 0)
// {
//     console.log("Empty Array");
// }

// const userName = {};
// if(Object.keys(userName).length === 0)
// {
//     console.log("Empty Object");
// }

// const value = 1;
// if(value === 1)
// {
//     console.log("Equal");
// }else{
//     console.log("Not Equal");
// }


//  ########## nullish Coalescing Operator (??) : null undefined


let val1;
// val1 = 10 ?? 2;
// console.log(val1);

// val1 = 2 ?? 10;
// console.log(val1);

// val1 = null ?? 12;
// console.log(val1);

// val1 = undefined ?? 21;
// console.log(val1);

// val1 = null ?? undefined
// console.log(val1);

// val1 = undefined ?? null
// console.log(val1);

val1 = null ?? 12 ?? undefined
console.log(val1); 