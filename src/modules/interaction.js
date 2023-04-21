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

  taskArray.splice(0, taskArray.length, ...UnCompletedTasks);
  taskArray.forEach((task, index) => {
    task.index = index + 1;
  });
  localStorage.setItem('tasks', JSON.stringify(taskArray));

  const completedLi = document.querySelectorAll('li.todo.completed')
  const uncompletedLi = document.querySelectorAll('li[class="todo"]')

  completedLi.forEach(li => {
    li.remove();
  });

  uncompletedLi.forEach((li, index) => {
    li.setAttribute('id', index + 1);
  })
};
