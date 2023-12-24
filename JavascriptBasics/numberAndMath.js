//numbers................................
const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString());

console.log(balance.toFixed(1));

let number = 232.46232546;
console.log(number.toPrecision(3));//it include all the values
console.log(number.toPrecision(4));
console.log(number.toPrecision(5));

console.log(number.toFixed(1));//it include only dot values
console.log(number.toFixed(2));
console.log(number.toFixed(3));

let price = 2983984348;
console.log(price.toLocaleString('en-IN'))

//Maths...............................................
//come with js by default
console.log(Math);
console.log(Math.abs(-4));//-->4
console.log(Math.round(4.3));//roundofvalues
console.log(Math.ceil(4.5));//5
console.log(Math.floor(4.9));//4
console.log(Math.min(3,5,6,3,5,7));
console.log(Math.max(3,5,6,3,5,7));

console.log(Math.random()); //print values 0 to 1

console.log(1+ Math.floor((10 * Math.random())));

const max = 20;
const min = 10;

console.log((Math.random() * (max - min +1)) + min)