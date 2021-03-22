let myLibrary = [];

function Book(title,author,pages,isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.info = () => {
        console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${!this.isRead ? "no read yet" : "already read"}`);
    }
}

Book.prototype.sayAuthor = function() {
    console.log(this.author)
};

if(!localStorage.getItem('myLibrary')) {
    // add demo data
    myLibrary.push(new Book("The lean startup","Eric Ries",250,true));
    myLibrary.push(new Book("The hard thing about hard things","Ben Horowitz",300,true));
    populateStorage();
} else {
    restoreLibrary();
}
  
function populateStorage() {
    localStorage.setItem("myLibrary",JSON.stringify(myLibrary));
    restoreLibrary();
}

function restoreLibrary() {
    myLibrary = JSON.parse(localStorage.getItem("myLibrary"),);
}

function addBookToLibrary() {
    newBook = Object.create(Book);
    newBook.title = prompt("Which book do you want to add to the library?");
    newBook.author = prompt("Who wrote it?");
    newBook.pages = prompt("How many pages?");
    newBook.isRead = prompt("Did you read it yet?");
    myLibrary.push(newBook);

    // save library in local storage
    populateStorage();
}

const newBookBtn = document.querySelector("#newbook");
newBookBtn.addEventListener("click",() => {
    addBookToLibrary()
    displayBooks()});

function displayBooks() {
    Array.prototype.forEach.call( document.querySelectorAll("div"), function( node ) {
        node.parentNode.removeChild( node );
    });

    myLibrary.forEach(book => {
        let bookDiv = document.createElement("div");
        let propList = document.createElement("ul");
        bookDiv.appendChild(propList);
        for (const key in book) {
            if (Object.hasOwnProperty.call(book, key)) {
                const element = book[key];
                let propBullet = document.createElement("li");
                propBullet.textContent = key + ": " + element;
                propList.appendChild(propBullet);
            }
        }
        let removeBook = document.createElement("button");
        removeBook.addEventListener("click", () => {
            myLibrary.splice(myLibrary.indexOf(book),1);
            confirm("really remove " + book.title + "?") ? bookDiv.remove() : "";
        })
        removeBook.textContent="remove book"
        bookDiv.appendChild(removeBook);

        document.querySelector("body").appendChild(bookDiv);
    });
}


displayBooks();