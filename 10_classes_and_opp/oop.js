const user = {
    username : "luffy",
    loginCount: 9,
    singedIn: true,

    getUserDetails : function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`)
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this
}

const userOne = new User("hitesh",10, false)
const userTwo = new User("chaiaurCode",7, true)
console.log(userOne.constructor);
// console.log(userTwo);


// new - 1.new object created 2. constructor function called 3.arugument injected 4. you will get the result