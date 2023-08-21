import './style.css';
import '@fortawesome/fontawesome-free/css/all.css';

let tasks = [];

function updateStorage() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function updateIndexes() {
  tasks.forEach((task, index) => {
    task.index = index + 1;
  });
}

function taskList() {
  const taskList = document.getElementById('item-list');
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const listItem = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    listItem.appendChild(checkbox);

    const label = document.createElement('label');
    label.textContent = task.description;
    listItem.appendChild(label);

    const afterElement = document.createElement('span');
    afterElement.className = 'dot-icon';
    label.appendChild(afterElement);

    afterElement.addEventListener('click', () => {
      afterElement.style.display = 'none';
      const iconContainer = document.createElement('div');
      listItem.appendChild(iconContainer);

      const editButton = document.createElement('button');
      editButton.innerHTML = '<i class="fas fa-edit"></i>';
      editButton.classList.add('fa-editb');
      iconContainer.appendChild(editButton);

      editButton.addEventListener('click', () => {
        const currentTask = task;

        iconContainer.style.display = 'none';
        const input = document.createElement('input');
        // input.type = 'text';
        input.value = task.description;
        input.classList.add('edit-input');
        listItem.replaceChild(input, label);

        input.addEventListener('blur', () => {
          currentTask.description = input.value;
          label.textContent = input.value;
          listItem.replaceChild(label, input);

          const afterElement = document.createElement('span');
          afterElement.className = 'dot-icon';
          label.appendChild(afterElement);
        });
        input.focus();
      });

      const deleteButton = document.createElement('button');
      deleteButton.innerHTML = '<i class="fa fa-trash"></i>';
      deleteButton.classList.add('del');
      deleteButton.addEventListener('click', () => {
        deleteTask(index);
      });
      iconContainer.appendChild(deleteButton);
    });

    taskList.appendChild(listItem);
  });
}

function addTask(description) {
  const newTask = {
    description,
    completed: false,
    index: tasks.length + 1,
  };
  tasks.push(newTask);
  updateStorage();
  taskList();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  updateIndexes();
  updateStorage();
  taskList();
}

function addTaskClick(event) {
  event.preventDefault();
  const inputField = document.getElementById('new-item');
  const taskDescription = inputField.value;

  if (taskDescription.trim() !== '') {
    addTask(taskDescription);
    inputField.value = '';
    taskList();
  }
}

function loadTasks() {
  const storedTasks = localStorage.getItem('tasks');
  if (storedTasks) {
    tasks = JSON.parse(storedTasks);
    taskList();
  }
}

const addButton = document.getElementById('add-button');
addButton.addEventListener('click', addTaskClick);

export {
  addTask, taskList, loadTasks, updateStorage,
};