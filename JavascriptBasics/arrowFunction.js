const user = {
    userName : "Tejas",
    price : 999,

    welcomemsg : function(){
        console.log(`${this.userName},welcome back`);
        console.log(this)
    }
    
    
}

user.welcomemsg();

user.userName = "peter"

user.welcomemsg();

console.log(this);//return empty object


// function chai(){
//     console.log(this);
// }

// chai()

// const chai = function(){
//     let usrName = "Tejas"
//     console.log(this.usrName);
// }

// chai()

const chai = () => {
    let usrName = "Tejas"
    console.log(this.usrName);
}

chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }//explicit

const addTwo = (num1, num2) => (num1 + num2)//implicit

console.log(addTwo(3,5))


