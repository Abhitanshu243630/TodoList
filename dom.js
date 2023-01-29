// alert("hello")
// console.log(document)
// console.log(document.links)
// console.log(document.location)
// console.log(document.images)
// console.dir(document)
// console.dir(document.all[8])

// DOM API/Method
// document.getElementById()
// document.getElementsByClassName()
// document.querySelector(" ")
// document.querySelectorAll(" ")
// document.getElementsByTagName()

// let a = 3
// function sayMyname() {
//     console.log(a)
    
//     console.log("Hello My name")
// }
//   sayMyname()
//   const b= 5;
//   b=7

    // let header= document.getElementById("header-title")
    // console.log(header)
    // console.log(header.innerText)
    // console.log(header.innerHTML)
    // header.innerText= "Changeed Value"
    // console.log(header.value)

// getElementByClassName
// let list = document.getElementsByClassName("list-group-item")
// console.log(list[0])
// list[0].innerHTML= "aj"
// list[0].style.backgroundColor= "red"
// list[1].style.color= "red"

// list.forEach(function(item) {       
// Array.from(list).forEach(function(item) {       
// Array.from(list).forEach(function(item,idx) {
//     // console.log(idx)   
//     if(idx%2==0)    {
//         item.style.backgroundColor= "red"
//         item.style.color="blue"
//     }
//     else {
//         item.style.backgroundColor= "blue"
//         item.style.color="red"
//          }
//     // console.log(item) 
// })   

// document.getElementsByTagName
// let li = document.getElementsByTagName("li")
// console.log(li)

// document.querySelector(" ")
// let li = document.querySelector(".list-group-item")
// let li = document.querySelectorAll(".list-group-item")
// let li = document.querySelectorAll("list-group-item")
// console.log(li)

// Event Handling
let form = document.querySelector(".form-inline")
// console.log(form)
form.addEventListener('submit',function(event){
    event.preventDefault()
    document.body.style.backgroundColor='red'
    // console.log("Hi submit",event)
})

let items = document.querySelector("#items")
// console.log(items)
items.addEventListener("click",function(e){
    // e.target.style.backgroundColor = 'red'
    e.target.style.display = 'none'
    // console.log(e.target)
// alert("hi")
})



