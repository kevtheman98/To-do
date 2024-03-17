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

/***/ "./src/createProjects.js":
/*!*******************************!*\
  !*** ./src/createProjects.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createProjects: () => (/* binding */ createProjects),\n/* harmony export */   \"default\": () => (/* binding */ create)\n/* harmony export */ });\n/* harmony import */ var _makeTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeTask */ \"./src/makeTask.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n\n\n\n\n\n\n\nfunction create() {\n    const dialog = document.querySelector(\"dialog\")\n    const newListButton = document.querySelector(\"button\")\n    const container = document.querySelector(\".content\")\n    const confirmBtn = document.querySelector(\"#confirmBtn\")\n    newListButton.addEventListener(\"click\", () => {\n        dialog.showModal();\n        \n    })\n    \n    confirmBtn.addEventListener(\"click\", (event) => {\n        event.preventDefault();\n        dialog.close(title.value, duedate.value, description.value)\n\n        createProjects(title.value, duedate.value, description.value)\n        ;(0,_storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(title.value, duedate.value, description.value)\n    \n\n        \n    })\n}\n\nlet count = 0\nfunction createProjects(title, duedate, description) {\n    const content = document.querySelector('.content')\n    const projectBox = document.createElement('button')\n    projectBox.classList = \"projectBox\"\n    count += 1\n    projectBox.setAttribute('title', title)\n    projectBox.setAttribute('duedate', duedate)\n    projectBox.setAttribute('description', description)\n    projectBox.setAttribute('id', count)\n    const newTitle = document.createElement('div')\n    newTitle.textContent = title\n    newTitle.classList = 'projectTitle'\n    const newdueDate = document.createElement('div')\n    newdueDate.textContent = duedate\n    newdueDate.classList = 'dueDate'\n    const newDescription = document.createElement('div')\n    newDescription.textContent = description\n    newDescription.classList = 'description'\n    content.appendChild(projectBox)\n    projectBox.appendChild(newTitle)\n    projectBox.appendChild(newdueDate)\n    projectBox.appendChild(newDescription)\n    const createTask = document.createElement('button')\n    createTask.setAttribute('id', count)\n    createTask.classList = \"tasks\"\n    projectBox.appendChild(createTask)\n    const projectList = document.querySelectorAll('.projectBox')\n    createTask.addEventListener('click', () => {\n        for(let i = 0; i < projectList.length;i++){\n            const projectId = projectList[i].id\n            if(projectId == createTask.id) {\n                (0,_makeTask__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(projectList[i].title, projectList[i])\n                \n            }\n            console.log(\"This odnt work\")\n\n        }\n        \n    })\n    \n    \n}\n\n\n\n\n\n\n\n//# sourceURL=webpack://to-do/./src/createProjects.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createProjects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createProjects */ \"./src/createProjects.js\");\n/* harmony import */ var _makeTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./makeTask */ \"./src/makeTask.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n\n\n\n\n\n(0,_createProjects__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n;(0,_storage__WEBPACK_IMPORTED_MODULE_2__.checkExisting)()\n\n\n\n//# sourceURL=webpack://to-do/./src/index.js?");

/***/ }),

/***/ "./src/makeTask.js":
/*!*************************!*\
  !*** ./src/makeTask.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ makeTask)\n/* harmony export */ });\nlet count = 0\nfunction makeTask(currentProjectTitle, currentProjectBox) {\n   const taskBox = document.createElement(\"div\")\n   const todo = document.createElement(\"input\")\n   taskBox.classList = \"taskBox\"\n   taskBox.setAttribute('id', currentProjectTitle)\n   todo.setAttribute('id', count += 1)\n   taskBox.appendChild(todo)\n   currentProjectBox.appendChild(taskBox)\n   const key = `tasksFor_${currentProjectTitle}_#_${count}`\n   todo.addEventListener('blur', () => {\n      localStorage.setItem(key, todo.value)\n   })\n} \n   \n\n\n\n//# sourceURL=webpack://to-do/./src/makeTask.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   checkExisting: () => (/* binding */ checkExisting),\n/* harmony export */   \"default\": () => (/* binding */ storeProjects)\n/* harmony export */ });\n/* harmony import */ var _createProjects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createProjects */ \"./src/createProjects.js\");\n/* harmony import */ var _makeTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./makeTask */ \"./src/makeTask.js\");\n\n\n\n\nlet count = 0\nfunction storeProjects(title, duedate, description) {\n    const projectData = {\n        title: title,\n        duedate: duedate,\n        description: description\n    }\n    console.log(projectData)\n    const projectString = JSON.stringify(projectData)\n    const key = `project_${count += 1}`\n    localStorage.setItem(key, projectString)\n    \n}\n\nfunction checkExisting() {\n    if (localStorage.key(1) ==('project_1')) {\n        for (let i = 0; i < localStorage.length; i++){\n            const key = localStorage.key(i)\n            if(key.startsWith(\"project_\")) {\n                const projectValue = JSON.parse(localStorage.getItem(key));\n                (0,_createProjects__WEBPACK_IMPORTED_MODULE_0__.createProjects)(projectValue.title, projectValue.duedate, projectValue.description)\n            }else if (key.startsWith(\"tasksFor\")) {\n                const taskValue = (localStorage.getItem(key))\n               \n            }\n            \n        }\n    }\n}\n\n\n\n\n    \n\n\n\n//# sourceURL=webpack://to-do/./src/storage.js?");

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