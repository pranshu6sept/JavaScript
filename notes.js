// JavaScript Execution Content

// {} global exectuion content
//    function execution content
//    eval execution content

// Phases

// {}  Memory creation Phase
//     Execution Phase

let val1 = 10
let val2 = 5

function addNum(num1,mu,2){
    let total = num1 + num2
    return total
}

let result1 = addNum(val1,val2)
let result2 = addNum(10,2)

// 1. global execution/enviorment - this
// 2. Memory Phase -
//         val1 - undefined
//         val2 - undefined
//         addNum - defination
//         result1 - undefined
//         result2 - undefined
//    3. Execution Phase
//         val1 - 10
//         val2 - 5
//         addNum = (new variable environment + Execution thread)- delete when work is completed
           
//            memory phase
//            val1 - undefined
//            val2 - undefined
//            total - undefined

//            exection Content
//            num1 - 10
//            num2 - 5
//            total - 15

//          result1-15
//          result2 -(new variable environment + Execution thread)
//          again memory and exection phase


// stack ,lifo