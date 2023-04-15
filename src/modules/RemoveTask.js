export const removeTask = (taskIndex, taskArray) => {
  taskArray.splice((taskIndex - 1), 1);

  taskArray.forEach((task, index) => {
    task.index = index + 1;
  })
  
  localStorage.setItem('tasks', JSON.stringify(taskArray));
};