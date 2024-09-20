document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');
  
    addTaskBtn.addEventListener('click', addTask);
  
    function addTask() {
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
        const li = document.createElement('li');
        li.textContent = taskText;
  
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Excluir';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', () => {
          taskList.removeChild(li);
        });
  
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        taskInput.value = '';
      }
    }
  });
  