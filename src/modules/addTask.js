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
}