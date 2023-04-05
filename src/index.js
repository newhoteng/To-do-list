import './style.css';
import {
  addNewTask, tasks, editTask, deleteTask,
} from './modules/crud.js';
import { markCompleted, markUnCompleted, clearCompleted } from './modules/interaction.js';
import { bind } from 'lodash';

// get ul from index.html
// localStorage.clear()


const addTaskToList = (task) => {
  const ul = document.getElementById('list-items');
  const taskItem = document.createElement('li');
  let checkmark;
  let completedClass;
  if (task.completed === true) {
    checkmark = '<span class="material-icons checkmark">done</span>';
    completedClass = 'completed';
  }
  taskItem.classList.add('todo');
  taskItem.innerHTML = `
  <button type="button" id="${task.index}" class="checkbox ${completedClass}" >${checkmark}</button>
  <p contentEditable="true" class="desc">${task.description}</p>
  <div class="dots">
    <span class="material-icons">more_vert</span>
  </div>
  <div class="bin ">
    <span class="material-symbols-outlined delete-bin">delete</span>
  </div>
  `;

  ul.appendChild(taskItem);
};

const displayTasks = (tasks) => {
  // const tasks = tasks;
  tasks.forEach((task) => addTaskToList(task));
};

// Display local storage items on page
// document.addEventListener('DOMContentLoaded', displayTasks(tasks));

document.querySelector('#form').addEventListener('submit', (e) => {
  e.preventDefault();

  const description = document.querySelector('#description').value;

  if (description === '') {
    return;
  }
  const newTask = {};
  newTask.description = description;
  newTask.completed = false;
  newTask.index = tasks.length + 1;
  addNewTask(newTask);
  addTaskToList(newTask);
  document.querySelector('#description').value = '';
  // window.location.reload();
});



// get ul from index.html
const ul = document.getElementById('list-items');

document.addEventListener('DOMContentLoaded', () => {
  displayTasks(tasks)
  
  const desc = document.querySelectorAll('.desc');
  const but = document.querySelectorAll('.checkbox');
  const bins = document.querySelectorAll('.delete-bin');

  console.log(desc[3]);
  console.log(but);
  console.log(bins);
});

ul.addEventListener('mousedown', (e) => {

  const taskDescription = e.target.closest('.desc');
  
  taskDescription.addEventListener('focus', () => {
    taskDescription.style.textDecoration = 'none';
    taskDescription.parentElement.style.background = '#fffeca';
    taskDescription.nextElementSibling.style.display = 'none';
    taskDescription.nextElementSibling.nextElementSibling.style.display = 'flex';
  });

  // will like combine blur and keypress in the future
  taskDescription.addEventListener('blur', () => {
    taskDescription.style.textDecoration = '';
    taskDescription.parentElement.style.background = '';
    taskDescription.nextElementSibling.style.display = 'flex';
    taskDescription.nextElementSibling.nextElementSibling.style.display = '';

    // update description in storage by getting index from button id
    const newText = taskDescription.innerHTML;
    // console.log(newText);
    const index = taskDescription.previousElementSibling.getAttribute('id');
    
    editTask(newText, index);
  });

  taskDescription.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      taskDescription.style.textDecoration = '';
      taskDescription.parentElement.style.background = '';
      taskDescription.nextElementSibling.style.display = 'flex';
      taskDescription.nextElementSibling.nextElementSibling.style.display = 'none';

      taskDescription.blur();
    }
  });

})


// Event listener for "clear all completed"
const clearButton = document.getElementById('clear');

clearButton.addEventListener('click', clearCompleted, false);
