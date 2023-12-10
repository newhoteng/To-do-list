/**
 * @jest-environment jsdom
 */

import Task from '../src/modules/task.js';
import { addTaskToStorage, addTaskToDOM, displayTasks } from '../src/modules/crud.js';

describe('Task class', () => {
  test('creates a new task object', () => {
    const description = 'wash';
    const index = 1;

    const newTask = new Task(description, index);

    expect(newTask).toEqual({ description: 'wash', completed: false, index: 1 });
  });
});

describe('addTaskToStorage', () => {
  test('adds a task to the array and stores array in localStorage', () => {
    const taskArray = [];
    const task = new Task('wash', 1);

    addTaskToStorage(task, taskArray);

    expect(taskArray).toContainEqual({ description: 'wash', completed: false, index: 1 });
    expect(localStorage.getItem('tasks')).toBe(JSON.stringify(taskArray));
    expect(JSON.parse(localStorage.getItem('tasks'))).toEqual(taskArray);
  });
});

describe('addTaskToDOM', () => {
  test('adds task description to the DOM', () => {
    const task = new Task('code', 2);
    document.body.innerHTML = '<div>'
      + '  <ul id="list-items"></ul>'
      + '</div>';

    const container = document.getElementById('list-items');

    addTaskToDOM(task, container);
    const desc = document.querySelector('.desc');

    expect(desc.innerHTML).toBe('code');
  });
});

describe('displayTasks', () => {
  test('displays an array of task object in the DOM', () => {
    const taskArray = [
      { description: 'wash', completed: false, index: 1 },
      { description: 'code', completed: true, index: 2 },
      { description: 'call mum', completed: false, index: 3 },
    ];

    document.body.innerHTML = '<div>'
      + '  <ul id="list-items"></ul>'
      + '</div>';

    const container = document.getElementById('list-items');

    expect(document.querySelectorAll('.todo').length).toBe(0);

    // Act
    displayTasks(taskArray, container);

    const listItems = document.querySelectorAll('.todo');
    expect(listItems.length).toBe(3);
  });
});
