
// const myNums = [1,2,3,4,5,6,7,8,9,10];
// const values = myNums.filter((nums) =>{
//     return nums > 5;
// })
// console.log(values);

// let store = [];
// myNums.forEach((items) => {
//     if(items > 5){
//         store.push(items);
//     }
// })
// console.log(store);


// let arrayOfObjects = [
//     { key1: 'value1A', key2: 'value2A', key3: 'value3A', price: 10 },
//     { key1: 'value1B', key2: 'value2B', key3: 'value3B', price: 20 },
//     { key1: 'value1C', key2: 'value2C', key3: 'value3C', price: 15 },
//     { key1: 'value1D', key2: 'value2D', key3: 'value3A', price: 25 },
//     { key1: 'value1E', key2: 'value2E', key3: 'value3E', price: 30 }
// ];

// let newObject = arrayOfObjects.filter((rate) => {return rate.price >= 20});
// console.log(newObject);

// let findKey = arrayOfObjects.filter((key) => key.key3 === "value3A");
// console.log(findKey);
// let finddata = arrayOfObjects.filter((key) => key.key3 === "value3A" && key.price >=20);
// console.log(finddata);



// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newArray = array.map((val) => val + 10);
// console.log(newArray);

// const newArray = array
//                      .map((val) => val + 10)
//                      .map((val) => val + 1).
//                      filter((val) => {
//     return val < 15;
// });
// console.log(newArray);


// ############## reduce

// const array = [1,2,3];
// const totalSum = array.reduce((acc,currVal) => {
//     console.log(`value of acc ${acc} and value of ${currVal}`);
//     return acc + currVal;
// },3);
// console.log(totalSum);


const shoppingCart = [
    {
        itemName:"js course",
        price : 1999
    },
    {
        itemName:"Data Science course",
        price : 12999
    },
    {
        itemName:"Mobile Dev course",
        price : 5999
    }
] 
// console.log(shoppingCart);
const totalPrice = shoppingCart.reduce(function(acc,item){
    return acc + item.price;
},0)
console.log(totalPrice);