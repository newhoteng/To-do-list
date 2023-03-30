import { ul } from '../index.js'


// Ui's
export const displayTasks = () => {
  const tasks = getLocalStorage();
  tasks.forEach((task) => addTaskToList(task));
}

export const addTaskToList = (task) => {
  const taskItem = document.createElement('li');
  let checkmark;
  if (task.completed == true) {
    checkmark = `<span class="material-icons checkmark">done</span>`
  }
  taskItem.classList.add('todo');
  taskItem.innerHTML = `
  <button type="button" class="checkbox" id=${task.index}>${checkmark}</button>
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

export const deleteTask = (index) => {
  const tasks = getLocalStorage();
  tasks.splice(index, 1);

  for (let i = 0; i < tasks.length; i++) {
    tasks[i].index = i + 1
  }
  localStorage.setItem('tasks', JSON.stringify(tasks));
  window.location.reload();
}

export const editTask = (newtext, index) => {
  const tasks = getLocalStorage();
  // if new text is empty delete
  if (newtext == '') {
    deleteTask(index);
  } else {
    tasks[index].description = newtext;
  localStorage.setItem('tasks', JSON.stringify(tasks));
  }  
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



