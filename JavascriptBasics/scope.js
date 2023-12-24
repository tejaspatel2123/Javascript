var c =300;
//global scope
let a =300;
{
    //scope -- function if else
    let a = 10;
    console.log(a);
    const b= 20;
    //local scope
    var c =30;//update c global values so avoid var
}

console.log(a);
//console.log(b);
console.log(c);

console.log("////////////////////////////////////////////////////////////");

function one(){
    const username = "Tejas"

    function two(){
        const website = "Youtube"
        console.log(username)
    }

    //console.log(website)
    //two()
}

one()


if(true){
    const userNameIs = "Tejas"
    if(userNameIs == "Tejas"){
        const website = "youtube"
        console.log(userNameIs + website);
    }
    //console.log(website); not defined
}

//console.log(userNameIs) not defined

addOne(3)

function addOne(value){
    return value + 1;
}


//addTwo(5)//error can not access
const addTwo = function(num){
    return num + 2
}

