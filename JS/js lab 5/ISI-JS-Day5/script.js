// function statement --> hoisted
// sum(5,6);
// // x(5,5)
// function sum(a, b){
//     console.log( a + b)
// }
// // function expression --> not hoisted --> function name is not mandatory 
// var x = function(a,b){
//     // anonymous function 
//     console.log("Hello")
//     return a * b
// }

// var factorial = function fact(n){
//     if(n <=1 ){
//         return 1;
//     }
//     return n * fact(n-1)
// }

// // es6 arrow function 
// let myFun = ()=>{
//     console.log("Hi")
// }



// functions are first class object (citizens)
/**
 * 1- return function from function -> closure
 * 2- pass function to another function as parameter
 * 3- you can assign it to variable 
 * 4-
 */


// function sum(a,b){
//     return a+ b
// }

// function sum(a,b,c){
//     return a+b+c
// }


// function sum(){
//     // if(typeof Number(arguments[0]) === "number"){
//     //     // do something
//     // }
//     // if(arguments.length == 2){
//     //     // do another thing
//     // }
//     // console.log(typeof arguments.length)
//     for (var i =0; i < arguments.length; i++ ){
//         console.log(arguments[i])
//     }
// }

// sum(5)
// sum(5,4)
// sum(5,6,7)
// sum()



// CLOSURE


// function outer(){
//     var count = 0 ;
//     return function inner(){
//         // var x =5;
//         count ++;
//         // debugger
//         console.log(count)
//     }
// }


// var counterOne = outer()
// var counterTwo = outer()


// counterOne()
// counterOne()
// counterTwo()
// counterTwo()
// counterTwo()


function once(fn){
    var done = false
    return function(uName){
        if(!done){
            done= true;
            return fn(uName)
        }
    }
}

var greetOnce = once(function (uName){
    console.log("Hello only one " + uName)
})
var sayHiOnce = once(function(){
    console.log("Hi once")
})


// sayHiOnce()
greetOnce("Omar") // will run
// greetOnce() // nothing
// greetOnce() // nothing
// greetOnce() // nothing
// greetOnce() // nothing
// greetOnce() // nothing



// var userName = "Hussein"
// var userOne = {
//     userName : "Omar",
//     age: 28,
//     sayHi : function(){
//         console.log("Hello " + this.userName) // this refers to the caller object
//     }
// }
// var userTwo = {
//     userName : "Kareem",
//     age: 28,
//     greet: function(greeting, sign){
//         console.log(greeting + " " +  this.userName + " " + sign )
//     }
    
// }
// var userThree = {
//     userName : "Ali",
//     age: 28,
// }

// call , apply, bind

// userOne.sayHi()
// userOne.sayHi.call(userTwo) //kareem

// userOne.sayHi.call(userTwo,)

// userOne.sayHi.apply(userThree,)

// userTwo.greet("Hello" , "!")
// userTwo.greet.call(userThree, "Hi", "##")
// userTwo.greet.apply(userThree, ["Hola", "!!"])


// console.log( Math.max(1,4,99,66))

// var newArr =[14,66, 299,6]


// console.log( Math.max.apply(null, newArr));


// var myMath ={
//     num: [1,5,10],
    
//     max :function (x,y){
//         if(x>y) return x
//         // Does not need "this"
//     },
    
//     findMax: function (){
//         var myNums = this.num
//         // find the max in myNums
//     }
// }
// myMath.max(5,6)
// myMath.findMax()

// userTwo.greet.apply(userThree, ["Hola", "!!"])
// var greetAli = userTwo.greet.bind(userThree, "hi", "!")
// greetAli()
// var greetAli = userTwo.greet.bind(userThree)
// greetAli("HI","^^");
// greetAli("ahlan","**");
// greetAli("Hola","$");


// --------------------------- ES6 -----------------------------
// var x =5

// if(true){
//     var x =20
//     console.log("Inside if: "+ x)
// }
// console.log("outside if: "+ x) //not the wanted behavior 

// let x =5

// if(true){
//     let x =20
//     console.log("Inside if: "+ x)
// }
// function scopeFun(){
//     var x = 15
//     console.log(x)
// }
// scopeFun()
// console.log("outside if: "+ x) //not the wanted behavior 



// const y = 10;
// y= 15;

// const myArr = [2,6]
// myArr.push(8)
// console.log(myArr)

// const user = {
//     userName : "ahmed"
// }
// user.userName = "ali"
// console.log(user)

// console.log(x)
// let x = 5;


// let x = 10;
// let x = 20; //error
// console.log(x)

// const PI = 3.147;


// template literals 

// let uName = "omar"
// let age = 28
// let helloString = "Hello" +  " "+ uName + " "+  "Your age is: " + age;
// console.log(helloString)

// let newStr = `Hello ${uName} Your
// age is ${age + 5}`

// console.log(newStr)

// arrow functions

const add = (a,b) => {
    return a + b;
}
console.log(add(5,6))


const newAdd = (x,y) => x + y;  
console.log(newAdd(7,8))

const squareFn = x => x * x
console.log( squareFn(5))

const consoleHi = uName => console.log(`hello ${uName}`)
consoleHi("Omar")



// function Person(){
//     this.age = 0;

//     setInterval(function(){
//         this.age++
//         console.log(this.age)
//     }, 1000)

// }
// new Person();


// function Person(){
//     this.age = 0;

//     setInterval(()=>{
//         this.age++
//         console.log(this.age)
//     }, 1000)

// }
// new Person();

