document.querySelector("#push").onclick = function(){
    if(document.querySelector("#newTask input").value.length == 0){
        alert("Please Enter a Task")
    
    }
    else{
        document.querySelector("#task").innerHTML += `<div class="task">
        <span id="taskname ">
            ${document.querySelector('#newTask input').value}
        </span>
        <button class = "delete">
        <i class="fa-regular fa-trash-can"></i>
          </button>
        </div>
        `;
    }  

    var current_tasks = document.querySelectorAll(".delete");
    for (var i=0; i<current_tasks.length; i++){
        current_tasks[i].onclick = function(){
            this.parentNode.remove();

        }
}

var task = document.querySelectorAll(".task");
for(var i = 0; i<task.length; i++){
    task[i].onclick = function(){
        this.classList.toggle('completed');
    }
}

document.querySelector("newtask input"). value="";
}