var c = 300
let a = 300

if (true){
    let a = 10
    const b = 20
    console.log("Inner:", a);
}

// for (let i = 0; i< Array.length; i++){
//     const element = array[i];
// }
// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()

if (true){
    const username = "hitesh"
    if (username === "hitesh"){
        const website = "Youtube"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username)

// ++++++++++ intersting ++++++++++++

console.log(addone(5));

function addone(num){
    return num + 1
}

addone(5)

console.log(addTwo(2))

const addTwo = function(num){
    return num + 2
}

addTwo(5)
