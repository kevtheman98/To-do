/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/createProjects.js":
/*!*******************************!*\
  !*** ./src/createProjects.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ create)\n/* harmony export */ });\n/* harmony import */ var _makeTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeTask */ \"./src/makeTask.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n\n\n\n\n\n\n\nfunction create() {\n    const dialog = document.querySelector(\"dialog\")\n    const newListButton = document.querySelector(\"button\")\n    const container = document.querySelector(\".content\")\n    const confirmBtn = document.querySelector(\"#confirmBtn\")\n    newListButton.addEventListener(\"click\", () => {\n        dialog.showModal();\n        \n    })\n    \n    confirmBtn.addEventListener(\"click\", (event) => {\n        event.preventDefault();\n        dialog.close(title.value, duedate.value, description.value)\n\n        createProjects()\n        ;(0,_storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(title.value, duedate.value, description.value)\n    \n\n        \n    })\n    \n\n    let count = 0\n    function createProjects() {\n        const content = document.querySelector('.content')\n        const projectBox = document.createElement('button')\n        projectBox.classList = \"projectBox\"\n        count += 1\n        projectBox.setAttribute('title', title.value)\n        projectBox.setAttribute('duedate', duedate.value)\n        projectBox.setAttribute('description', description.value)\n        projectBox.setAttribute('id', count)\n        \n        const newTitle = document.createElement('div')\n        newTitle.textContent = title.value\n        newTitle.classList = 'projectTitle'\n        const newdueDate = document.createElement('div')\n        newdueDate.textContent = duedate.value\n        newdueDate.classList = 'dueDate'\n        const newDescription = document.createElement('div')\n        newDescription.textContent = description.value\n        newDescription.classList = 'description'\n        content.appendChild(projectBox)\n        projectBox.appendChild(newTitle)\n        projectBox.appendChild(newdueDate)\n        projectBox.appendChild(newDescription)\n        const createTask = document.createElement('button')\n        createTask.setAttribute('id', count)\n        createTask.classList = \"tasks\"\n        projectBox.appendChild(createTask)\n        const projectList = document.querySelectorAll('.projectBox')\n        createTask.addEventListener('click', () => {\n            for(let i = 0; i < projectList.length;i++){\n                const projectId = projectList[i].id\n                if(projectId == createTask.id) {\n                    (0,_makeTask__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(projectList[i].title, projectList[i])\n                    \n                }\n                console.log(\"This odnt work\")\n\n            }\n            \n        })\n        \n        \n    }\n    \n}\n\n\n\n\n//# sourceURL=webpack://to-do/./src/createProjects.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createProjects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createProjects */ \"./src/createProjects.js\");\n/* harmony import */ var _makeTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./makeTask */ \"./src/makeTask.js\");\n\n\n\n\n(0,_createProjects__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n;(0,_makeTask__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n\n\n//# sourceURL=webpack://to-do/./src/index.js?");

/***/ }),

/***/ "./src/makeTask.js":
/*!*************************!*\
  !*** ./src/makeTask.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ makeTask)\n/* harmony export */ });\nfunction makeTask(currentProjectTitle, currentProjectBox) {\n   let count = 0\n   if (currentProjectTitle) {\n      const taskBox = document.createElement(\"div\")\n      taskBox.classList = \"taskBox\"\n      taskBox.setAttribute('id', currentProjectTitle)\n      const todo = document.createElement(\"input\")\n      taskBox.appendChild(todo)\n      const key = `tasksFor_${currentProjectTitle}_#_${count += 1}`\n      todo.addEventListener('blur', () => {\n         localStorage.setItem(key, todo.value)\n\n      })\n      \n      const settingfunc = settings()\n      settingfunc.delbutton()\n      function settings() {\n         function delbutton() {\n            const delbutton = document.createElement('button')\n            delbutton.textContent = \"Delete\"\n            currentProjectBox.appendChild(taskBox)\n            taskBox.appendChild(delbutton)\n\n            delbutton.addEventListener('click', () => {\n               taskBox.remove()\n            })\n         }\n\n\n         return { delbutton }\n      }\n      \n   } else {\n      console.log(\"This is teh fisrt one\")\n   }\n\n}\n\n\n\n//# sourceURL=webpack://to-do/./src/makeTask.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Duplicate export 'default' (15:7)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n| }\\n| \\n> export default function checkExisting() {\\n|     if (localStorage.getItem(project_1)) {\\n|         for (let i = 0; i < localStorage.length; i++){\");\n\n//# sourceURL=webpack://to-do/./src/storage.js?");

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