import './style.css';

const tasks = [
  {
    description: 'wash the dishes',
    completed: false,
    index: 0,
  },
  {
    description: 'complete To Do list project',
    completed: false,
    index: 1,
  },
  {
    description:
    'finish python exercises',
    completed: true,
    index: 2,
  },
];

// get ul from index.html
const taskContainer = document.getElementById('list-items');

tasks.forEach((task) => {
  const taskItem = document.createElement('li');
  taskItem.classList.add('todo');
  taskItem.innerHTML = `
  <button class="checkbox"></button>
  <p class="">${task.description}</p>
  <div class="dots">
    <span class="material-icons">more_vert</span>
  </div>
  `;
  taskContainer.appendChild(taskItem);
});