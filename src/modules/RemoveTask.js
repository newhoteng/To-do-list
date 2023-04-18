// Remove task from storage and DOM
export const removeTask = (taskIndex, taskArray, li) => {
  // Remove task from storage array, reset index property and set localStorage
  taskArray.splice((taskIndex - 1), 1);

  taskArray.forEach((task, index) => {
    task.index = index + 1;
  });

  localStorage.setItem('tasks', JSON.stringify(taskArray));

  // Remove corresponding li from DOM and reset id attribute of remaining li
  li.remove();
  const listOfli = document.querySelectorAll('li.todo');

  listOfli.forEach((li, index) => {
    li.setAttribute('id', index + 1);
  });
};

// Update task
export const editTask = (newtext, taskIndex, taskArray, li) => {
  // if new text is empty delete
  if (newtext === '') {
    removeTask(taskIndex, taskArray, li);
  } else {
    taskArray[taskIndex - 1].description = newtext;
    localStorage.setItem('tasks', JSON.stringify(taskArray));
  }
};