// const user = new Object(); //singleton
const user = {} //literal no singleton

user.id = "123abc"
user.name = "divy"
user.logged = false

const regularUser = {
    email: "som@gmail.com",

    fullname:{

        userfullname: {
            firstName:  "Divyam",
            Sname:  "Thakkar"
        }
    }
}

const obj1 = {1: "a" , 2 : "b"}
const obj2 = {3:"c",4:"d"}
// const obj3 = Object.assign({},obj1,obj2) //the empty obj is target object otherwise they go into obj1

const obj3 = {...obj1,...obj2}

console.log(obj3)

//array of objects
//arr[1].key
console.log(Object.keys(regularUser))
console.log(regularUser.hasOwnProperty('logged'))




//destructuring uses const {} declaration


const course =  {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "chai"
}
// course.courseInstructor

const {courseInstructor : instructor} = course

// console.log(courseInstructor)
console.log(instructor)



//structure of json


//key string and value string
// {
//         "name": "divyam",
//         "coursename" : "chai",
//         "price" : "0"

// }

