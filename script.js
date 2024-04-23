const myLibrary = [];
const booksGrid = document.querySelector(".books-grid")

//Targeting the inner "+ Add" button, inside the form.
const addButton = document.querySelector('#add-button')




function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = true;

    
}

Book.prototype.toString = function bookToString () {
    return `${this.title} by ${this.author}`
}

const newButton = document.querySelector(".new")
newButton.addEventListener('click', () => {

    const dialog = document.querySelector('dialog')
    dialog.showModal()
    
})

addButton.addEventListener('click', () => {
    booksGrid.innerHTML = ""

    const title = document.querySelector('#title')
    const author = document.querySelector('#author')
    const pages = document.querySelector('#pages')

    const newBook = new Book(title.value, author.value, pages.value)
    
    title.value = ""
    author.value = ""
    pages.value = ""

    myLibrary.push(newBook)

    myLibrary.forEach((item) => {
        const card = document.createElement('article')
        card.classList.add("card")


    
        const title = document.createElement("p")
        const author = document.createElement("p")
        const pages = document.createElement("p")
        const readButton = document.createElement('button')
    
        title.textContent = item.title
        author.textContent = item.author
        pages.textContent = item.pages
    
        card.appendChild(title)
        card.appendChild(author)
        card.appendChild(pages)
        card.appendChild(readButton)

        readButton.classList.add('secondary-button', 'read')
        readButton.textContent = "Read"

        booksGrid.appendChild(card)

    })

    

    
    
})