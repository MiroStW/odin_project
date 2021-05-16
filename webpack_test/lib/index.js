"use strict";

var _lodash = _interopRequireDefault(require("lodash"));

var _myName = _interopRequireDefault(require("./myName"));

require("./style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import your function
function component() {
  const element = document.createElement('div'); // Lodash, now imported by this

  element.innerHTML = (0, _myName.default)('Miro');
  return element;
}

document.body.appendChild(component());