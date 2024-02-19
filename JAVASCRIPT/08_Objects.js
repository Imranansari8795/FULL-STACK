
// const tinderUser = new Object();
// tinderUser.Email = "Imranansari@gmail.com";
// tinderUser.Age = 21;
// tinderUser.Location = "Paschim Bangal";
// console.log(tinderUser);


// const tinderUser = {};
// tinderUser.Name = "Imran";
// tinderUser.Age = 21;
// tinderUser.Location = "Bihar";
// tinderUser.isLoggedIn = false;
// console.log(tinderUser);

// const regularUser = {
//     Email:"imranansari@gmail.com",
//     Age : 21,
//     Location:"patna",

//     FullName:{
//         userFullName:{
//             firstName:"Imran",
//             lastName:"Ansari"
//         }
//     }
// }
// console.log(regularUser.Email);
// console.log(regularUser.FullName);
// console.log(regularUser.FullName.userFullName.firstName);


// const obj1 = {
//     1:"A",
//     2:"B",
//     3:"C",
//     4:"D"
// }
// const obj2 = {
//     5:"P",
//     6:"Q",
//     7:"R",
//     8:"S"
// }

// const obj3 = {obj1,obj2}     // it is not good to assign one onject two other 
// console.log(obj3);

// const obj3 = Object.assign(obj1,obj2);   // it is quit good but we can do most efficient way
// console.log(obj3);

// const obj3 = {...obj1,...obj2};  // this will also give same result as compare to upper one
// console.log(obj3);


// const user = [
//     {
//         Id:1210,
//         Email:"imran@gmail.com"
//     },
//     {
//         Id:1211,
//         Email:"raju@gmail.com"
//     },
//     {
//         Id:1212,
//         Email:"riya@gmail.com"
//     }
// ]
// console.log(user);
// console.log(typeof user);
// console.log(user[1].Email);


const tinderUser = {};
tinderUser.Name = "Imran";
tinderUser.Age = 21;
tinderUser.Location = "Bihar";
tinderUser.isLoggedIn = false;
console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("isLoggedIn"));
console.log(tinderUser.hasOwnProperty("isLogged"));
