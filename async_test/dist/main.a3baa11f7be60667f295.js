/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["main"],{

/***/ 138:
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// From Jake Archibald's Promises and Back:\n// http://www.html5rocks.com/en/tutorials/es6/promises/#toc-promisifying-xmlhttprequest\n\nfunction get(url) {\n  // Return a new promise.\n  return new Promise((resolve, reject) => {\n    // Do the usual XHR stuff\n    const req = new XMLHttpRequest();\n    req.open('GET', url);\n\n    req.onload = () => {\n      // This is called even on 404 etc\n      // so check the status\n      if (req.status === 200) {\n        // Resolve the promise with the response text\n        resolve(req.response);\n      } else {\n        // Otherwise reject with the status text\n        // which will hopefully be a meaningful error\n        reject(Error(req.statusText));\n      }\n    };\n\n    // Handle network errors\n    req.onerror = () => {\n      reject(Error('Network Error'));\n    };\n\n    // Make the request\n    req.send();\n  });\n}\n\n// Use it!\n// get('https://raw.githubusercontent.com/mdn/learning-area/master/javascript/oojs/json/superheroes.json')\n//   .then((response) => JSON.parse(response))\n//   .then(((heroes) => { console.log(heroes.squadName); }))\n//   .catch((error) => {\n//     console.error('Failed!', error);\n//   });\nconst img = document.createElement('img');\nconst error = document.createElement('p');\nconst btn = document.createElement('button');\n\nconst getGif = (type) => {\n  if (!type || type === ' ') {\n    error.textContent = 'Please enter something to search for';\n  } else {\n    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=EhJl9gN4xMqQljMllLwlEFzlQQOgIScf&s=${type}`,\n      { mode: 'cors' })\n      .then((response) => response.json())\n      .then((response) => {\n        if (response.data.length === 0) return Promise.reject(new Error('bad query'));\n        if (response.meta.status !== 200) return Promise.reject(new Error('something bad happened - sorry!'));\n        img.src = response.data.images.original.url;\n      })\n      .catch((err) => { error.textContent = err; });\n  }\n};\n\nconst input = document.createElement('input');\ninput.setAttribute('required', '');\ninput.addEventListener('input', () => {\n  if (input.value !== null && input.value !== '') {\n    btn.disabled = false;\n  } else btn.disabled = true;\n});\ndocument.body.appendChild(input);\n\nbtn.addEventListener('click', () => getGif(input.value));\nbtn.textContent = 'show me!';\nbtn.disabled = true;\n\nimg.style = 'display:block';\n\ndocument.body.appendChild(btn);\ndocument.body.appendChild(error);\ndocument.body.appendChild(img);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(138));
/******/ }
]);