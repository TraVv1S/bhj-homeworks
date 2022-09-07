const tasksInput = document.getElementById('task__input'),
    taskList = document.getElementById('tasks__list'),
    addTaskBtn = document.getElementById('tasks__add');

function addTask() {
    
        const taskName = tasksInput.value;

        tasksInput.value = '';

        let newTask = document.createElement('div');
        newTask.classList.add('task');
        taskList.append(newTask);

        newTask.insertAdjacentHTML("beforeend", `
            <div class="task__title">
                ${taskName}
            </div>
            <a href="#" class="task__remove">&times;</a>
        `);

        const removeBtn = newTask.querySelector('.task__remove');
        removeBtn.addEventListener('click', () => {
            newTask.remove();
        });
}

tasksInput.addEventListener('keypress', event => {
    if (event.key === 'Enter' && tasksInput.value.trim() ) {
        event.preventDefault();
        addTask();
    }
});

addTaskBtn.addEventListener('click', event => {
    if (tasksInput.value.trim()) {
        event.preventDefault();
        addTask();
    }
});