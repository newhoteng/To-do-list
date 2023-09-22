/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/task.js */ \"./src/modules/task.js\");\n/* harmony import */ var _modules_crud_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/crud.js */ \"./src/modules/crud.js\");\n/* harmony import */ var _modules_interaction_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/interaction.js */ \"./src/modules/interaction.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\n\n\n\n\n\n// localStorage.clear()\n\nvar taskStorage = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];\nvar ul = document.getElementById('list-items');\n\n// Display local storage items on page\ndocument.addEventListener('DOMContentLoaded', (0,_modules_crud_js__WEBPACK_IMPORTED_MODULE_2__.displayTasks)(taskStorage, ul));\n\n// Create new task from form entry\nvar form = document.querySelector('#form');\nform.addEventListener('submit', function (e) {\n  e.preventDefault();\n  var description = document.querySelector('#description').value;\n  var index = taskStorage.length + 1;\n  if (description === '') {\n    return;\n  }\n  var task = new _modules_task_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](description, index);\n  (0,_modules_crud_js__WEBPACK_IMPORTED_MODULE_2__.addTaskToStorage)(task, taskStorage);\n  (0,_modules_crud_js__WEBPACK_IMPORTED_MODULE_2__.addTaskToDOM)(task, ul);\n  // clear input field\n  form.reset();\n});\n\n// event listener for focusin/focus on task description\nul.addEventListener('focusin', function (e) {\n  if (e.target.matches('.desc')) {\n    e.target.style.textDecoration = 'none';\n    e.target.parentElement.style.background = '#fffeca';\n    e.target.nextElementSibling.style.display = 'none';\n    e.target.nextElementSibling.nextElementSibling.style.display = 'flex';\n  }\n});\n\n// listen for focusout/blur on task description\nul.addEventListener('focusout', function (e) {\n  if (e.target.matches('.desc')) {\n    e.target.style.textDecoration = '';\n    e.target.parentElement.style.background = '';\n    e.target.nextElementSibling.style.display = 'flex';\n    e.target.nextElementSibling.nextElementSibling.style.display = '';\n\n    // update description in storage\n    var li = e.target.parentElement;\n    var index = li.getAttribute('id');\n    var newText = e.target.innerHTML;\n    (0,_modules_crud_js__WEBPACK_IMPORTED_MODULE_2__.editTask)(newText, index, taskStorage, li);\n  }\n});\nul.addEventListener('keypress', function (e) {\n  if (e.target.matches('.desc')) {\n    if (e.key === 'Enter') {\n      e.preventDefault();\n      e.target.style.textDecoration = '';\n      e.target.parentElement.style.background = '';\n      e.target.nextElementSibling.style.display = 'flex';\n      e.target.nextElementSibling.nextElementSibling.style.display = 'none';\n      e.target.blur();\n    }\n  }\n});\nul.addEventListener('mousedown', function (e) {\n  setTimeout(function () {\n    if (e.target.matches('.delete-bin')) {\n      var li = e.target.parentElement.parentElement;\n      var index = li.getAttribute('id');\n      (0,_modules_crud_js__WEBPACK_IMPORTED_MODULE_2__.removeTask)(index, taskStorage, li);\n    }\n  }, 0);\n});\n\n// event listener for checkboxes\nul.addEventListener('click', function (e) {\n  if (e.target.matches('.checkmark')) {\n    var li = e.target.parentElement.parentElement;\n    var index = li.getAttribute('id');\n    li.classList.toggle('completed');\n    if (li.classList.contains('completed')) {\n      (0,_modules_interaction_js__WEBPACK_IMPORTED_MODULE_3__.markCompleted)(index, taskStorage);\n    } else {\n      (0,_modules_interaction_js__WEBPACK_IMPORTED_MODULE_3__.markUnCompleted)(index, taskStorage);\n    }\n  }\n});\n\n// Event listener for \"clear all completed\"\nvar clearButton = document.getElementById('clear');\nclearButton.addEventListener('click', function () {\n  (0,_modules_interaction_js__WEBPACK_IMPORTED_MODULE_3__.clearCompleted)(taskStorage);\n});\n\n// dragging\nul.addEventListener('dragstart', function (e) {\n  if (e.target.matches('li.todo')) {\n    e.target.classList.add('dragging');\n    setTimeout(function () {\n      e.target.style.opacity = 0;\n    }, 0);\n  }\n});\nul.addEventListener('dragend', function (e) {\n  if (e.target.matches('li.todo')) {\n    e.target.classList.remove('dragging');\n    e.target.style.opacity = 1;\n  }\n});\nvar initSortableList = function initSortableList(e) {\n  e.preventDefault();\n  var draggingItem = ul.querySelector('.dragging');\n  // Get all items except currently dragging\n  var siblings = _toConsumableArray(ul.querySelectorAll('.todo:not(.dragging)'));\n\n  // Find the sibling after which the dragging item should be placed\n  var nextSibling = siblings.find(function (sibling) {\n    return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;\n  });\n  // Inserting the dragging item before the found sibling\n  ul.insertBefore(draggingItem, nextSibling);\n  var lis = ul.querySelectorAll('.todo');\n  // console.log(lis);\n  var ids = [];\n  lis.forEach(function (li) {\n    ids.push(li.getAttribute('id'));\n  });\n\n  // Re assign id attributes based on new order\n  lis.forEach(function (li, index) {\n    li.setAttribute('id', index + 1);\n  });\n  (0,_modules_interaction_js__WEBPACK_IMPORTED_MODULE_3__.sortStorage)(ids, taskStorage);\n};\nul.addEventListener('dragover', initSortableList);\nul.addEventListener('dragenter', function (e) {\n  return e.preventDefault();\n});\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/crud.js":
/*!*****************************!*\
  !*** ./src/modules/crud.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTaskToDOM\": () => (/* binding */ addTaskToDOM),\n/* harmony export */   \"addTaskToStorage\": () => (/* binding */ addTaskToStorage),\n/* harmony export */   \"displayTasks\": () => (/* binding */ displayTasks),\n/* harmony export */   \"editTask\": () => (/* binding */ editTask),\n/* harmony export */   \"removeTask\": () => (/* binding */ removeTask)\n/* harmony export */ });\n// Add task to storage\nvar addTaskToStorage = function addTaskToStorage(task, taskArray) {\n  taskArray.push(task);\n  localStorage.setItem('tasks', JSON.stringify(taskArray));\n};\n\n// Add task to DOM\nvar addTaskToDOM = function addTaskToDOM(task, container) {\n  var li = document.createElement('li');\n  li.setAttribute('id', task.index);\n  li.setAttribute('draggable', 'true');\n  li.classList.add('todo');\n  if (task.completed === true) {\n    li.classList.add('completed');\n  }\n  li.innerHTML = \"\\n  <button type=\\\"button\\\" class=\\\"checkbox\\\" ><span class=\\\"material-icons checkmark\\\">done</span></button>\\n  <p contentEditable=\\\"true\\\" class=\\\"desc\\\">\".concat(task.description, \"</p>\\n  <div class=\\\"dots\\\">\\n    <span class=\\\"material-icons\\\">more_vert</span>\\n  </div>\\n  <div class=\\\"bin \\\">\\n    <span class=\\\"material-symbols-outlined delete-bin\\\">delete</span>\\n  </div>\\n  \");\n  container.appendChild(li);\n};\n\n// Display all tasks\nvar displayTasks = function displayTasks(taskArray, container) {\n  taskArray.forEach(function (task) {\n    addTaskToDOM(task, container);\n  });\n};\n\n// Remove task from storage and DOM\nvar removeTask = function removeTask(taskIndex, taskArray, li) {\n  // Remove task from storage array, reset index property and set localStorage\n  taskArray.splice(taskIndex - 1, 1);\n  taskArray.forEach(function (task, index) {\n    task.index = index + 1;\n  });\n  localStorage.setItem('tasks', JSON.stringify(taskArray));\n\n  // Remove corresponding li from DOM and reset id attribute of remaining li\n  li.remove();\n  var listOfli = document.querySelectorAll('li.todo');\n  listOfli.forEach(function (li, index) {\n    li.setAttribute('id', index + 1);\n  });\n};\n\n// Update task\nvar editTask = function editTask(newtext, taskIndex, taskArray, li) {\n  // if new text is empty delete\n  if (newtext === '') {\n    removeTask(taskIndex, taskArray, li);\n  } else {\n    taskArray[taskIndex - 1].description = newtext;\n    localStorage.setItem('tasks', JSON.stringify(taskArray));\n  }\n};\n\n//# sourceURL=webpack://to-do-list/./src/modules/crud.js?");

