

const add = document.querySelector('#add');
const remove = document.querySelector('#remove');
const lookfor = document.querySelector('#lookfor');
let books = document.querySelector('#books');


let t = document.querySelector('#title');
let a = document.querySelector('#autor');
let y = document.querySelector('#year');
let myLibrary= [];
//object constructor
let newBook;
function Book(title, autor, year){
    this.title = title;
    this.autor = autor;
    this.year = year;
}
function startBooks(){

    let book = new Book('The Pilgrims Progress', 'John Bunyan ', '1678');
        myLibrary.push(book);
        newBook = document.createElement('p');
        newBook.classList.add('#book1', 'book');
        books.appendChild(newBook)
        newBook.textContent = book.title + ',  ' + book.autor + ',  ' + book.year;

        book = new Book('Clarissa', 'Samuel Richardson', '1748');
        myLibrary.push(book);
        newBook = document.createElement('p');
        newBook.classList.add('#book2', 'book');
        books.appendChild(newBook);
        newBook.textContent = book.title + ',  ' + book.autor + ',  ' + book.year;
   
        book = new Book('Nineteen Eighty-Four', 'George Orwell', '1949');
        myLibrary.push(book);
        newBook = document.createElement('p');
        newBook.classList.add('#book3',  'book');
        books.appendChild(newBook)
        newBook.textContent = book.title + ',  ' + book.autor + ',  ' + book.year;
}

startBooks();
console.table(myLibrary);
console.log(myLibrary.length);
console.log(myLibrary);
//disply object values from array
//let b1 = myLibrary[0].title + ', ' + myLibrary[0].autor + ',  '+ myLibrary[0].year;
//let b2 = myLibrary[1].title + ', ' + myLibrary[1].autor + ',  '+ myLibrary[1].year;
//let b3 = myLibrary[2].title + ', ' + myLibrary[2].autor +  ',  '+ myLibrary[2].year;


//document.getElementById('book1').innerHTML = b1;
//document.getElementById('book2').innerHTML = b2;
//document.getElementById('book3').innerHTML = b3;
let x = 3;
function addBook(){
    add.addEventListener('click', () => {
        x = x + 1;
        title = t.value;
        autor = a.value;
        year = y.value;
        book= new Book(title, autor, year);
        myLibrary.push(book);
        let position = myLibrary.indexOf(book);
        newBook = document.createElement('p');
        newBook.classList.add(`#book${x}`,'book');
        books.appendChild(newBook);
        newBook.textContent = book.title + ',  ' + book.autor + ',  ' + book.year;
        console.log(book);
        console.log(position);
        console.log(myLibrary.length);
        console.table(myLibrary);

        t.value = '';
        a.value = '';
        y.value = '';
    });

}
addBook();

function lookTitle(){
    let x = t.value;
    let book_item = myLibrary.find(item => item.title == x);
    if (book_item == undefined){
        return 'Sorry, This book is not in the Library';
    }else{
        console.log(book_item);
    return x +' ' + book_item.autor + ' ' + book_item.year;
    }
}
let index;

function lookIndex(){
    let x = t.value;
    if(x != 0){
    index = myLibrary.findIndex(book => book.title == x);
    return index;
    }
}

let ix = lookIndex();
let arr = Array.from(document.querySelectorAll('.books > p'));

lookfor.addEventListener('click', () => {
    document.getElementById('dem').innerHTML = lookTitle();
    document.getElementById('book_found').innerHTML = lookIndex();
    console.log(myLibrary);
 //   ix = lookIndex();
 console.log(lookIndex());
 console.log(index);


});
   
let b1 = document.querySelector('.books > #book1');
const node = document.querySelectorAll('#books > p');

remove.addEventListener('click', (e) => {
    myLibrary.splice(index, 1);
    node[index].remove(node[index]);
    
});