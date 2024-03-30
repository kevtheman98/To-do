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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   newData: () => (/* binding */ newData)\n/* harmony export */ });\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n\n\n\n\n\nconst dialog = document.querySelector('dialog')\nconst confirm = document.querySelector(\"#confirmBtn\")\nconst addProjectBtn = document.querySelector(\".addProject\")\nconst saveBtn = document.querySelector(\".saveBtn\")\nlet titleVal = \"\"\nlet dueDateVal = \"\"\nlet descriptionVal = \"\"\nlet count = 0\n\n;(0,_storage__WEBPACK_IMPORTED_MODULE_2__.projectsRetrive)()\n;(0,_storage__WEBPACK_IMPORTED_MODULE_2__.tasksRetrive)()\n\naddProjectBtn.addEventListener(\"click\", () => {\n    dialog.showModal();\n})\nconfirm.addEventListener(\"click\", function(event) {\n    event.preventDefault(); \n    titleVal = document.querySelector(\"#title\").value;\n    dueDateVal = document.querySelector(\"#duedate\").value\n    descriptionVal = document.querySelector(\"#description\").value\n    if(titleVal){\n        const data = newData(titleVal, dueDateVal, descriptionVal)\n        ;(0,_projects__WEBPACK_IMPORTED_MODULE_0__.createProject)(data.title, data.dueDate, data.description)\n        \n    }\n    dialog.close()\n});\n\nfunction newData(titleVal, dueDateVal, descriptionVal) {\n    const data = {\n        title: titleVal, \n        dueDate: dueDateVal,\n        description: descriptionVal \n    }\n    return data\n}\nsaveBtn.addEventListener(\"click\", () => {\n    (0,_storage__WEBPACK_IMPORTED_MODULE_2__.store)()\n})\n\n\n\n\n\n//# sourceURL=webpack://to-do/./src/index.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createProject: () => (/* binding */ createProject)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\n\n\nconst projectsTab = document.querySelector(\".projects\")\nlet count = 1\nfunction createProject(title, dueDate, description) {\n    const projectContainer = document.createElement('button')\n    projectContainer.classList = \"projectContainer\"\n    projectContainer.title = title\n    const titleBox = document.createElement('div')\n    const dueDateBox = document.createElement('div')\n    const descriptionBox = document.createElement('div')\n    titleBox.textContent = title\n    dueDateBox.textContent = dueDate\n    descriptionBox.textContent = description\n    projectContainer.appendChild(titleBox)\n    projectContainer.appendChild(dueDateBox)\n    projectContainer.appendChild(descriptionBox)\n    projectsTab.appendChild(projectContainer)\n    const addTaskBtn = document.createElement('button')\n    addTaskBtn.classList = \"addTaskBtn\"\n    projectContainer.appendChild(addTaskBtn)\n    count += 1\n    localStorage.setItem(\"project_\" + title, dueDate + description)\n    addTaskBtn.addEventListener(\"click\", () => {\n        ;(0,_task__WEBPACK_IMPORTED_MODULE_0__.createTask)(projectContainer, title)\n        \n    })\n    \n\n}\n\n\n\n\n\n//# sourceURL=webpack://to-do/./src/projects.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   projectsRetrive: () => (/* binding */ projectsRetrive),\n/* harmony export */   store: () => (/* binding */ store),\n/* harmony export */   tasksRetrive: () => (/* binding */ tasksRetrive)\n/* harmony export */ });\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\n\nfunction store() {\n    const projectContainers = document.querySelectorAll(\".projectContainer\");\n\n    // Loop through each project container\n    projectContainers.forEach(project => {\n        const projectTitle = project.getAttribute(\"title\");\n\n        // Find tasks within the current project container\n        const projectTasks = project.querySelectorAll(\".task\");\n\n        // Loop through each task within the current project container\n        projectTasks.forEach((task, index) => {\n            // Store task values in local storage with a key based on project title and task index\n            localStorage.setItem(`task_${projectTitle}_${index}`, task.value);\n        });\n    });\n}\n\nfunction projectsRetrive() {\n    for(let i = 0; i < localStorage.length; i++) {\n        const key = localStorage.key(i)\n        const value = localStorage.getItem(key)\n        if(key.startsWith(\"project_\")) {\n            const title = key.substring(8)\n            const dueDate = value.substring(0, 10)\n            const description = value.substring(10) \n\n            ;(0,_projects__WEBPACK_IMPORTED_MODULE_0__.createProject)(title, dueDate, description)\n\n        }\n    }\n}\nfunction tasksRetrive() {\n    for(let i = 0; i < localStorage.length; i++) {\n        const key = localStorage.key(i)\n        const value = localStorage.getItem(key)\n        if(key.startsWith(\"task_\")) {\n            const titleLink = key.substring(5, key.length - 2)\n            const projectsList = document.querySelectorAll(\".projectContainer\")\n            for(let i = 0; i < projectsList.length; i++) {\n                if(projectsList[i].getAttribute(\"title\") == titleLink) {\n                    (0,_task__WEBPACK_IMPORTED_MODULE_1__.createTask)(projectsList[i], projectsList[i].getAttribute(\"title\"), value)\n                    \n                }\n            }\n        }\n        \n    }\n}\n        \n\n\n\n//# sourceURL=webpack://to-do/./src/storage.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createTask: () => (/* binding */ createTask)\n/* harmony export */ });\n\nfunction createTask(projectContainer, projectTitle, value = 0) {\n    const task = document.createElement('input')\n    task.classList = \"task\"\n    task.title = projectTitle\n    if (value !== 0 && value) {\n        task.value = value\n    }\n    projectContainer.appendChild(task)\n    \n    \n\n}\n\n\n//# sourceURL=webpack://to-do/./src/task.js?");

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