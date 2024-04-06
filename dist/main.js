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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   newData: () => (/* binding */ newData)\n/* harmony export */ });\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n\n\n\n\n\n\nconst dialog = document.querySelector('dialog')\nconst confirm = document.querySelector(\"#confirmBtn\")\nconst addProjectBtn = document.querySelector(\".addProject\")\nconst saveBtn = document.querySelector(\".saveBtn\")\nlet titleVal = \"\"\nlet dueDateVal = \"\"\nlet descriptionVal = \"\"\nlet count = 0\n\n;(0,_storage__WEBPACK_IMPORTED_MODULE_2__.projectsRetrive)()\n;(0,_storage__WEBPACK_IMPORTED_MODULE_2__.tasksRetrive)()\n\naddProjectBtn.addEventListener(\"click\", () => {\n    dialog.showModal();\n})\nconfirm.addEventListener(\"click\", function(event) {\n    event.preventDefault(); \n    titleVal = document.querySelector(\"#title\").value;\n    dueDateVal = document.querySelector(\"#duedate\").value\n    descriptionVal = document.querySelector(\"#description\").value\n    if(titleVal){\n        const data = newData(titleVal, dueDateVal, descriptionVal)\n        ;(0,_projects__WEBPACK_IMPORTED_MODULE_0__.createProject)(data.title, data.dueDate, data.description)\n        \n    }\n    dialog.close()\n});\n\nfunction newData(titleVal, dueDateVal, descriptionVal) {\n    const data = {\n        title: titleVal, \n        dueDate: dueDateVal,\n        description: descriptionVal \n    }\n    return data\n}\nsaveBtn.addEventListener(\"click\", () => {\n    (0,_storage__WEBPACK_IMPORTED_MODULE_2__.store)()\n})\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://to-do/./src/index.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createProject: () => (/* binding */ createProject)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n\n\n\n\nconst projectsTab = document.querySelector(\".projects\")\nlet count = 1\nfunction createProject(title, dueDate, description) {\n    \n    const projectContainer = document.createElement('button')\n    projectContainer.classList = \"projectContainer\"\n    projectContainer.setAttribute(\"title\", title);\n    projectContainer.setAttribute(\"duedate\", dueDate)\n    projectContainer.setAttribute(\"description\", description)\n    const titleBox = document.createElement('div')\n    const dueDateBox = document.createElement('div')\n    const descriptionBox = document.createElement('div')\n    const delProjectBtn = document.createElement('button')\n    delProjectBtn.classList = \"delProject\"\n    delProjectBtn.textContent = \"Delete Project\"\n    titleBox.textContent = title\n    dueDateBox.textContent = dueDate\n    descriptionBox.textContent = description\n    projectContainer.appendChild(titleBox)\n    projectContainer.appendChild(dueDateBox)\n    projectContainer.appendChild(descriptionBox)\n    projectContainer.appendChild(delProjectBtn)\n    projectsTab.appendChild(projectContainer)\n    \n    const addTaskBtn = document.createElement('button')\n    addTaskBtn.classList = \"addTaskBtn\"\n    addTaskBtn.textContent = \"+\"\n    projectContainer.appendChild(addTaskBtn)\n    count += 1\n    \n    addTaskBtn.addEventListener(\"click\", () => {\n        ;(0,_task__WEBPACK_IMPORTED_MODULE_0__.createTask)(projectContainer, title)\n        \n    })\n\n    delProjectBtn.addEventListener('click', (event) => {    \n        const parentElement = event.target.parentNode;\n        while (parentElement.firstChild) {\n            parentElement.removeChild(parentElement.firstChild);\n        }\n        (0,_storage__WEBPACK_IMPORTED_MODULE_1__.delProject)(parentElement)\n    \n\n    })\n\n    \n    \n\n\n\n}\n\n\n\n\n\n//# sourceURL=webpack://to-do/./src/projects.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   delProject: () => (/* binding */ delProject),\n/* harmony export */   delTask: () => (/* binding */ delTask),\n/* harmony export */   projectsRetrive: () => (/* binding */ projectsRetrive),\n/* harmony export */   store: () => (/* binding */ store),\n/* harmony export */   tasksRetrive: () => (/* binding */ tasksRetrive)\n/* harmony export */ });\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\n\nfunction store() {\n    \n    localStorage.clear()\n    \n    const projectContainers = document.querySelectorAll(\".projectContainer\");\n\n    // Loop through each project container\n    projectContainers.forEach(project => {\n        const title = project.getAttribute(\"title\");\n        const dueDate = project.getAttribute(\"duedate\")\n        const description = project.getAttribute(\"description\")\n\n\n        // Find tasks within the current project container\n        const projectTasks = project.querySelectorAll(\".task\");\n        localStorage.setItem(\"project_\" + title, dueDate + description)\n\n        // Loop through each task within the current project container\n        projectTasks.forEach((task, index) => {\n            // Store task values in local storage with a key based on project title and task index\n            localStorage.setItem(`task_${title}_${index}`, task.value);\n        });\n    });\n}\n\nfunction projectsRetrive() {\n    for(let i = 0; i < localStorage.length; i++) {\n        const key = localStorage.key(i)\n        const value = localStorage.getItem(key)\n        if(key.startsWith(\"project_\")) {\n            const title = key.substring(8)\n            const dueDate = value.substring(0, 10)\n            const description = value.substring(10) \n\n            ;(0,_projects__WEBPACK_IMPORTED_MODULE_0__.createProject)(title, dueDate, description)\n\n        }\n    }\n}\nfunction tasksRetrive() {\n    for(let i = 0; i < localStorage.length; i++) {\n        const key = localStorage.key(i)\n        const value = localStorage.getItem(key)\n        if(key.startsWith(\"task_\")) {\n            const titleLink = key.substring(5, key.length - 2)\n            const projectsList = document.querySelectorAll(\".projectContainer\")\n            for(let i = 0; i < projectsList.length; i++) {\n                if(projectsList[i].getAttribute(\"title\") == titleLink) {\n                    (0,_task__WEBPACK_IMPORTED_MODULE_1__.createTask)(projectsList[i], projectsList[i].getAttribute(\"title\"), value)\n                    \n                }\n            }\n        }\n        \n    }\n}\n\nfunction delTask(taskContainer) {\n    const id = taskContainer.id\n    const title = taskContainer.title\n    let keyFound = false;\n    const numItems = localStorage.length\n    for(let i = 0; i < numItems; i++) {\n        const key = localStorage.key(i)\n        if(key === id) {\n            localStorage.removeItem(key)\n            console.log(\"removed\")\n\n            break\n        }\n\n    }\n    \n}\n\nfunction delProject(projectContainer) {\n    const title = projectContainer.getAttribute('title')\n    const numItems = localStorage.length\n    for(let i = 0; i < numItems; i++)  {\n        const key = localStorage.key(i)\n        if(key.includes(title)) {\n            localStorage.removeItem(key)\n            console.log(\"foundkey\")\n\n        }\n\n    }\n\n}\n\n\n\n\n\n//# sourceURL=webpack://to-do/./src/storage.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createTask: () => (/* binding */ createTask)\n/* harmony export */ });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n\n\nlet count = 0\nfunction createTask(projectContainer, projectTitle, value, total) {\n    if(total) {\n        count = total        \n    }\n    \n    const taskContainer = document.createElement('div')\n    taskContainer.classList = \"taskContainer\"\n    taskContainer.id = \"task_\" + projectTitle + \"_\" + count\n    taskContainer.title = projectTitle\n    const task = document.createElement('input')\n    task.classList = \"task\"\n    task.title = projectTitle \n    count += 1\n    if (value !== 0 && value) {\n        task.value = value\n    }\n    const taskDel = document.createElement(\"button\")\n    taskDel.classList = \"taskDel\"\n    taskDel.textContent = \"X\"\n    projectContainer.appendChild(taskContainer)\n    taskContainer.appendChild(task)\n    taskContainer.appendChild(taskDel)\n\n    taskDel.addEventListener('click', (event) => {    \n        const parentElement = event.target.parentNode;\n        parentElement.remove() \n        ;(0,_storage__WEBPACK_IMPORTED_MODULE_0__.delTask)(parentElement)\n        \n        \n    \n\n    })\n        \n    \n    \n\n}\n\n\n//# sourceURL=webpack://to-do/./src/task.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;