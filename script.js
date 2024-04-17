const myLibrary = [];
const booksGrid = document.querySelector(".books-grid")

const readButton = document.createElement('button')
readButton.classList.add('secondary-button', 'read')
readButton.textContent = "Read"



function Book(title, author, pages) {
    this.title = title;
    this. author = author;
    this.pages = pages;
    this.read = true;

    
}

Book.prototype.toString = function bookToString () {
    return `${this.title} by ${this.author}`
}

const newButton = document.querySelector(".new")
newButton.addEventListener('click', () => {
    const newBook = new Book('Robin Hood', 'John Smith', 245)
    myLibrary.push(newBook)
    alert(newBook.toString())
    console.table(myLibrary)

    myLibrary.forEach((item) => {
        const card = document.createElement('article')
        card.classList.add("card")


    
        const title = document.createElement("p")
        const author = document.createElement("p")
        const pages = document.createElement("p")
    
        title.textContent = item.title
        author.textContent = item.author
        pages.textContent = item.pages
    
        card.appendChild(title)
        card.appendChild(author)
        card.appendChild(pages)
        card.appendChild(readButton)


    
        booksGrid.appendChild(card)
    })
})