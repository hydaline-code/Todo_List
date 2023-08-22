import { updateStorage } from '../crud.js';

export function addCheckboxEventListener(checkbox, task, label) {
  checkbox.addEventListener('change', () => {
    task.completed = checkbox.checked;
    if (task.completed) {
      label.style.textDecoration = 'line-through';
    } else {
      label.style.textDecoration = 'none';
    }
    updateStorage();
  });
}
