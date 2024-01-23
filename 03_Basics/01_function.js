function sayMyName() {
    console.log("L");
    console.log("U");
    console.log("F");
    console.log("F");
    console.log("Y");
}

// sayMyName()

function addTwoNumbers (number1,number2){
    // let result = number1 + number2;
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3,4)

// console.log("Result :",result);

function loginUserMessage(username = "nami"){
       if (!username){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("luffy"));
// console.log(loginUserMessage());

function calculateCartPrice(val1,val2,...num1){
    return num1
}
// console.log(calculateCartPrice(200,400,500,2000));

const user = {
    username :"luffy",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)

handleObject({
    username: "sam",
    price :399
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));




