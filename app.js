var form=document.querySelector('.form')
var input=document.querySelector('.form input')
var btnAdd=document.querySelector('.btn-add')
var btnTrash=document.querySelector('.fa-solid')
var todos=document.querySelector('.todos')
function init(){
    let todoStorage=JSON.parse(localStorage.getItem('todoList'))
    console.log(todoStorage)
    if(todoStorage){
        todoStorage.forEach(todo =>addTodo(todo))
    }

}
init()

form.addEventListener('submit', function(e){
    e.preventDefault()
    let value=input.value.trim()
    if(value){
        addTodo({
            text:value,
        })
        saveTodos()
    }
    input.value=''
})


function addTodo(todo){
    var li= document.createElement('li')
    li.innerHTML=`<span>${todo.text}</span>
    <i class="fa-solid fa-trash-can"></i>`


    if(todo.status==="completed"){
        li.classList.add('completed')   
    }
    
    li.addEventListener('click',function(){
        this.classList.toggle('completed')
        saveTodos()
    })
    li.querySelector('i').addEventListener('click',function(){
        this.parentElement.remove()
    })
    todos.appendChild(li)
}

function saveTodos(){
    let todoList=document.querySelectorAll('li')
    console.log(todoList)
    let todoStorage=[]
    todoList.forEach(function(item){
       let text= item.querySelector('span').innerText
       let status= item.getAttribute('class')
        console.log(text)
        console.log(status)
       todoStorage.push({
           text,
           status
       })
    })
    localStorage.setItem('todoList',JSON.stringify(todoStorage))
     
}