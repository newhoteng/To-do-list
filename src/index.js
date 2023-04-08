import './style.css';
import {
  addNewTask, getLocalStorage, editTask, deleteTask,
} from './modules/crud.js';
import { markCompleted, markUnCompleted, clearCompleted } from './modules/interaction.js';
// localStorage.clear() 

const addTaskToList = (task) => {
  const ul = document.getElementById('list-items');
  const taskItem = document.createElement('li');
  let completedClass;
  let checkboxBorder;
  if (task.completed === true) {
    completedClass = 'completed';
    checkboxBorder = 'none'
  } else {
    checkboxBorder = ''
  }
  taskItem.classList.add('todo');
  taskItem.innerHTML = `
  <button type="button" id=${task.index} class="checkbox" style="border: ${checkboxBorder}"><span class="material-icons checkmark ${completedClass}">done</span></button>
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
});

const ul = document.getElementById('list-items');

ul.addEventListener('input', (e) => {
  if (e.target.matches('.desc')) {
    // update description in storage
    const newText = e.target.innerHTML;
    let index = e.target.previousElementSibling.getAttribute('id');
    let li = e.target.parentElement;
    editTask(newText, index, li);
  }
})

ul.addEventListener('keypress', (e) => {
  if (e.target.matches('.desc') && e.keyCode === 13) {
    e.preventDefault();
    e.target.blur();
  }
})


// event listener for checkmark
ul.addEventListener('click', (e) => {
  if (e.target.matches('.checkmark')) {
    e.target.classList.toggle('completed');

    let index = e.target.parentElement.getAttribute('id');
    console.log(index);
    if (e.target.classList.contains('completed')) {
      e.target.parentElement.style.border = 'none';
      e.target.parentElement.nextElementSibling.style.textDecoration = 'line-through';
      e.target.parentElement.nextElementSibling.style.color = 'rgba(0, 0, 0, 0.45)'
      markCompleted(index);
    } else {
      e.target.parentElement.style.border = '';
      e.target.parentElement.nextElementSibling.style.textDecoration = 'none';
      e.target.parentElement.nextElementSibling.style.color = '';
      markUnCompleted(index);
    }
  }
})

ul.addEventListener('mousedown', (e) => {
  if (e.target.matches('.delete-bin')) {
    let index = e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.getAttribute('id');
    let li = e.target.parentElement.parentElement;
    deleteTask(index);
    li.remove()
  }
})

// Event listener for "clear all completed"
const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', clearCompleted, false);
