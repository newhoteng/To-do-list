import { addTaskToDOM } from './crud.js';
// Interactive functions
export const markCompleted = (taskIndex, taskArray) => {
  taskArray[taskIndex - 1].completed = true;
  localStorage.setItem('tasks', JSON.stringify(taskArray));
};

export const markUnCompleted = (taskIndex, taskArray) => {
  taskArray[taskIndex - 1].completed = false;
  localStorage.setItem('tasks', JSON.stringify(taskArray));
};

export const clearCompleted = (taskArray, container) => {
  const UnCompletedTasks = taskArray.filter((task) => task.completed === false);

  taskArray.splice(0, taskArray.length, ...UnCompletedTasks);
  taskArray.forEach((task, index) => {
    task.index = index + 1;
  });
  localStorage.setItem('tasks', JSON.stringify(taskArray));
  container.innerHTML = '';

  taskArray.forEach((task) => {
    addTaskToDOM(task, container);
  });
};
