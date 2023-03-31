// Local storage functions
export const getLocalStorage = () => {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  return tasks;
};

export const addNewTask = (task) => {
  const tasks = getLocalStorage();
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export const deleteTask = (index) => {
  const tasks = getLocalStorage();
  tasks.splice(index, 1);

  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i].index = i + 1;
  }
  localStorage.setItem('tasks', JSON.stringify(tasks));
  window.location.reload();
};

export const editTask = (newtext, index) => {
  const tasks = getLocalStorage();
  // if new text is empty delete
  if (newtext === '') {
    deleteTask(index);
  } else {
    tasks[index].description = newtext;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
};