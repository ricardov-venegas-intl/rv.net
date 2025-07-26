// This file handles the functionality of the to-do list interface, including adding and removing tasks.

document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const listItem = document.createElement('li');
            listItem.textContent = taskText;

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.classList.add('remove-task');
            removeButton.addEventListener('click', function() {
                taskList.removeChild(listItem);
            });

            listItem.appendChild(removeButton);
            taskList.appendChild(listItem);
            taskInput.value = '';
        }
    });
});