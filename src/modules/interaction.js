
// Interactive functions
export const markCompleted = (taskIndex, taskArray) => {
  taskArray[taskIndex - 1].completed = true;
  localStorage.setItem('tasks', JSON.stringify(taskArray));
};

export const markUnCompleted = (taskIndex, taskArray) => {
  taskArray[taskIndex - 1].completed = false;
  localStorage.setItem('tasks', JSON.stringify(taskArray));
};

export const clearCompleted = () => {
  // const tasks = getLocalStorage();
  const newtasks = tasks.filter((task) => task.completed === false);

  for (let i = 0; i < newtasks.length; i += 1) {
    newtasks[i].index = i + 1;
  }
  localStorage.setItem('tasks', JSON.stringify(newtasks));
};