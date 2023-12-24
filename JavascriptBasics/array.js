//Arrays
const myArr = [0,1,2,3,4,5];
//resize array
console.log(myArr)
console.log(myArr[0])
console.log(myArr[1])

//methods

const myHeros = ["peter", "Tejas"]
const myArr2 = new Array(1,2,3,4,5,6);

console.log(myArr2)

myArr2.push(7)
console.log(myArr2)

myArr2.push(8)
console.log(myArr2)

myArr2.pop()
myArr2.pop()
console.log(myArr2)

myArr2.unshift(9);//add values at first (0) index
console.log(myArr2)

myArr2.shift()//remove first values
console.log(myArr2)

console.log(myArr2.includes(9))//false
console.log(myArr2.indexOf(9))//-1
console.log(myArr2.join())//convert into string

console.log(myArr2.slice(2,3))//last not include and original array not modified
console.log(myArr2.slice(2,4))

console.log(myArr2.slice(0,4))


console.log(myArr2.splice(2,4))//it is inlude the last range and modifid the array
console.log(myArr2)

const marvelHeros = ["thor", "ironman","spiderman"];
const dc = ["superman", "batman", "flash"];

// marvelHeros.push(...dc) // merge array
// console.log(marvelHeros)

console.log(marvelHeros.concat(dc))//merge to array

const allNewHeros = [...marvelHeros, ...dc]
console.log(allNewHeros);


