//write code for binary search

//initialization function for binary search
function binarySearch(arr, key){
    for(let i=0; i<arr.length; i++){
        if(arr[i] == key){
            return "your array values is in the key of " + i;
        }
    }
}

let arr = [13,24,46,23,35,57,34,3,35,6,567,34,23];
let key = 567;

console.log(binarySearch(arr, key));