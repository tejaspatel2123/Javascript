//denote '' or ""
//"hello" + "world" ==> hello world

const name = "Tejas";
const repoCount = 6;

console.log(name + repoCount);//concate string

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("GTA-CITY");
console.log(gameName); 
console.log(gameName[0]);//g
console.log(gameName[1]);//t
console.log(gameName[2]);//a

console.log(gameName.length);

console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));//index number give

console.log(gameName.indexOf("T"));

const newString = gameName.substring(0,3);
console.log(newString);//print 0 1 2 index value

const anotherString = gameName.slice(0, 4);
console.log(anotherString);//here we provide negative values

const newStringOne = "   tejas        "; //extra space
console.log(newStringOne);
console.log(newStringOne.trim());//remove white spaces

const url = "https://tejas.com/tejas20%patel";
console.log(url.replace("%", "-"));
console.log(url.includes("peter"));

//conver string into array
console.log(gameName.split("-"));
console.log(gameName.split(""));



