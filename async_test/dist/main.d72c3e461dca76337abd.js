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

eval("// From Jake Archibald's Promises and Back:\n// http://www.html5rocks.com/en/tutorials/es6/promises/#toc-promisifying-xmlhttprequest\n\nfunction get(url) {\n  // Return a new promise.\n  return new Promise((resolve, reject) => {\n    // Do the usual XHR stuff\n    const req = new XMLHttpRequest();\n    req.open('GET', url);\n\n    req.onload = () => {\n      // This is called even on 404 etc\n      // so check the status\n      if (req.status === 200) {\n        // Resolve the promise with the response text\n        resolve(req.response);\n      } else {\n        // Otherwise reject with the status text\n        // which will hopefully be a meaningful error\n        reject(Error(req.statusText));\n      }\n    };\n\n    // Handle network errors\n    req.onerror = () => {\n      reject(Error('Network Error'));\n    };\n\n    // Make the request\n    req.send();\n  });\n}\n\n// Use it!\n// get('https://raw.githubusercontent.com/mdn/learning-area/master/javascript/oojs/json/superheroes.json')\n//   .then((response) => JSON.parse(response))\n//   .then(((heroes) => { console.log(heroes.squadName); }))\n//   .catch((error) => {\n//     console.error('Failed!', error);\n//   });\n\n\n// const img = document.createElement('img');\n// const error = document.createElement('p');\n// const btn = document.createElement('button');\n\n// const getGif = async (type) => {\n//   error.textContent = null;\n//   if (!type || type === ' ') {\n//     error.textContent = 'Please enter something to search for';\n//   } else {\n//     try {\n//       const response = await fetch(\n//         `https://api.giphy.com/v1/gifs/translate?api_key=EhJl9gN4xMqQljMllLwlEFzlQQOgIScf&s=${type}`,\n//         { mode: 'cors' },\n//       );\n//       const giphyData = await response.json();\n//       if (giphyData.data.length === 0) throw Error('bad query');\n//       if (giphyData.meta.status !== 200) throw Error('something bad happened - sorry!');\n//       img.src = giphyData.data.images.original.url;\n//     } catch (err) {\n//       error.textContent = err;\n//     }\n//   }\n// };\n\n// const input = document.createElement('input');\n// input.setAttribute('required', '');\n// input.addEventListener('input', () => {\n//   if (input.value !== null && input.value !== '') {\n//     btn.disabled = false;\n//   } else btn.disabled = true;\n// });\n// document.body.appendChild(input);\n\n// btn.addEventListener('click', () => getGif(input.value));\n// btn.textContent = 'show me!';\n// btn.disabled = true;\n\n// img.style = 'display:block';\n\n// document.body.appendChild(btn);\n// document.body.appendChild(error);\n// document.body.appendChild(img);\n\nconst Thenable = (num) => {\n  const then = (resolve, reject) => resolve(num * 2);\n  return { then };\n};\n\n(async () => {\n  const thenTry = await Thenable(2);\n  alert(thenTry);\n})();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(138));
/******/ }
]);