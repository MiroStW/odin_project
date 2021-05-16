// import your function
import _ from 'lodash';
import myName from './myName';
import './style.css';

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this
  element.innerHTML = myName('Miro');

  return element;
}

document.body.appendChild(component());
