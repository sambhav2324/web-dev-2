// const handleSubmit=(event)=>{
//     event.preventDefault();
//     console.log("Form Submitted")
// }

// const form=document.getElementById("myForm");
// form.addEventListener("submit",handleSubmit);
   
// const btn=document.querySelector("button")
// const div=document.querySelector(".container")
// const div2=document.querySelector(".outer")

// btn.addEventListener("click",function(){ console.log("button")}, true)
// div.addEventListener("click",function(){ console.log("Div")}, true)
// div2.addEventListener("click",function(){ console.log("Div2")}, true)


// debugger
// console.log(a)
// console.log(b)
// var a =78
// let b = 345
// console.log(a)
// console.log(b)

// function print(){
//     let c= 45
//     console.log(c)
//     console.log("inside fn")
// }
// print()

// debugger
// function first(){
//     second()
// }
// function second(){
//     third()
// }
// function third(){
//     first()
//     console.trace()
// }
// first()

// let total = 100

// function calculate(){
//     console.log(total)
//     let total=100
// }
// calculate()

// console.log("First line")
// setTimeout(() => {
//     console.log("After 2 sec")
// }, 2000);
// console.log("Second line")

// setTimeout(() => {
//     alert("Alert after 3 sec!!")
// }, 3*1000);

// const timerId=setInterval(()=>{
//     console.log("Hello Student!")
// },1000)

// setTimeout(() => {
//     clearInterval(timerId)
// },10*1000)

// count=1
// const timerId=setInterval(()=>{
//     console.log(count)
//     count+=1
// },1000)

// setTimeout(() => {
//     clearInterval(timerId)
// },10*1000)

// function print(name){ //callback function
//     console.log("Hello students!!",name)
// }

// function greet(num){  //higher order function
//     console.log("Welcome to the class")
//     setTimeout(() => {
//         console.log("Inside SetTimeout")
//         let firstNAme ="Alex"
//         num(firstNAme)   
//     }, 2000);
// }

// greet (print)

// console.log("Starting homework...");

// setTimeout(() => {
//     console.log("Homework done!");
//     console.log("Starting dinner...");

//     setTimeout(() => {
//         console.log("dinner done!");
//         console.log("Getting ready to go out...");

//         setTimeout(() => {
//             console.log("Going to the Playground!");
//         }, 1000);
//     }, 1500);
// }, 2000);

// function finishHomework(callback){
//     console.log("Starting the homework..");
//     setTimeout(() => {
//         console.log("Homework done!");
//         callback();
//     }, 2000);
// }

// function eatDinner(callback){
//     console.log("Starting Dinner...")
//     setTimeout(() => {
//         console.log("Dinner Done!");
//         callback()
//     }, 1500);
// }

// function goToPlayground(){
//     console.log("GOing to Playground!");
// }

// finishHomework(()=> {
//     eatDinner(()=>{
//         goToPlayground();
//     });
// });

// const input=document.querySelector("#task")
// const btn=document.querySelector(".btn")
// const lists=document.querySelector(".list")

// btn.addEventListener('click',(e)=>{
//     e.preventDefault()
//         if(InputDeviceInfo.value===""){
//             alert("Enter task")
//             return
//         }
//     const li=document.createElement('li')
//     const deleteButton=document.createElement('button')

//     deleteButton.innerText="Delete"
//     li.innerText=input.value 

//     li.appendChild(deleteButton)
//     lists.appendChild(li)

//     deleteButton.addEventListener('click',()=>{
//         lists.removeChild(li)
//     })
//     input.value=""
// })

// const p=new Promise(function(resolve,reject){
//     // resolve()
//     // reject()
//     setTimeout(() => {
//         let done=false;
//         if(done){
//             resolve({name:"alex",age:34})
//         }else{
//             reject("network issue")
//         }
//     }, 5000)
// })
// p.then((data)=>{
//     console.log("Resolved",data)
// }).catch((err)=>{
//     console.log("Rejected",err)
// }).finally(()=>{
//     console.log("Finally Block")
// })

// function doHomework(){
//     const p=new Promise(function(resolve,reject){
//         setTimeout(() => {
//             let done=true;
//             if(done){
//                 console.log("Homework is done")
//                 resolve("Homework complete")
//             }else{
//                 reject("Homework is not done")
//             }
//         }, 5000);
//     })
//     return p
// }

