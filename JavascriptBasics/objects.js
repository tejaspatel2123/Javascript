//objects
//singleton 
//object literals


const jsUser = {
    name: "tejas",
    "fullName" : "TejasPatel",
    age : 21,
    location : "modasa",
    isLoggedIn : false,
    lastLoggin : ["monday", "Saturday"],
    add : function(a,b){
        return a + b;
    }
}

console.log(jsUser.name);
console.log(jsUser["name"]);

console.log(jsUser["fullName"]);

console.log(jsUser.age);
console.log(jsUser.lastLoggin);

console.log(jsUser.add(12,23));


jsUser.greeting = function(){
    return "Hellow"
}

console.log(jsUser)
console.log(jsUser.greeting())

//singleton object
const tinderUser = new Object()
console.log(tinderUser)

tinderUser.id = "123abc"
tinderUser.name = "Peter"
tinderUser.isLoggedIn = false

const regularUser = {
    email : 'abc@gmail.com',
    fullName : {
        userFullName : {
            firstName : "Patel",
            lastName : "Peter"
        }
    }
}

//accesing firstname 
console.log(regularUser.fullName.userFullName.firstName)

const obj1 = {1:'a', 2:'b'}
const obj2 = {3:'c', 4:'d'}

// const obj3 = Object.assign({},obj1, obj2)
// console.log(obj3);

const obj3 = {...obj1, ...obj2}
console.log(obj3);

console.log(Object.keys(obj3))//return keys array
console.log(Object.values(obj3))

console.log(obj3.hasOwnProperty("3"))//true
console.log(obj3.hasOwnProperty("name"))//false

//destructuring object

const course = {
    courseName : "JS",
    price : "343",
    CourseInstr : "peter"
}

//course.CourseInstr

const {CourseInstr } = course
const {CourseInstr:inst } = course

console.log(CourseInstr);
console.log(inst);


//json data
// {
//     "name" : "Tejas",
//     "courseName" : "udemy",
//     "price" : "232"
// }

// api [{}, {}, {}, {}, {}, ......., {}]

