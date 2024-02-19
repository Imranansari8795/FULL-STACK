// for(let index = 1; index <= 10; index++)
// {
//     console.log(index);
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(`Table of ${i}`);
//     for (let j = 1; j <= 10 ; j++) {
//         console.log(`${i}*${j} = ${i*j}`); 
//     }
// }

// while

// let index = 1;
// while(index <= 10)
// {
//     console.log(index);
//     index++;
// }

// do while()

// let index = 1;
// do{
//     console.log(index);
//     index++;
// }while(index <= 10);

// let userName = "Imran Ansari"
// let index = 0;
// do{
//     if(userName[index] == ' '){
//         index++;
//         continue;
//     }
//     console.log(userName[index]);
//     index++;
// }while(index < userName.length);


// ############## for of loop 

// const array = [1,2,4,5,6,6];
// for (const val1 of array) {
//     console.log(val1);
// }

// const heros = ["srk","salman Bhai","varun dhavan"];
// for (const value of heros) {
//     console.log(value);
// }

// const greetings = "Hello Worlds!";
// for (const greets of greetings) {
//     console.log(greets);  
// }


// ################### for of on map

// const map = new Map();
// map.set("IN","INDIA");
// map.set("USA","UNITED STATES OF AMERICA");
// map.set("FR","FRANCE");
// map.set("IN","INDIA")
// // console.log(map);
// for (const [key,value] of map) {
//     console.log(key,":-",value);
// }

// ############# for of on Objects

// const myFavGame = {
//     game1:"Cricket",
//     game2:"Hockey",
//     game3:"Football",
//     game4:"Bascketball"
// }

// for (const [key,value] of myFavGame) {   //  myFavGame is not iterable i.e, Object is not iterable by for of loop
//     console.log(key);
// }


// ########### for in loop 


// console.log(myFavGame);
// for (const key in myFavGame) {
//     console.log(key,myFavGame[key]);
// }

// let programming  = ["js",'cpp',"python",'shift',"java"];
// for (const key in programming) {
//     console.log(programming[key]);
// }



// ######## in Object we uses for in loop, in array we can use for of loop


// ########### for each loop#######

// const coding  = ["js","java","cpp","python","shift"];

// coding.forEach((item) => {
//     console.log(item);
// })

// coding.forEach(function(item){
//     console.log(item);
// })

// coding.forEach((val) => console.log(val))


// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe);

// coding.forEach((item,index,arri) =>{
//     console.log(item,index,arri);
// })


// const myCoding = [
    //     {
        //         languageName : "javascript",
        //         languageFileName:"js"
        //     },
//     {
//         languageName:"c++",
//         languageFileName:"cpp"
//     },
//     {
//         languageName:"python",
//         languageFileName:"py"
//     }
// ]
// console.log(myCoding);
// myCoding.forEach((val) => {
//     console.log(val.languageName,val.languageFileName);
// })

// const coding  = ["js","java","cpp","python","shift"];
// const courses = coding.forEach((item) => {   // for each will not return anything if we have to return somthing, use filter
//     console.log(item);
//     return item;
// })
// console.log(courses);

