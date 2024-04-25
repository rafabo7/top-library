//Storage
let myLibrary = [];

//Book object constructor
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = true;    
}

Book.prototype.toString = function bookToString () {
    return `${this.title} by ${this.author}`
}

//User interface
const booksGrid = document.querySelector(".books-grid")
const newButton = document.querySelector(".new")
const newBookForm = document.querySelector('#new-book-form')
const addButton = document.querySelector('#add-button')
const dialog = document.querySelector('dialog')

//Functions
function showDialog () {dialog.showModal()}

function createBook(){
    const title = document.querySelector('#title').value
    const author = document.querySelector('#author').value
    const pages = document.querySelector('#pages').value

    return new Book(title, author, pages)
}

function createCard(item){
    const card = document.createElement('article')
    card.classList.add("card")



    const title = document.createElement("p")
    const author = document.createElement("p")
    const pages = document.createElement("p")
    const readButton = document.createElement('button')
    const deleteButton = document.createElement('button')

    title.classList.add('card-title')
    author.classList.add('card-author')
    pages.classList.add('card-pages')

    readButton.classList.add('secondary-button', 'read')
    readButton.textContent = "Read"

    deleteButton.classList.add('red-button')
    deleteButton.setAttribute('data-index', myLibrary.indexOf(item))
    deleteButton.textContent = 'Delete'

    deleteButton.addEventListener('click', (e) => {
        //Target the elemente
        let target = e.target
        //Get the index of the element to remove
        let index = target.getAttribute('data-index')
        console.log(index)

        //Target the card of the element
        let card = target.closest('.card')
        
        //Remove book card from UI
        card.remove()

        //Remove book data from array
        myLibrary.splice(index, 1)

    })
    
        title.textContent = item.title
        author.textContent = item.author
        pages.textContent = item.pages
    
        card.appendChild(title)
        card.appendChild(author)
        card.appendChild(pages)
        card.appendChild(readButton)
        card.appendChild(deleteButton)


        booksGrid.appendChild(card)

    

}

function readStatus(){

}

//Events
newButton.addEventListener('click', showDialog)


addButton.addEventListener('click', () => {
    booksGrid.innerHTML = ""
    
    const newBook = createBook()
    
    myLibrary.push(newBook)
    
    
    newBookForm.reset()

    myLibrary.forEach((item) => {createCard(item)})
        

    

    
    
})