//  object literals
const mySyml = Symbol("Key1");
const user = {
    Name:"imran",
    "Full Name":"Imran Ansari",
    [mySyml]:"just value",
    Age:21,
    Email:"imranansari@gmail.com",
    Location:"Panjab",
    isLoggedIn:false,
    lastLoggedInDay:["Sunday","Saturday"]
}
console.log(user);
// console.log(user.Email);
// console.log(user["Email"]);
// console.log(user["Full Name"]);
// console.log(typeof user.mySyml);

// Object.freeze(user);
// user.Email = "rajKumar@gmail.com";
// console.log(user);

// user.greeting = function()
// {
//     console.log("Hello js user");
// }
// console.log(user.greeting());

// user.greetingTwo = function(){
//     console.log(`hello user ${this["Full Name"]}`);
// }
// console.log(user.greetingTwo());