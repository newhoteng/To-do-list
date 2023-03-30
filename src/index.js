import './style.css';
import { addNewTask, addTaskToList, getLocalStorage, displayTasks, markCompleted, markUnCompleted, editTask, deleteTask } from './modules/crud.js'

document.addEventListener('DOMContentLoaded', displayTasks);



// get ul from index.html
export const ul = document.getElementById('list-items');


document.querySelector('#form').addEventListener('submit', (e) => {
  e.preventDefault();
  const description = document.querySelector('#description').value;
  if (description == '') {
    return
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

  for (let i = 0; i < binIcons.length; i++) {
    let bin = binIcons[i];
    bin.addEventListener('click', (e) => {
      deleteTask(i);
    })
  }

  const checkBoxes = document.getElementsByClassName('checkbox');
  const taskDescriptions = document.getElementsByClassName('desc');
    
  for (let i = 0; i < checkBoxes.length; i++) {
    let box = checkBoxes[i];
    box.addEventListener('click', () => {
      box.classList.toggle('completed');
      // let index = box.getAttribute('id');
      const list = getLocalStorage();

      if (box.classList.contains('completed')) {
        markCompleted(i);
        box.innerHTML = `<span class="material-icons checkmark">done</span>`;
      } else {
        markUnCompleted(i);
        box.innerHTML = ``;
      }
    })
  }

  for (let i = 0; i < taskDescriptions.length; i++) {
    let desc = taskDescriptions[i];
    desc.addEventListener('focus', (e) => {
      e.target.style.textDecoration = 'none';
      e.target.parentElement.style.background = '#fffeca';
      e.target.nextElementSibling.style.display = 'none';
      e.target.nextElementSibling.nextElementSibling.style.display = 'flex';
    })

    // will like combine blur and keypress in the future
    desc.addEventListener('blur', (e) => {
      e.stopPropagation();
      e.target.style.textDecoration = '';
      e.target.parentElement.style.background = '';
      e.target.nextElementSibling.style.display = 'flex';
      e.target.nextElementSibling.nextElementSibling.style.display = 'flex'

      // update description in storage
      const newText = e.target.innerHTML;
      editTask(newText, i);
    })

    desc.addEventListener('keypress', (e) => {
      if (e.keyCode == 13) {
        e.preventDefault();
        e.target.style.textDecoration = '';
        e.target.parentElement.style.background = '';
        e.target.nextElementSibling.style.display = 'flex';
        e.target.nextElementSibling.nextElementSibling.style.display = 'none'

        desc.blur();
      }
    })
  }
}




