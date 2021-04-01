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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _initial_page_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial_page.js */ \"./src/initial_page.js\");\n/* harmony import */ var _nav_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav.js */ \"./src/nav.js\");\n/* harmony import */ var _our_restaurant_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./our_restaurant.js */ \"./src/our_restaurant.js\");\n/* harmony import */ var _our_menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./our_menu.js */ \"./src/our_menu.js\");\n\n(0,_initial_page_js__WEBPACK_IMPORTED_MODULE_0__.initial_page)();\n\n\n(0,_nav_js__WEBPACK_IMPORTED_MODULE_1__.nav)();\n\n\n\n\nconst navItems = document.querySelectorAll(\".nav div\");\n\nfor (let i = 0; i < navItems.length; i++) {\n    const item = navItems[i];\n    item.addEventListener(\"click\",() => {showContent(i)});\n}\n\nfunction showContent (index) {\n    console.log(\"item clicked: \" + index);\n    switch (index) {\n        case 0:\n            clearContent();\n            (0,_our_restaurant_js__WEBPACK_IMPORTED_MODULE_2__.restaurant_page)();\n            break;\n            \n        case 1:\n            clearContent();\n            (0,_our_menu_js__WEBPACK_IMPORTED_MODULE_3__.menu_page)();\n            break;\n\n        case 2:\n            clearContent();\n            break;\n\n        case 3:\n            clearContent();\n            break;\n\n        case 4:\n            clearContent();\n            break;\n    \n        default:\n            break;\n    }\n}\n\nfunction clearContent () {\n    const content = document.querySelector(\".main\").childNodes;\n    content.forEach(child => {child.remove()});\n}\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/initial_page.js":
/*!*****************************!*\
  !*** ./src/initial_page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initial_page\": () => (/* binding */ initial_page)\n/* harmony export */ });\nconst initial_page = () => {\n    const container = document.querySelector(\"#content\");\n\n    //header\n    const headerDiv = document.createElement(\"div\");\n    headerDiv.classList.add(\"header\");\n    const header = document.createElement(\"h1\");\n    header.textContent = \"Restaurant\";\n    headerDiv.appendChild(header);\n    container.appendChild(headerDiv);\n\n    //nav\n    const nav = document.createElement(\"div\");\n    nav.classList.add(\"nav\");\n    container.appendChild(nav);\n\n    //main\n    const main = document.createElement(\"div\");\n    main.classList.add(\"main\");\n    container.appendChild(main);\n\n}\n\n\n\n//# sourceURL=webpack://restaurant/./src/initial_page.js?");

/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"nav\": () => (/* binding */ nav)\n/* harmony export */ });\nconst nav = () => {\n    const nav = document.querySelector(\".nav\");\n    \n    const navItems = [];\n    for (let i = 0; i < 5; i++) {\n        const item = document.createElement(\"div\");\n        item.textContent = \"item \" + (i + 1);\n        navItems.push(item);\n    }\n    navItems[0].textContent = \"Our restaurant\";\n    navItems[1].textContent = \"Our menu\";\n    navItems[2].textContent = \"Contact\";\n    navItems.forEach(item => { nav.appendChild(item);});\n}\n\n\n\n\n//# sourceURL=webpack://restaurant/./src/nav.js?");

/***/ }),

/***/ "./src/our_menu.js":
/*!*************************!*\
  !*** ./src/our_menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menu_page\": () => (/* binding */ menu_page)\n/* harmony export */ });\nconst menu_page = () => {\n    const main = document.querySelector(\".main\");\n    \n    const img = document.createElement(\"img\");\n    img.setAttribute(\"src\", \"food.jpg\");\n    main.appendChild(img);\n}\n\n\n\n//# sourceURL=webpack://restaurant/./src/our_menu.js?");

/***/ }),

/***/ "./src/our_restaurant.js":
/*!*******************************!*\
  !*** ./src/our_restaurant.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"restaurant_page\": () => (/* binding */ restaurant_page)\n/* harmony export */ });\nconst restaurant_page = () => {\n    const main = document.querySelector(\".main\");\n    \n    const img = document.createElement(\"img\");\n    img.setAttribute(\"src\", \"restaurant.png\");\n    main.appendChild(img);\n}\n\n\n\n//# sourceURL=webpack://restaurant/./src/our_restaurant.js?");

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