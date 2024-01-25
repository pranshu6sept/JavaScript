const myNums = [1,2,3]


// const myTotal = myNums.reduce(function(acc,currval){
//     console.log(`acc: ${acc} and currval : ${currval}`);
//     return acc + currval
// },0)

const i = 0
const myTotal = myNums.reduce((acc,curr)=> acc+curr,i)

// console.log(myTotal);

const shoppingCart = [ 
{
    itemName: "js course",
    price: 2999
},
{
    itemName : "python course",
    price : 999
},
{
    itemName : "java course",
    price : 2999
},
{
    itemName : "data course",
    price : 12999
}
]

const priceToPay = shoppingCart.reduce((acc,item) => acc+item.price,0)
console.log(priceToPay);