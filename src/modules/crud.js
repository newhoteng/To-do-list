
// create task object
import { listOfTasks, form, description } from '../index.js';


export const addNewTask = () => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // if (description === '') {
    //   return false
    // }
    let taskObject = {};

    taskObject.description = description;
    taskObject.completed = false;
    taskObject.index = listOfTasks.length;

    listOfTasks.push(taskObject);
    

    // if (title === '' || author === '') {
    //   alert('Please fill in all fields'); // eslint-disable-line
    // } else {
    //   const book = new Book(title, author);

    //   Ui.addbooktolist(book);

    //   Store.addbook(book);

    //   Ui.clearFields();
    // }
  });
}
