import './style.css';
/* eslint-disable import/no-cycle */
import {
  addNewTask, addTaskToList, getLocalStorage, displayTasks,

  markCompleted, markUnCompleted, editTask, deleteTask,
} from './modules/crud.js';

document.addEventListener('DOMContentLoaded', displayTasks);

// get ul from index.html
let ul; /* eslint-disable no-unused-vars */
export default ul = document.getElementById('list-items');

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
  const binIcons = document.getElementsByClassName('delete-bin');

  for (let i = 0; i < binIcons.length; i += 1) {
    const bin = binIcons[i];
    bin.addEventListener('click', () => {
      deleteTask(i);
    });
  }

  const checkBoxes = document.getElementsByClassName('checkbox');
  const taskDescriptions = document.getElementsByClassName('desc');

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
      e.stopPropagation();
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
};
