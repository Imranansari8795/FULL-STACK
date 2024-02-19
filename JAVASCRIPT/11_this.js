// const user1 = {
//     userName : "Imran",
//     price:999,
//     welcomeMassage: function()
//     {
//         console.log(`${this.userName}, Welcome to Website`);
//         console.log(this);
//     }
// }
// user.welcomeMassage()
// user.userName = "Sam";
// user.welcomeMassage()
// console.log(this);    // this will give {} as a output

// function chai(){
//     const userName = "Imran Ansari";
//     console.log(userName);
//     // console.log(this);
//     console.log(this.userName);    // it will work only in Object not in function
// }
// chai();


// const chai = function(){
//     const user = "Imran";
//     console.log(this);
//     console.log(this.user);
// }
// chai();


// arrow function

// const chai  = () => {
// const name = "Imran";
// console.log(name);
// console.log(this.name);
// }
// chai();

// const chai = (num1,num2) => {
//     return num1 + num2;
// }
// console.log(chai(3,2));

// const chai = (num1, num2) => num1 + num2;
// console.log(chai(3,5));

// const chai = (num1, num2) => (num1 + num2);
// console.log(chai(3,5));

// const chai = () => {
//     return {userName:"imran"};
// }
// console.log(chai());

// const chai = () => ({userName:"imran"});
// console.log(chai());


// IIFE === >  IMMEDIATELY INVOKED FUNCTION EXPRESSIONS

// (function chai(num1,num2){
//     console.log((num1 + num2));
// })(7,3);

((num1,num2) => console.log((num1 + num2))
)(3,5);

((name,age) => {
    console.log(`my name is ${name} and age is ${age}`);
}
)("imran",21);
