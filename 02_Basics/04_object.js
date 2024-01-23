// const tinderUser = new Object() //singleton

const tinderUser ={} // non-singelton

tinderUser.id = "123abc"
tinderUser.name = "Zoro"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser ={
    email : "luffy@strawhats.com",
    fullname:{
        userfullname :{
            firstname : "luffy",
            lastname : "strawhat"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1 :"a", 2:"b"}
const obj2 = {3 :"a", 4:"b"}
const obj4 = {5 :"a", 6:"b"}

//const obj3 = {obj1,obj2}

// const obj3 = Object.assign({},obj1,obj2,obj4)
const obj3 = {...obj1,...obj2}
// console.log(obj3)

const users = [{

},
{

}

]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename : "Java Script",
    price: "999",
    courseInstructor : "hitesh"
}

//course.courseInstructor

const {courseInstructor : Instructor} = course 
//de-structure

console.log(Instructor);

// {
//     "name" : "hitesh",
//     "coursename" : "Java Script",
//     "price": "free"
// }

[
    {},
    {},
    {}
]





