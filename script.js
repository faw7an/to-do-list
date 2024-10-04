document.addEventListener("DOMContentLoaded", function(){

    
    
const inputBox = document.getElementById("input-box");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("list-container");

// const clearBtn = document.getElementById(clear);


function addFunction(){
    if(inputBox.value === ""){
        alert("Please enter a task");
        return;
    }
    else{
        
    const newLi =document.createElement("li");
    newLi.innerText = inputBox.value;
    todoList.appendChild(newLi); 
    inputBox.value = "";
    newLi.classList.add("unchecked");
    let span = document.createElement("span");
    span.className = "close";
    span.innerText = "\u00d7"; 
    newLi.appendChild(span);
    saveData();
    // console.log("added")
    }
};

function doneTask(e){
    if(e.target.tagName==='LI'){
        e.target.classList.toggle("checked");
        e.target.classList.toggle("unchecked");
        saveData();
    }
};

function clear(e){
    if(e.target.className === "close"){
        e.target.parentElement.remove();
        saveData();
    }
};
function saveData(){
    localStorage.setItem("todoList",todoList.innerHTML)
};

function showData(){
    todoList.innerHTML = localStorage.getItem("todoList");
}


addBtn.addEventListener("click", addFunction);
todoList.addEventListener("click", doneTask);
todoList.addEventListener("click", clear);
showData();

})
