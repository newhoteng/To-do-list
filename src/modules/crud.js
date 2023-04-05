// Local storage functions
// const Tasks = JSON.parse(localStorage.getItem('list')) || [];

export const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

export const addNewTask = (task) => {
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export const deleteTask = (index) => {
  tasks.splice((index), 1);

  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i].index = i + 1;
  }
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export const editTask = (newtext, index) => {
  // const tasks = getLocalStorage();
  // if new text is empty delete
  if (newtext === '') {
    deleteTask(index);
  } else {
    tasks[index].description = newtext;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
};