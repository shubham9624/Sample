// console.log("Welcome");
// age=24;
// console.log(age);
// const student={
//     "name":"shubham",
//     "age":24,
//     "marks":80.00,
//     "isPass":true
// };
// console.log(student);
// console.log(student["name"]);
// student.age+=2;
// console.log(student);
// let str="Helllo Hi";
// for(let i of str)
//     {
//         console.log(i);
//     }
// const student={
//     name:"Ram",
//     age:23,
//     cgpa:7.0,
//     isPass:true
// }
// for(let i in student) { 
//     console.log(i +" "+student[i]);

const { create } = require("lodash");

    
// }
//Random Game of

// let win=25;
// let game=parseInt(prompt("Enter num to win"));
// while(game != win)
//     {
//         game=parseInt(prompt("Enter a number to win and guess number"));
//     }
//     console.log("You win the game");

// const obj={
//     item:"pen",
//     cost:10
// };
// console.log("Cost of item",obj.item, " is ",obj.cost);
// const ot=`cost of item ${obj.item} is ${obj.cost}`;
// console.log(ot);

// function URLconstructor(q,domain,path){
//     //Implement Your function here.
//         let res=`https://${domain}${path}?name=${q.name}?age=${q.age}`;
//         return res;
    
//     }
//     const queryParameters = {name:'John',age:'28'}; 
//     const domain = "google.com";
//     const path = '/search';
//     console.log(URLconstructor(queryParameters,domain,path));
// const students={
//     name:"John",
//     age:23,
//     cgpa:7.0,
//     isPass:true
// };
// let arr=[1,2,"abc",true,students];
// for(let i of arr)
//     {
//         console.log(i);
//     }

//     arr.unshift(4);
//     arr.unshift(324);
//     arr.unshift(321);
//     console.log(arr);
//     arr.splice(0,2,"Hello","Hi");
//     console.log(arr);
// let a=['a', 'b', 'c', 'd'];
// a.splice(2,'x','y');
// console.log(a);
// const f=(a,b)=>{
//     console.log(a+b);
// }
// function sum(f)
// {
//     return f(2,3);
// }
// sum(f);
// let arr=['a','b','c'];
// arr.forEach((val,arr,a)=>{
//   console.log(val.toUpperCase()+' '+arr+' '+a);
// });
// let arr=[1,2,3,4,5,6,7,8,9];
// let n=arr.map((val)=>{
//         return val*2;
// })
// console.log(n);
// let arr=[1,2,3,4,5,6,7,8,9];
// let n=arr.filter((val)=>{
//     return val%2===0;
//     });
//     console.log(n);
// let arr=[1,2,3,4,5];
// const a=arr.reduce((res,val)=>{
//     return res>val?res:val;
// })
// console.log(a);
// const f=()=>{
// console.log("f");
// };
// console.log(typeof f);
// const arr = [1, 2, 3, 4];
// const [a,,b] = arr;
// console.log(b);
// const obj={
//     name:"test",
//     age:24,
//     getname:function get(){console.log(this.name);},
// }
// const obj2=Object.create(obj);
// console.log(obj2.__proto__);
// const a = {
//     name: "Ram"
// };

// const b = {
//     name: "Lakshman"
// };

// const c = {
//     name: "Bharat"
// };

// function getName(a,b) {
//     console.log(this.name+" "+ a+" "+b);
// }

// getName.call(c,1,2);
// getName.apply(a,[4,5]);
// const s=getName.bind(b,45,67);
// s();
// function Person(name)
// {
//     this.name=name;
// }
// Person.prototype.greet=function(){
//     console.log("Hello, I am "+this.name);
// }
// function Employee(name,pos)
// {
//     Person.call(this,name);
//     this.position=pos;
// }
// Employee.prototype=Object.create(Person.prototype);
// Employee.prototype.greet=function(){
//     console.log("Hello, I am "+this.name);
// }
// const john=new Employee("John","HR");
// john.greet();
class Myclass{
    static m="hello";
    static fun()
    {
        console.log(this.m);
    }
}
Myclass.fun();