/***/ }),

/***/ "./src/modules/interaction.js":
/*!************************************!*\
  !*** ./src/modules/interaction.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearCompleted\": () => (/* binding */ clearCompleted),\n/* harmony export */   \"markCompleted\": () => (/* binding */ markCompleted),\n/* harmony export */   \"markUnCompleted\": () => (/* binding */ markUnCompleted),\n/* harmony export */   \"sortStorage\": () => (/* binding */ sortStorage)\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\n// Interactive functions\nvar markCompleted = function markCompleted(taskIndex, taskArray) {\n  taskArray[taskIndex - 1].completed = true;\n  localStorage.setItem('tasks', JSON.stringify(taskArray));\n};\nvar markUnCompleted = function markUnCompleted(taskIndex, taskArray) {\n  taskArray[taskIndex - 1].completed = false;\n  localStorage.setItem('tasks', JSON.stringify(taskArray));\n};\nvar clearCompleted = function clearCompleted(taskArray) {\n  var UnCompletedTasks = taskArray.filter(function (task) {\n    return task.completed === false;\n  });\n  taskArray.splice.apply(taskArray, [0, taskArray.length].concat(_toConsumableArray(UnCompletedTasks)));\n  taskArray.forEach(function (task, index) {\n    task.index = index + 1;\n  });\n  localStorage.setItem('tasks', JSON.stringify(taskArray));\n  var completedLi = document.querySelectorAll('li.todo.completed');\n  var uncompletedLi = document.querySelectorAll('li[class=\"todo\"]');\n  completedLi.forEach(function (li) {\n    li.remove();\n  });\n  uncompletedLi.forEach(function (li, index) {\n    li.setAttribute('id', index + 1);\n  });\n};\nvar sortStorage = function sortStorage(arrayOfIds, taskArray) {\n  var sortedtaskArray = [];\n  arrayOfIds.forEach(function (id, index) {\n    var task = taskArray.find(function (task) {\n      return task.index === Number(id);\n    });\n    task.index = index + 1;\n    sortedtaskArray.push(task);\n  });\n  taskArray.splice.apply(taskArray, [0, taskArray.length].concat(sortedtaskArray));\n  localStorage.setItem('tasks', JSON.stringify(taskArray));\n};\n\n//# sourceURL=webpack://to-do-list/./src/modules/interaction.js?");

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nvar Task = /*#__PURE__*/_createClass(function Task(description, index) {\n  var completed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n  _classCallCheck(this, Task);\n  this.description = description;\n  this.completed = completed;\n  this.index = index;\n});\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/task.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  box-sizing: border-box;\\n  padding: 0;\\n  margin: 0;\\n  scroll-behavior: smooth;\\n  text-decoration: none;\\n  list-style: none;\\n}\\n\\nhtml {\\n  color: #545862;\\n  font-size: 16px;\\n  font-family: sans-serif;\\n}\\n\\nbody {\\n  font-family: 'Open Sans', 'Lucida Grande', tahoma, verdana, arial, sans-serif;\\n  height: 100vh;\\n  height: 100svh;\\n  background: #f1f2f5;\\n  display: flex;\\n  align-items: center;\\n}\\n\\n.container {\\n  max-width: 500px;\\n  width: 100%;\\n  margin: 0 auto;\\n  text-align: left;\\n  border-radius: 3px;\\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\\n  overflow: auto;\\n}\\n\\nh2 {\\n  font-size: 16px;\\n  font-weight: 400;\\n  padding: 1rem;\\n  line-height: 20px;\\n  width: 100%;\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n  background-color: #fff;\\n}\\n\\n.title {\\n  outline: none;\\n  min-height: 15px;\\n}\\n\\n.material-symbols-outlined {\\n  font-size: 20px;\\n}\\n\\n.submit-arrow {\\n  transform: rotate(180deg) scaleY(-1);\\n  -webkit-transform: scaleY(-1);\\n  font-size: 15px;\\n}\\n\\nform {\\n  position: relative;\\n}\\n\\nform input[type=text] {\\n  width: 100%;\\n  padding: 0 40px 0 1rem;\\n  line-height: 50px;\\n  height: 50px;\\n  font-style: italic;\\n  font-size: 16px;\\n  border: none;\\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\\n  border-top: 1px solid rgba(0, 0, 0, 0.08);\\n  outline: none;\\n}\\n\\nform button {\\n  border: none;\\n  background-color: transparent;\\n  position: absolute;\\n  right: 0;\\n  top: 0;\\n  width: 40px;\\n  height: 50px;\\n  cursor: pointer;\\n  text-align: center;\\n  opacity: 0.2;\\n}\\n\\nform button:hover {\\n  opacity: 0.8;\\n}\\n\\nli.todo {\\n  position: relative;\\n  background-color: #fff;\\n  padding-left: 1rem;\\n  font-size: 1rem;\\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\\n  font-weight: 300;\\n  display: flex;\\n  align-items: center;\\n  gap: 1rem;\\n}\\n\\nli.dragging {\\n  border-bottom: none;\\n  transform: scale(0.98);\\n  -webkit-transform: scale(0.98);\\n\\n  /* opacity: 0; */\\n  border: 1px solid #2e8ae6;\\n  border-radius: 2px;\\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.35);\\n}\\n\\nli.todo .checkbox {\\n  background-color: transparent;\\n  outline: none;\\n  padding: 0;\\n  border: 2px solid #c1c1c3;\\n  cursor: pointer;\\n  color: transparent;\\n  height: 16px;\\n  width: 16px;\\n  border-radius: 2px;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n}\\n\\nli.completed .checkbox {\\n  border: none;\\n}\\n\\n.checkmark {\\n  position: absolute;\\n  color: transparent;\\n}\\n\\nli.completed .checkmark {\\n  color: #2e8ae6;\\n}\\n\\nli.todo .desc {\\n  padding: 15px 0;\\n  line-height: 20px;\\n  word-wrap: break-word;\\n  outline: none;\\n  width: calc(100% - 80px);\\n}\\n\\nli.completed .desc {\\n  color: rgba(0, 0, 0, 0.45);\\n  text-decoration: line-through;\\n}\\n\\n.todo .bin {\\n  height: 50px;\\n  display: none;\\n  align-items: center;\\n  cursor: pointer;\\n  opacity: 0.5;\\n  position: absolute;\\n  top: 0;\\n  right: 0;\\n  padding: 0 1rem;\\n  z-index: 0;\\n}\\n\\n.todo .bin:hover {\\n  opacity: 0.8;\\n}\\n\\n.desc:focus + .dots + .bin {\\n  display: flex;\\n}\\n\\n.todo .dots {\\n  opacity: 0.2;\\n  padding: 0 0.5rem;\\n  height: 50px;\\n  line-height: 0;\\n  cursor: move;\\n  display: flex;\\n  align-items: center;\\n  justify-items: center;\\n  position: absolute;\\n  top: 0;\\n  right: 0;\\n}\\n\\n.todo .dots:hover {\\n  opacity: 0.8;\\n}\\n\\n.desc:focus + .dots {\\n  display: none;\\n}\\n\\n.delete-bin {\\n  font-size: 25px;\\n  color: #333;\\n}\\n\\n.clear {\\n  border: none;\\n  background-color: transparent;\\n  margin: 1rem auto;\\n  display: block;\\n  opacity: 0.5;\\n  cursor: pointer;\\n  outline: none;\\n  font-size: 16px;\\n}\\n\\n.clear:hover {\\n  text-decoration: underline;\\n  opacity: 0.8;\\n}\\n\\n@media all and (max-width: 768px) {\\n  body {\\n    display: block;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;