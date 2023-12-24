//dates

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toISOString());

console.log(myDate.toJSON());

let myCustomDate = new Date(2023, 1, 23);
console.log(myCustomDate.toDateString());// 0 jan (=) 1 feb (=) ...

console.log(Date.now());
console.log(myCustomDate.getDate())
console.log(myCustomDate.getTime())
console.log(myCustomDate.getMonth() +1)
console.log(myCustomDate.getDay())