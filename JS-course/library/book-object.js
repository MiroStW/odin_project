// initialise

let myLibrary = [];

class Book {
  constructor(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }

  info() {
    console.log(
      `${this.title} by ${this.author}, ${this.pages} pages, ${
        !this.isRead ? 'no read yet' : 'already read'
      }`,
    );
  }

  sayAuthor() {
    console.log(this.author);
  }
}
// add new books
function addBookToLibrary(title, author, pages, isRead) {
  const newBook = Object.create(Book);
  newBook.title = title;
  newBook.author = author;
  newBook.pages = pages;
  newBook.isRead = isRead;
  myLibrary.push(newBook);

  // save library in local storage
  storeLibrary.populateStorage();
}

// new book form
function showNewBookForm() {
  const newBookBackdrop = document.createElement('div');
  newBookBackdrop.className = 'backdrop';
  const newBookDiv = document.createElement('div');
  newBookDiv.className = 'modal';

  const cancelBtn = document.createElement('span');
  cancelBtn.className = 'modalCloseBtn material-icons md-18';
  cancelBtn.textContent = 'close';
  cancelBtn.addEventListener('click', () => newBookBackdrop.remove());
  newBookDiv.appendChild(cancelBtn);

  const newBookForm = document.createElement('form');
  newBookForm.setAttribute('onsubmit', '');

  const inputTitle = document.createElement('input');
  inputTitle.setAttribute('required', '');
  inputTitle.setAttribute('placeholder', 'Title');
  newBookForm.appendChild(inputTitle);

  const inputAuthor = document.createElement('input');
  inputAuthor.setAttribute('required', '');
  inputAuthor.setAttribute('placeholder', 'Author');
  newBookForm.appendChild(inputAuthor);

  const inputPages = document.createElement('input');
  inputPages.setAttribute('required', '');
  inputPages.setAttribute('placeholder', 'No. Pages');
  newBookForm.appendChild(inputPages);

  const inputRead = document.createElement('input');
  inputRead.setAttribute('type', 'checkbox');
  newBookForm.appendChild(inputRead);

  const inputReadLabel = document.createElement('label');
  inputReadLabel.textContent = 'Did you read this one yet?';
  newBookForm.appendChild(inputReadLabel);

  const submitBtn = document.createElement('button');
  submitBtn.textContent = 'Submit';
  submitBtn.addEventListener('click', () => {
    if (newBookForm.checkValidity()) {
      addBookToLibrary(
        inputTitle.value,
        inputAuthor.value,
        inputPages.value,
        inputRead.value,
      );
    }
  });
  newBookForm.appendChild(submitBtn);

  newBookDiv.appendChild(newBookForm);

  newBookBackdrop.appendChild(newBookDiv);
  document.body.appendChild(newBookBackdrop);
}

const newBookBtn = document.querySelector('#newbook');
newBookBtn.addEventListener('click', () => {
  showNewBookForm();
});

// display library

function displayBooks() {
  // refresh view
  Array.prototype.forEach.call(
    document.querySelectorAll('.wrapper div.box'),
    (node) => {
      node.parentNode.removeChild(node);
    },
  );

  myLibrary.forEach((book) => {
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('box');
    const propList = document.createElement('ul');
    bookDiv.appendChild(propList);
    for (const key in book) {
      if (Object.hasOwnProperty.call(book, key)) {
        const element = book[key];
        const propBullet = document.createElement('li');
        propBullet.textContent = `${key}: ${element}`;
        propList.appendChild(propBullet);
      }
    }

    // buttons
    const btnRow = document.createElement('div');
    btnRow.classList.add('btnrow');

    // remove button
    const removeBook = document.createElement('button');
    removeBook.addEventListener('click', () => {
      if (confirm(`really remove ${book.title}?`)) {
        myLibrary.splice(myLibrary.indexOf(book), 1);
        storeLibrary.populateStorage();
        bookDiv.remove();
      }
    });
    removeBook.textContent = '❌';
    btnRow.appendChild(removeBook);

    // toggle isRead button
    const toggleIsRead = document.createElement('button');
    toggleIsRead.textContent = book.isRead ? "I didn't read it" : 'I read it';
    toggleIsRead.addEventListener('click', () => {
      book.isRead = !book.isRead;
      storeLibrary.populateStorage();
    });
    btnRow.appendChild(toggleIsRead);

    bookDiv.appendChild(btnRow);

    document.querySelector('.wrapper').appendChild(bookDiv);
  });
}

// access local storage
function restoreLibrary() {
  myLibrary = JSON.parse(localStorage.getItem('myLibrary'));
  displayBooks();
}

function populateStorage() {
  localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
  restoreLibrary();
}

const storeLibrary = (() => {
  if (!localStorage.getItem('myLibrary')) {
    // add demo data
    myLibrary.push(new Book('The lean startup', 'Eric Ries', 250, true));
    myLibrary.push(
      new Book('The hard thing about hard things', 'Ben Horowitz', 300, true),
    );
    populateStorage();
  } else {
    restoreLibrary();
  }

  return { populateStorage };
})();
