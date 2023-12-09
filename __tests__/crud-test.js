/**
 * @jest-environment jsdom
 */

import Task from '../src/modules/task.js';
import { addTaskToStorage } from '../src/modules/crud.js';
// const { addTaskToStorage } = require('./src/modules/crud.js');

// import { addTaskToStorage, addTaskToDOM, displayTasks, removeTask, editTask } from './src/modules/crud.js';
// const { addTaskToStorage, addTaskToDOM, displayTasks, removeTask, editTask } = require('./src/modules/crud.js');


describe('Task class', () => {
  test('creates a new task object', () => {
    const description = 'wash';
    const index = 1;

    const newTask = new Task(description, index);

    expect(newTask).toEqual({description: 'wash', completed: false, index: 1})
  })
})

describe('addTaskToStorage', () => {
  test('adds a task to the array and stores array in localStorage', () => {

    const taskArray = [];
    const task = new Task('wash', 1);

    addTaskToStorage(task, taskArray);

    expect(taskArray).toContainEqual({description: 'wash', completed: false, index: 1})
    expect(localStorage.getItem('tasks')).toBe(JSON.stringify(taskArray));
    expect(JSON.parse(localStorage.getItem('tasks'))).toEqual(taskArray);
  })
})

// export const addTaskToStorage = (task, taskArray) => {
//   taskArray.push(task);
//   localStorage.setItem('tasks', JSON.stringify(taskArray));
// };

// describe('addTaskToList', () => {
//   test('add new item to list(ul)', () => {
//     // Arrange
//     const task = {description: 'wash', completed: false, index: 1}
//     document.body.innerHTML =
//     '<div>' +
//     '  <ul id="list-items"></ul>' +
//     '</div>';

//     // Act
//     addTaskToList(task);
//     const list = document.querySelectorAll('#list-items li');

//     // Assert
//     expect(list).toHaveLength(list.length);
//   });

//   test('add 2 new items to list(ul)', () => {
//     // Arrange
//     const task1 = {description: 'wash', completed: false, index: 1};
//     const task2 = {description: 'wash', completed: true, index: 1};
//     document.body.innerHTML =
//     '<div>' +
//     '  <ul id="list-items"></ul>' +
//     '</div>';

//     // Act
//     addTaskToList(task1);
//     addTaskToList(task2);
//     const list = document.querySelectorAll('#list-items li');

//     // Assert
//     expect(list).toHaveLength(list.length);
//   });
// });