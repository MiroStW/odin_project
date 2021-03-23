// initialise

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

//access local storage

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
    displayBooks();
}

//add new books

const newBookBtn = document.querySelector("#newbook");
newBookBtn.addEventListener("click",() => {
    addBookToLibrary()
});

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

//display library

function displayBooks() {
    //refresh view
    Array.prototype.forEach.call( document.querySelectorAll(".wrapper div.box"), function( node ) {
        node.parentNode.removeChild( node );
    });

    myLibrary.forEach(book => {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("box");
        const propList = document.createElement("ul");
        bookDiv.appendChild(propList);
        for (const key in book) {
            if (Object.hasOwnProperty.call(book, key)) {
                const element = book[key];
                let propBullet = document.createElement("li");
                propBullet.textContent = key + ": " + element;
                propList.appendChild(propBullet);
            }
        }

        //buttons
        const btnRow = document.createElement("div")
        btnRow.classList.add("btnrow");

        //remove button
        const removeBook = document.createElement("button");
        removeBook.addEventListener("click", () => {
            if(confirm("really remove " + book.title + "?")) {
                myLibrary.splice(myLibrary.indexOf(book),1);
                populateStorage();
                bookDiv.remove();
            } 
        })
        removeBook.textContent="❌";
        btnRow.appendChild(removeBook);

        //toggle isRead button
        const toggleIsRead = document.createElement("button");
        toggleIsRead.textContent = book.isRead ? 
                                   "I didn't read it" : 
                                   "I read it";
        toggleIsRead.addEventListener("click", () => {
            book.isRead = !book.isRead;
            populateStorage();
        })
        btnRow.appendChild(toggleIsRead);

        bookDiv.appendChild(btnRow);

        document.querySelector(".wrapper").appendChild(bookDiv);
    });
}