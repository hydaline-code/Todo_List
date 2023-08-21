import './style.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { loadTasks } from './crud.js';

function Reload() {
  const itemList = document.getElementById('item-list');
  itemList.innerHTML = '';
  loadTasks();
}

const reloadIcon = document.querySelector('.fa-rotate');
reloadIcon.addEventListener('click', () => {
  Reload();
});

// window.addEventListener('load', taskList);

document.addEventListener('DOMContentLoaded', () => {
  loadTasks();
});