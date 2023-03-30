import { ul } from '../index.js'


// Ui's
export const displayTasks = () => {
  const tasks = getLocalStorage();
  tasks.forEach((task) => addTaskToList(task));
}

export const addTaskToList = (task) => {
  const taskItem = document.createElement('li');
  taskItem.classList.add('todo');
  taskItem.innerHTML = `
  <button type="button" class="checkbox" id=${task.index}></button>
  <p contentEditable="true" class="desc">${task.description}</p>
  <div class="dots">
    <span class="material-icons">more_vert</span>
  </div>
  <div class="bin">
    <span class="material-symbols-outlined delete-bin">delete</span>
  </div>
  `;
  ul.appendChild(taskItem);
}

// Using local storage
export const getLocalStorage = () => {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  return tasks;
}

export const addNewTask = (task) => {
  const tasks = getLocalStorage();
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export const editTask = (index) => {

}

export const markCompleted = (index) => {
  const tasks = getLocalStorage();
  tasks[index].completed = true;
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export const markUnCompleted = (index) => {
  const tasks = getLocalStorage();
  tasks[index].completed = false;
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export const clearAllCompleted = () => {
  const tasks = getLocalStorage();
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].completed == true) {

    }
  }
}


// const mobileMenu = document.getElementById('hamburger-icon');

// function toggleMobileMenu(menu) {
//   menu.classList.toggle('open');
// }

// mobileMenu.addEventListener('click', () => {
//   toggleMobileMenu(mobileMenu);
// });


