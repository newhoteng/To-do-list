export const addTask = (task, taskArray) => {
  // Append to local storage
  taskArray.push(task);
  localStorage.setItem('tasks', JSON.stringify(taskArray));
};