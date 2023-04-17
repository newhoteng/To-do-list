
// Interactive functions
export const markCompleted = (taskIndex, taskArray) => {
  taskArray[taskIndex - 1].completed = true;
  localStorage.setItem('tasks', JSON.stringify(taskArray));
};

export const markUnCompleted = (taskIndex, taskArray) => {
  taskArray[taskIndex - 1].completed = false;
  localStorage.setItem('tasks', JSON.stringify(taskArray));
};

export const clearCompleted = (taskArray) => {
  const UnCompletedTasks = taskArray.filter((task) => task.completed === false);

  UnCompletedTasks.forEach((task, index) => {
    task.index = index + 1;
  })
 
  localStorage.setItem('tasks', JSON.stringify(UnCompletedTasks));
  window.location.reload();
};
