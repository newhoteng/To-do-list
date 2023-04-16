import './style.css';
import Task from './modules/task.js';
import { addTaskToStorage, addTaskToDOM } from './modules/addTask.js';
import { removeTask, editTask } from './modules/removeTask.js';

// localStorage.clear()

// import {
//   addNewTask, tasks, editTask, deleteTask,
// } from './modules/crud.js';
// import { markCompleted, markUnCompleted, clearCompleted } from './modules/interaction.js';
// import { bind } from 'lodash';

// const taskStorage = JSON.parse(localStorage.getItem('tasks')) || [];

const taskStorage = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];

const ul = document.getElementById('list-items');

const displayTasks = (taskArray, container) => {
  taskArray.forEach(task => {
    addTaskToDOM(task, container)
  });
}


// Display local storage items on page
document.addEventListener('DOMContentLoaded', displayTasks(taskStorage, ul));

// Create new task from form entry
document.querySelector('#form').addEventListener('submit', (e) => {
  e.preventDefault();
  const description = document.querySelector('#description').value;
  const index = taskStorage.length + 1;
  if (description === '') {
    return;
  }
  const task = new Task (description, index);
  addTaskToStorage(task, taskStorage);
  addTaskToDOM(task, ul);
  // clear input field
  document.querySelector('#description').value = '';
});

// event listener for focusin/focus on task description
ul.addEventListener('focusin', (e) => {
  if (e.target.matches('.desc')) {
    e.target.style.textDecoration = 'none';
    e.target.parentElement.style.background = '#fffeca';
    e.target.nextElementSibling.style.display = 'none';
    e.target.nextElementSibling.nextElementSibling.style.display = 'flex';
  }
});

// listen for focusout/blur on task description
ul.addEventListener('focusout', (e) => {
  if (e.target.matches('.desc')) {
    e.target.style.textDecoration = '';
    e.target.parentElement.style.background = '';
    e.target.nextElementSibling.style.display = 'flex';
    e.target.nextElementSibling.nextElementSibling.style.display = '';

    // editTask = (newtext, taskIndex, taskArray, li)
    // update description in storage
    const li = e.target.parentElement;
    const index = li.getAttribute('id');
    const newText = e.target.innerHTML;
    editTask(newText, index, taskStorage, li);
  }
});

ul.addEventListener('mousedown', (e) => {
  setTimeout(() => {
    if (e.target.matches('.delete-bin')) {
      const li = e.target.parentElement.parentElement
      const index = li.getAttribute('id');
      removeTask(index, taskStorage, li);
    }
  }, 0)
});

// document.getElementById("test").addEventListener('click', function (event) {
//   setTimeout( () => {
//         console.log("A clicked happend 1000ms ago")
//    }, 1000)
// })




// document.addEventListener('DOMContentLoaded', () => {
//   displayTasks(tasks)
  
//   const taskDescriptions = document.querySelectorAll('.desc');
//   const checkBoxes = document.querySelectorAll('.checkbox');
//   const binIcons = document.querySelectorAll('.delete-bin');

//   // event listener for checkboxes
//   // const checkBoxes = document.getElementsByClassName('checkbox');
//   for (let i = 0; i < checkBoxes.length; i += 1) {
//     const box = checkBoxes[i];
//     box.addEventListener('click', () => {
//       box.classList.toggle('completed');

//       if (box.classList.contains('completed')) {
//         markCompleted(i);
//         box.innerHTML = '<span class="material-icons checkmark">done</span>';
//       } else {
//         markUnCompleted(i);
//         box.innerHTML = '';
//       }
//     });
//   }

//   // Event listener for task descriptions
//   // const taskDescriptions = document.getElementsByClassName('desc');

//   for (let i = 0; i < taskDescriptions.length; i += 1) {
//     const desc = taskDescriptions[i];
//     // desc.addEventListener('focus', (e) => {
//     //   e.target.style.textDecoration = 'none';
//     //   e.target.parentElement.style.background = '#fffeca';
//     //   e.target.nextElementSibling.style.display = 'none';
//     //   e.target.nextElementSibling.nextElementSibling.style.display = 'flex';
//     // });

//     // will like combine blur and keypress in the future
//     // desc.addEventListener('blur', (e) => {
//     //   e.target.style.textDecoration = '';
//     //   e.target.parentElement.style.background = '';
//     //   e.target.nextElementSibling.style.display = 'flex';
//     //   e.target.nextElementSibling.nextElementSibling.style.display = '';

//     //   // update description in storage
//     //   const newText = e.target.innerHTML;
//     //   editTask(newText, i);
//     // });

//     desc.addEventListener('keypress', (e) => {
//       if (e.keyCode === 13) {
//         e.preventDefault();
//         e.target.style.textDecoration = '';
//         e.target.parentElement.style.background = '';
//         e.target.nextElementSibling.style.display = 'flex';
//         e.target.nextElementSibling.nextElementSibling.style.display = 'none';

//         desc.blur();
//       }
//     });
//   }

// });


// // Event listener for "clear all completed"
// const clearButton = document.getElementById('clear');

// clearButton.addEventListener('click', clearCompleted, false);
