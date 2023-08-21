import './style.css';
import '@fortawesome/fontawesome-free/css/all.css';

const tasks = [
  { description: 'Task 1', completed: false, index: 1 },
  { description: 'Task 2', completed: true, index: 2 },
  { description: 'Task 3', completed: false, index: 3 },
  { description: 'Task 4', completed: false, index: 4 },
  { description: 'Task 5', completed: true, index: 5 },
];

function taskList() {
  const taskList = document.getElementById('item-list');

  tasks.forEach((task) => {
    const listItem = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    listItem.appendChild(checkbox);

    const label = document.createElement('label');
    label.textContent = task.description;
    listItem.appendChild(label);

    if (task.completed) {
      listItem.classList.add('completed');
    }

    taskList.appendChild(listItem);
  });

  const clearButton = document.querySelector('.cleardone');
  clearButton.addEventListener('click', () => {
    const completedItems = document.querySelectorAll('.completed');
    completedItems.forEach((item) => {
      item.parentNode.removeChild(item);
    });
  });
}

function Reload() {
  const itemList = document.getElementById('item-list');
  itemList.innerHTML = '';
  taskList();
}

// Add event listener to reload icon
const reloadIcon = document.querySelector('.fa-rotate');
reloadIcon.addEventListener('click', () => {
  Reload();
});

window.addEventListener('load', taskList);