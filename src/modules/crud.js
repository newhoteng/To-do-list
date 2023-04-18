// Add task to storage
export const addTaskToStorage = (task, taskArray) => {
  taskArray.push(task);
  localStorage.setItem('tasks', JSON.stringify(taskArray));
};

// Add task to DOM
export const addTaskToDOM = (task, container) => {
  const li = document.createElement('li');
  li.setAttribute('id', task.index);
  li.classList.add('todo');

  if (task.completed === true) {
    li.classList.add('completed');
  }

  li.innerHTML = `
  <button type="button" class="checkbox" ><span class="material-icons checkmark">done</span></button>
  <p contentEditable="true" class="desc">${task.description}</p>
  <div class="dots">
    <span class="material-icons">more_vert</span>
  </div>
  <div class="bin ">
    <span class="material-symbols-outlined delete-bin">delete</span>
  </div>
  `;

  container.appendChild(li);
};

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