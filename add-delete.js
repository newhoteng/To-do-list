
// Creates an li with task object details and adds to ul
export const addTaskToList = (task) => {
  const ul = document.getElementById('list-items');
  const taskItem = document.createElement('li');
  let checkmark;
  let completedClass;
  if (task.completed === true) {
    checkmark = '<span class="material-icons checkmark">done</span>';
    completedClass = 'completed';
  }
  taskItem.classList.add('todo');
  taskItem.innerHTML = `
  <button type="button" class="checkbox ${completedClass}" >${checkmark}</button>
  <p contentEditable="true" class="desc">${task.description}</p>
  <div class="dots">
    <span class="material-icons">more_vert</span>
  </div>
  <div class="bin">
    <span class="material-symbols-outlined delete-bin">delete</span>
  </div>
  `;

  ul.appendChild(taskItem);
};

// Adds task object to storage array
export const addNewTask = (task) => {
  const tasks = getLocalStorage();
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

// deletes task object from storage array using index
export const deleteTask = (index) => {
  const tasks = getLocalStorage();
  tasks.splice(index, 1);

  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i].index = i + 1;
  }
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

// Removes deleted task by recreating list items from updated storage array
export const displayTasks = (tasks) => {
  tasks.forEach((task) => addTaskToList(task));
};
