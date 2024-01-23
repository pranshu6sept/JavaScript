// singleton 
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name : "Luffy",
    "full name" : "Monkey D Luffy",
    [mySym] : "mykey1",
    age : 21,
    location : "windmill",
    email : "luffy@strawhats.com",
    isLoggedIn : false,
    lastLoginDays :["Monday","Friday"]
    }

console.log(JsUser.email,);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = "luffy@tsunny.com"
//Object.freeze(JsUser) //freeze value

// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


