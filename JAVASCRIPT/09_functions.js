// function addTwoNumber(number1,number2){
//     console.log(number1 + number2);
// }
// addTwoNumber(3,4);

// function addTwoNumbers(number1,number2){
//     return number1 + number2
// }
// const result = addTwoNumbers(3,"5");
// console.log(result);


function logInUserName(useName = "sam"){
    if(!useName){
        console.log("Please enter userName");
        return;
    }
    return `${useName} just logged In`
}

const ans = logInUserName("Rakesh");
console.log(ans);