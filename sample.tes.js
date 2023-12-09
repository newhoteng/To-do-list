
/**
 * @jest-environment jsdom
 */

const { addTaskToList, addNewTask, deleteTask, displayTasks } = require('./add-delete.js')

describe('addTaskToList', () => {
  test('add new item to list(ul)', () => {
    // Arrange
    const task = {description: 'wash', completed: false, index: 1}
    document.body.innerHTML =
    '<div>' +
    '  <ul id="list-items"></ul>' +
    '</div>';

    // Act
    addTaskToList(task);
    const list = document.querySelectorAll('#list-items li');

    // Assert
    expect(list).toHaveLength(list.length);
  });

  test('add 2 new items to list(ul)', () => {
    // Arrange
    const task1 = {description: 'wash', completed: false, index: 1};
    const task2 = {description: 'wash', completed: true, index: 1};
    document.body.innerHTML =
    '<div>' +
    '  <ul id="list-items"></ul>' +
    '</div>';

    // Act
    addTaskToList(task1);
    addTaskToList(task2);
    const list = document.querySelectorAll('#list-items li');

    // Assert
    expect(list).toHaveLength(list.length);
  });
});