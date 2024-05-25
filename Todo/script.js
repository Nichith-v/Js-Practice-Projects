let title = document.getElementById('taskTitle')
let desc = document.getElementById('taskDesc')

let addBtn = document.getElementById('addBtn');

let taskList = document.getElementById('taskList');

let count = 0;


showTasks();


function add(){
    let tasks = localStorage.getItem('tasksStored');
    if(tasks === null){
        tasks = [];
    }else{
        tasks = JSON.parse(tasks)
    }

    if(title.value == ''){
        alert('Enter your tasks title');
        return;
    }

    const taskObj = {
        titleC : title.value,
        descC : desc.value
    }

    title.value = '';
    desc.value = '';

    tasks.push(taskObj);
    localStorage.setItem('tasksStored', JSON.stringify(tasks));
    
    showTasks();

}


function showTasks(){
    let tasksHtml = '';
    let tasks = localStorage.getItem('tasksStored');
    if(tasks === null){
        return;
    }else{
        tasks = JSON.parse(tasks);
    }

    for(let i=0; i<tasks.length; i++){
        tasksHtml += `
                    <tr>
                        <td>${i+1}</td>
                        <td>${tasks[i].titleC}</td>
                        <td>${tasks[i].descC}</td>
                        <td><button class="deleteNote btn btn-danger" id=${i} onclick="deleteNote(${i})">Delete</button></td>
                    </tr>
        `
    }
    taskList.innerHTML = tasksHtml;
}


function deleteNote(index){
    let tasks = localStorage.getItem('tasksStored');
    if(tasks === null){
        return;
    }else{
        tasks = JSON.parse(tasks);
    }
    tasks.splice(index, 1);
    localStorage.setItem('tasksStored', JSON.stringify(tasks));
    
    showTasks();
}



addBtn.addEventListener('click', add);

