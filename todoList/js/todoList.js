const addTaskButton = document.getElementById("addTaskButton");
addTaskButton.addEventListener("click", addTask);

function addTask(){
    var ul = document.getElementById("todoList");
    var li = document.createElement("li");
    var inputValue = document.getElementById("taskInput").value;
    var t = document.createTextNode(inputValue);
    var span = document.createElement("span");

    li.className = "list-group-item d-flex flex-row align-items-center";
    span.className = "taskName flex-grow-1";
    
    span.appendChild(t);
    li.appendChild(span);

    var imgUp = document.createElement("img");
    imgUp.src = "images/taskUp.png";
    imgUp.addEventListener("click", moveUp);
    li.appendChild(imgUp);

    var imgDown = document.createElement("img");
    imgDown.src = "images/taskDown.png";
    imgDown.addEventListener("click", moveDown);
    li.appendChild(imgDown);

    var imgRemove = document.createElement("img");
    imgRemove.src = "images/removeTask.png";
    imgRemove.addEventListener("click", removeTask);
    li.appendChild(imgRemove);

    ul.appendChild(li);
    document.getElementById("taskInput").value = "";
}

function moveUp(){
    var li = this.parentElement;
    var prevLi = li.previousElementSibling;
    if(prevLi){
        li.parentElement.insertBefore(li, prevLi);
    }
}

function moveDown(){
    var li = this.parentElement;
    var nextLi = li.nextElementSibling;
    if(nextLi){
        li.parentElement.insertBefore(nextLi, li);
    }
}

function removeTask(){
    var li = this.parentElement;
    li.parentElement.removeChild(li);
}