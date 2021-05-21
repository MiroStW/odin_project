// From Jake Archibald's Promises and Back:
// http://www.html5rocks.com/en/tutorials/es6/promises/#toc-promisifying-xmlhttprequest

function get(url) {
  // Return a new promise.
  return new Promise((resolve, reject) => {
    // Do the usual XHR stuff
    const req = new XMLHttpRequest();
    req.open('GET', url);

    req.onload = () => {
      // This is called even on 404 etc
      // so check the status
      if (req.status === 200) {
        // Resolve the promise with the response text
        resolve(req.response);
      } else {
        // Otherwise reject with the status text
        // which will hopefully be a meaningful error
        reject(Error(req.statusText));
      }
    };

    // Handle network errors
    req.onerror = () => {
      reject(Error('Network Error'));
    };

    // Make the request
    req.send();
  });
}

// Use it!
// get('https://raw.githubusercontent.com/mdn/learning-area/master/javascript/oojs/json/superheroes.json')
//   .then((response) => JSON.parse(response))
//   .then(((heroes) => { console.log(heroes.squadName); }))
//   .catch((error) => {
//     console.error('Failed!', error);
//   });
const img = document.createElement('img');
const error = document.createElement('p');
const btn = document.createElement('button');

const getGif = (type) => {
  if (!type || type === ' ') {
    error.textContent = 'Please enter something to search for';
  } else {
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=EhJl9gN4xMqQljMllLwlEFzlQQOgIScf&s=${type}`,
      { mode: 'cors' })
      .then((response) => response.json())
      .then((response) => {
        if (response.data.length === 0) return Promise.reject(new Error('bad query'));
        if (response.meta.status !== 200) return Promise.reject(new Error('something bad happened - sorry!'));
        img.src = response.data.images.original.url;
      })
      .catch((err) => { error.textContent = err; });
  }
};

const input = document.createElement('input');
input.setAttribute('required', '');
input.addEventListener('input', () => {
  if (input.value !== null && input.value !== '') {
    btn.disabled = false;
  } else btn.disabled = true;
});
document.body.appendChild(input);

btn.addEventListener('click', () => getGif(input.value));
btn.textContent = 'show me!';
btn.disabled = true;

img.style = 'display:block';

document.body.appendChild(btn);
document.body.appendChild(error);
document.body.appendChild(img);
