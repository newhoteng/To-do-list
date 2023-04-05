import { tasks } from './crud.js';
// Interactive functions
export const markCompleted = (index) => {
  // const tasks = getLocalStorage();
  tasks[index].completed = true;
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export const markUnCompleted = (index) => {
  // const tasks = getLocalStorage();
  tasks[index].completed = false;
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export const clearCompleted = () => {
  // const tasks = getLocalStorage();
  const newtasks = tasks.filter((task) => task.completed === false);

  for (let i = 0; i < newtasks.length; i += 1) {
    newtasks[i].index = i + 1;
  }
  localStorage.setItem('tasks', JSON.stringify(newtasks));
  window.location.reload();
};