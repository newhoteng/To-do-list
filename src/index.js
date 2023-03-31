import './style.css';
import {
  addNewTask, getLocalStorage, editTask, deleteTask,
} from './modules/crud.js';
import { markCompleted, markUnCompleted, clearCompleted } from './modules/interaction.js';

// get ul from index.html
const ul = document.getElementById('list-items');

const addTaskToList = (task) => {
  const taskItem = document.createElement('li');
  let checkmark;
  let completedClass;
  if (task.completed === true) {
    checkmark = '<span class="material-icons checkmark">done</span>';
    completedClass = 'completed';
  }
  taskItem.classList.add('todo');
  taskItem.innerHTML = `
  <button type="button" class="checkbox ${completedClass}" >${checkmark}</button>
  <p contentEditable="true" class="desc">${task.description}</p>
  <div class="dots">
    <span class="material-icons">more_vert</span>
  </div>
  <div class="bin">
    <span class="material-symbols-outlined delete-bin">delete</span>
  </div>
  `;

  ul.appendChild(taskItem);
};

const displayTasks = () => {
  const tasks = getLocalStorage();
  tasks.forEach((task) => addTaskToList(task));
};

// Display local storage items on page
document.addEventListener('DOMContentLoaded', displayTasks);

document.querySelector('#form').addEventListener('submit', (e) => {
  e.preventDefault();

  const description = document.querySelector('#description').value;

  if (description === '') {
    return;
  }
  const newTask = {};
  newTask.description = description;
  newTask.completed = false;
  newTask.index = getLocalStorage().length + 1;
  addNewTask(newTask);
  addTaskToList(newTask);
  document.querySelector('#description').value = '';
  window.location.reload();
});

window.onload = () => {
  // event listener for bin icons
  const binIcons = document.getElementsByClassName('delete-bin');

  for (let i = 0; i < binIcons.length; i += 1) {
    const bin = binIcons[i];
    bin.addEventListener('mousedown', () => {
      deleteTask(i);
    });
  }

  // event listener for checkboxes
  const checkBoxes = document.getElementsByClassName('checkbox');

  for (let i = 0; i < checkBoxes.length; i += 1) {
    const box = checkBoxes[i];
    box.addEventListener('click', () => {
      box.classList.toggle('completed');

      if (box.classList.contains('completed')) {
        markCompleted(i);
        box.innerHTML = '<span class="material-icons checkmark">done</span>';
      } else {
        markUnCompleted(i);
        box.innerHTML = '';
      }
    });
  }

  // Event listener for task descriptions
  const taskDescriptions = document.getElementsByClassName('desc');

  for (let i = 0; i < taskDescriptions.length; i += 1) {
    const desc = taskDescriptions[i];
    desc.addEventListener('focus', (e) => {
      e.target.style.textDecoration = 'none';
      e.target.parentElement.style.background = '#fffeca';
      e.target.nextElementSibling.style.display = 'none';
      e.target.nextElementSibling.nextElementSibling.style.display = 'flex';
    });

    // will like combine blur and keypress in the future
    desc.addEventListener('blur', (e) => {
      e.target.style.textDecoration = '';
      e.target.parentElement.style.background = '';
      e.target.nextElementSibling.style.display = 'flex';
      e.target.nextElementSibling.nextElementSibling.style.display = '';

      // update description in storage
      const newText = e.target.innerHTML;
      editTask(newText, i);
    });

    desc.addEventListener('keypress', (e) => {
      if (e.keyCode === 13) {
        e.preventDefault();
        e.target.style.textDecoration = '';
        e.target.parentElement.style.background = '';
        e.target.nextElementSibling.style.display = 'flex';
        e.target.nextElementSibling.nextElementSibling.style.display = 'none';

        desc.blur();
      }
    });
  }

  // Event listener for "clear all completed"
  const clearButton = document.getElementById('clear');

  clearButton.addEventListener('click', clearCompleted, false);
};
