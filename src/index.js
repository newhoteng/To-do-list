import './style.css';
import {
  addNewTask, getLocalStorage, editTask, deleteTask,
} from './modules/crud.js';
import { markCompleted, markUnCompleted, clearCompleted } from './modules/interaction.js';
// localStorage.clear()

const addTaskToList = (task) => {
  const ul = document.getElementById('list-items');
  const taskItem = document.createElement('li');
  // let checkmark;
  // let completedClass;
  // if (task.completed === true) {
  //   checkmark = '<span class="material-icons checkmark">done</span>';
  //   completedClass = 'completed';
  // } ${completedClass} ${checkmark}
  taskItem.classList.add('todo');
  taskItem.innerHTML = `
  <button type="button" id=${task.index} class="checkbox "></button>
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
  // window.location.reload();
});

const ul = document.getElementById('list-items');

ul.addEventListener('input', (e) => {
  if (e.target.matches('.desc')) {
    // update description in storage
    const newText = e.target.innerHTML;
    let index = e.target.previousElementSibling.getAttribute('id');
    editTask(newText, index);
  }
})

ul.addEventListener('keypress', (e) => {
  if (e.target.matches('.desc') && e.keyCode === 13) {
    e.preventDefault();
    e.target.blur();
  }
})

// event listener for checkboxes
ul.addEventListener('click', (e) => {
  if (e.target.matches('.checkbox')) {
    e.target.classList.toggle('completed');

    let index = e.target.getAttribute('id');
    console.log(e.target);
    if (e.target.classList.contains('completed')) {
      // console.log('completed')
      e.target.innerHTML = 'done';
      markCompleted(index);
    } else {
      markUnCompleted(index);
      e.target.innerHTML = '';
    }
  }
})

ul.addEventListener('mousedown', (e) => {
  if (e.target.matches('.delete-bin')) {
    let index = e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.getAttribute('id');
    console.log(index);
    deleteTask(index);
  }
})

const binIcons = document.querySelectorAll('.delete-bin');

  for (let i = 0; i < binIcons.length; i += 1) {
    const bin = binIcons[i];
    bin.addEventListener('mousedown', () => {
      deleteTask(i);
    });
  }

// <span class="material-icons checkmark">done</span>

// Event listener for "clear all completed"
const clearButton = document.getElementById('clear');

clearButton.addEventListener('click', clearCompleted, false);
