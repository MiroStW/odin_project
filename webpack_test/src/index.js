// import your function
import myName from './myName';

function component() {
    const element = document.createElement('div');
  
    // Lodash, now imported by this
    element.innerHTML = myName('Miro');
  
    return element;
  }
  
  document.body.appendChild(component());

  