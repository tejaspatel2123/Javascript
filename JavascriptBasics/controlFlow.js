// //if

// const isUserLoggedIn = true
// if(isUserLoggedIn){

// }

// if(2 === "2"){
//     console.log("Yes");
// }

// if(2 != 3){
//     console.log("Yes");
// }

// const temp = 42;

// if(temp<50){
//     console.log("less 50");
// }

// console.log("temp is high");//every time runn

// //if - else

// if(temp === 21){
//     console.log("temp low")
// }else{
//     console.log("tem high");
// }

// //< , > , <= , >= , == , != , ===

// let score = 200

// if(score>100){
//     const power = "fly"
//     console.log(`user power : ${power}`);
// }

// const balance = 1000;

// if(balance > 500) console.log("Ok"),console.log("balance");

// if (balance < 500) {
//     console.log("less than 500");
// } else if(balance<750){
//     console.log("less 750")
// }else{
//     console.log("more 900");
// }


//real life scenario

// const userLoggrIn = true;
// const debitCard = true;
// const loggedInfromeEmail = true;
// const loggedInFromGoogle = false;

// if(userLoggrIn && debitCard){
//     console.log("allow")
// }

// if(loggedInFromGoogle || loggedInfromeEmail){
//     console.log("user loged in");
// }

// const month = 4;
// switch (month) {
//     case 1: 
//         console.log("jan");
//         break;
//     case 2: 
//         console.log("feb");
//         break;
//     case 3: 
//         console.log("march");
//         break;
//     case 4: 
//         console.log("april");
//         break;

//     default :
//         console.log("Not enter correct values")
//         break;
// }

// const userEmail = "h@gmail.com"

// if(userEmail){
//     console.log("user have email")
// }else {
//     console.log("User dont have email")
// }

//falsy values ==> false, 0, -0, BigInt 0n, "", null, undefined, NaN
//athor value truthy --> "0", "false", " ", [], {}, function(){}//empty function

// nullish coalescing operator (??) : null undefined

let val1;

// val1 = 5 ?? 10;
// val1 = null ?? 10;
// //val1 = undefined ?? 10;

// console.log(val1)

//terniary operator
// condition ? true : false
const iceTea = 100
iceTea >= 80 ? console.log("greter 80") : console.log("less 80");

