const promiseOne = new Promise(function(resolve,reject){
    //Do an anync task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Ansynsc task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Ansync 2 resolved");
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai", email:"chai@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})


const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({username:"hitesh", password: "123"})
        } else {
            reject('Error: something went wrong')
        }
    },1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) =>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("Promise is either resolved or rejected"));

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({username:"javascript", password: "123"})
        } else {
            reject('Error: JS went wrong')
        }
    },1000)
});

// async function consumePromiseFive(){
//     try{
//     const response = await promiseFive
//     console.log(response);
//     } catch (error){
//         console.log(error);
//     }
// }

// consumePromiseFive()


// async function getAllusers(){
//    try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);
//    } catch(error){
//     console.log("E:", error);
//    }
// }

// getAllusers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=> {
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error))
