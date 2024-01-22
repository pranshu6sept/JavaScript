// Primitive- Call by value
// 7 types : String,Number, Boolean, null, undefined,Symbol,BigInt

const scoren = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123)')

// console.log(id === anotherId)

const BigNumber = 33700999888888888888889n

// Reference (Non primitive)
// Array, Objects,Function

const heros = ["Shaktiman","Nagraj","Doga"]

let myobj = {
    name :"Pranshu"
    age : 29
}

const myfunction= function(){
    console.log("Hello World")
}

console.log(typeof bigNumber)

// https://262.ecma-international.org/5.1/#sec-11.4.3