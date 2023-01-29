// Functionality----->
// 1. Add item
// 2. Delete item
// 3. Search item

let form = document.getElementById("addForm")
let itemList = document.getElementById("items")
let filter = document.getElementById("filter")

// console.log(itemList)
// console.log(form)
// console.log(filter)


form.addEventListener("submit",function(e){
e.preventDefault()

let item = document.getElementById("item").value
// console.log(item)
let li = document.createElement("li")
// console.log(li)
li.appendChild(document.createTextNode(item))
let btn = document.createElement("button")
btn.appendChild(document.createTextNode("X"))
li.appendChild(btn)
btn.className= 'btn btn-danger btn-sm float-right delete'
li.className= "list-group-item"
itemList.appendChild(li)
document.getElementById("item").value = ' '
// item=''
})

itemList.addEventListener("click",function(e){
    // console.log(e.target.className)
    // console.log(e.target.classList)
    // console.log(e.target.classList.contains("delete"))
   if (e.target.classList.contains("delete")) {
    //  confirm("Are you sure want to delete this item")
    //  console.log(confirm("Are you sure want to delete this item"))
   if(confirm("Are you sure want to delete this item")) {
    // console.log(e.target.parentElement)
    itemList.removeChild(e.target.parentElement)
   }
   } else {
    alert("bhai kyu time pass kar rhe ho")
   }
})

filter.addEventListener("keypress",function(e){
    // console.log(e)
    // console.log(e.target.value)
    // console.log(e.key)
    // let value = e.target.value
    let value = e.target.value.toLowerCase()
    console.log(value)
    let li = document.getElementsByTagName("li")
    // console.log(li)
    Array.from(li).forEach(function(item){
        console.log(item.firstChild.textContent.toLowerCase().indexOf(value))

        if(item.firstChild.textContent.toLowerCase().indexOf(value)!==-1) {
            item.style.display = "block"
        } else{
            item.style.display= "none"
        }

    })
})

document.getElementById("test").addEventListener("click",()=>{
    console.log("hi")
})
