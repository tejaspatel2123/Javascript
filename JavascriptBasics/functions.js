function sayMyName() {
    console.log("a");
    console.log("b");
    console.log("c");
}

sayMyName();

function addTwoNumber (a,b){
    return a+b;
}

console.log(addTwoNumber(2,4))
console.log(addTwoNumber(2,4,2.2))//it check first two number

console.log(addTwoNumber(2,"d"))
console.log(addTwoNumber(2,"3"))

console.log(addTwoNumber(2,null))

// (a,b) ==> parameters
// (2,3) ==> arguments

const result = addTwoNumber(2,4);
console.log(result);

function loginUserName(userName){
    if(userName === undefined){
        return "please enter username"
    }
    return `${userName} just loggded In`
}

console.log(loginUserName("Tejas"))
console.log(loginUserName())

function calculateCartPrice(...num1){
    return num1;
}

console.log(calculateCartPrice(3,5,6,3));

const user = {
    userName : "tejas",
    price:199
}

function handleObject(anyObject){
    return `username is ${anyObject.userName} and price of course is ${anyObject.price}`
}

console.log(handleObject(user))

