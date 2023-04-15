// Add task to storage
export const addTaskToStorage = (task, taskArray) => {
  taskArray.push(task);
  localStorage.setItem('tasks', JSON.stringify(taskArray));
};

export const addTaskToDOM = (task, container) => {
  const li = document.createElement('li');
  li.setAttribute('id', task.index);
  li.classList.add('todo');

  let checkmark;
  let completedClass;
  if (task.completed === true) {
    checkmark = '<span class="material-icons checkmark">done</span>';
    completedClass = 'completed';
  }
  
  li.innerHTML = `
  <button type="button" id="${task.index}" class="checkbox ${completedClass}" >${checkmark}</button>
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