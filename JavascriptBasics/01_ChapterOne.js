//1.create variable string and add to the number

let str = "This is string";
let num = 20;
let sum = str + num ;
console.log(sum);

//2. typeof sum
console.log(typeof(sum)); //string

//3.create const object in js can you change it to hold a number later
const obj = {
    name : 'Tejas',
    section : 1,
    isPrinciple : false
}

//obj = 1234;//error cannot change

obj["name"] = "Peter";
console.log(obj.name)

//4.try to add new key
obj.friend = "parker";
console.log(obj);

//5.create obj for product and price
const productItems = {
    pen : "20 $",
    paper : "2 $",
    pencile : "3 $",
    book : "4 $"
}

console.log(productItems)