// function eatDinner(){
//     const p=new Promise(function(resolve,reject){
//         setTimeout(() => {
//             let done=true;
//             if(done){
//                 console.log("Dinner is done")
//                 resolve("Dinner complete")
//             }else{
//                 reject("Dinner is not done")
//             }
//         }, 5000);
//     })
//     return p
// }

// function goToPlayground(){
//     const p=new Promise(function(resolve,reject){
//         setTimeout(() => {
//             let done=true;
//             if(done){
//                 console.log("Went to the playground is done")
//                 resolve("playground complete")
//             }else{
//                 reject("Playground is not done")
//             }
//         }, 5000);
//     })
//     return p
// }

// doHomework().then((data)=>{
//     console.log(data)
//     return eatDinner()
// }).then((data)=>{
//     console.log(data)
//     return goToPlayground()
// }).then((data)=>{
//     console.log(data)
// }).then


// function orderFood(){
//     return new Promise(function(resolve,reject){
//         setTimeout(() => {
//             console.log("Food Ordered")
//             resolve("Food Ordered")
//         }, 1000);
//     })
// }

// function prepareFood(){
//     return new Promise(function(resolve,reject){
//         setTimeout(() => {
//             console.log("Food Prepared")
//             resolve("Food Prepared")
//         }, 1000);
//     })
// }


// function deliverFood(){
//     return new Promise(function(resolve,reject){
//         setTimeout(() => {
//             console.log("Food Delivered")
//             resolve("Food Delivered")
//         }, 1000);
//     })
// }

// orderFood().then((data)=>{
//     console.log(data)
//     return prepareFood()
// }).then((data)=>{
//     console.log(data)
//     return deliverFood() 
// }).catch((err)=>{
//     console.log(err) 
// })

// async function order(){
//     const data = await orderFood()
//     console.log(data)
//     await prepareFood()
//     await deliverFood()
// }

// order()

// console.log("First line")
// try{ 
//     //let sample=324
//     let age = 19
//     if(age<18){
//         throw new Error("Access Denied")
//     }
//     console.log(sample)
// }catch(error){
//     console.log(error)
// }finally{
//     console.log("finally block")
// }
// console.log("last line")

// async function getData(){
//     try{
//         const response= await fetch("https://dummyjson.com/products")
//         console.log(response.ok)
//         if(response.ok===false)throw new Error("Data not found")
//         const data=await response.json()   
//         console.log(data)
//         // data.products.forEach((ele)=>{
//             //     console.log(ele.price)
//             // })
//     }catch(error){
//             console.log("Data not found ")
//     }
// }

// getData()

// async function sendData(){
//     try{
//         const response=await fetch('https://dummyjson.com/products/add',{
//             method: 'POST',
//             headers: {'Content-type': 'applicstion/json'},
//             body: JSON.stringify({
//                 title:"Macbook",
//                 description:"Macbook Pro",
//                 price:100000,
//                 discountPercentage:5,
//                 rating:5,
//                 brand:"Apple"
//             })
//         })

//         const data =await response.json()
//         console.log(data)
//     }catch(error){
//         console.log("Data not found")
//     }    
//  }
//  sendData()


// let obj={
//     title:"Macbook",
//     description:"Macbook Pro",
// }

// localStorage.setItem("name","ayush")
// localStorage.setItem("age","23")
// console.log(localStorage.getItem("name"))
// console.log(localStorage.getItem("age"))
// console.log(JSON.parse(localStorage.getItem("obj")))

// localStorage.removeItem("age")

// localStorage.clear()

// sessionStorage.setItem("obj",JSON.stringify(obj))
// sessionStorage.setItem("name","ayush")
// sessionStorage.setItem("age","23")
// console.log(sessionStorage.getItem("name"))
// console.log(sessionStorage.getItem("age"))
// console.log(JSON.parse(sessionStorage.getItem("obj")))
// sessionStorage.removeItem("age")

// document.cookie="name=ayush; expires=Sat, 21 Feb 2026 12:00:00 UTC"
// document.cookie="age=20; expires=Sat, 21 Feb 2026 12:00:00 UTC"
// console.log(document.cookie)

// async function sample(){
//     await fetch("http://127.0.0.1:5500/")
// }
// sample()       

// function* genertors(){
    // yield 1
    // yield 2
    // yield 3
    
//     for(let index = 1; index<4;index++)
//         yield index
// }

// let i=1;
// while (true){
//     yield 1 
//     i++
// }
// }

// const gen=genertors()

// console.log(gen)
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())

function add (a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}

// console.log(add((1)(2)(3)))

const first=add(1)
const second=first(2)
const third=second(3)
console.log(third)
// console.log(third)

