let btnAddTaskEl = document.getElementById('addItem')
let newTask = document.querySelector('#newTask')
let tasks = getTaskFromLocalStorage()
renderTask(tasks)

btnAddTaskEl.addEventListener('click', function () {
    var valid = true;
    valid = validation.kiemTraRong(newTask.value, 'err_newTask_required', 'Taskname');
    if (!valid) {
        return;
    }


    let tasks = getTaskFromLocalStorage();
    tasks.push({
        name: newTask.value
    })
    newTask.value = '';
    localStorage.setItem('tasks', JSON.stringify(tasks))
    renderTask(tasks)
})
function checkRemoveTask(id) {
    let tasks = getTaskFromLocalStorage()
    console.log(tasks[id])
}

function checkTask(id) {
    // let tasks = getTaskFromLocalStorage()
    console.log(tasks[id])
    renderCheckTask(getTaskFromLocalStorage())
}

function delTask(id) {
    if (confirm('you want delete ? ')) {
        let tasks = getTaskFromLocalStorage()
        tasks.splice(id, 1)
        localStorage.setItem('tasks', JSON.stringify(tasks))
        renderTask(getTaskFromLocalStorage())
    }
}
function renderCheckTask(tasks = []) {
    let content = ''
    tasks.forEach((task, index) => {
        content += `<li>
        <span>${task.name}</span>
        <div class="buttons">
            <button class="remove" onClick="delTask(${index})">
                <i class="fa fa-trash-alt"></i>
            </button>
            <button class="complete" onClick="checkRemoveTask(${index})">
                <i class="far fa-check-circle"></i>
                <i class="fas fa-check-circle"></i>
            </button>
        </div>
    </li>`
    })
    document.querySelector('#completed').innerHTML = content
}

function renderTask(tasks = []) {
    let content = ''
    tasks.forEach((task, index) => {
        content += `<li>
        <span>${task.name}</span>
        <div class="buttons">
            <button class="remove" onClick="delTask(${index})">
                <i class="fa fa-trash-alt"></i>
            </button>
            <button class="complete" onClick="checkTask(${index})">
                <i class="far fa-check-circle"></i>
                <i class="fas fa-check-circle"></i>
            </button>
        </div>
    </li>`
    })
    document.querySelector('#todo').innerHTML = content
}


function getTaskFromLocalStorage() {
    return localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : []
}