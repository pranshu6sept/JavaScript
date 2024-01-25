const userEmail = "luffy@strawhats"
const Email = ""

if (userEmail) {
    console.log("got user email");
} else {
    console.log("Dont have user email");
}

if (Email) {
    console.log("got user email");
} else {
    console.log("Dont have user email");
}

// falsy values

// false,0,-0,BigInt 0n,"",null,undefined,NaN

// truthy values examples

// "0",'false'," ",[],{},function(){}(empty function)

//for array

const array = []
if(array.length=== 0){
    console.log("Array is empty");
}

// for object

const emptyObj ={}
if(Object.keys(emptyObj).length=== 0){
    console.log("object is empty");
}

// Nullish Coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10 
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20


// console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80 ") : console.log("more than 80");