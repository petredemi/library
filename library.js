

const add = document.querySelector('#add');
const remove = document.querySelector('#remove');
const lookfor = document.querySelector('#lookfor');
let books = document.querySelector('#books');
let node;
let book;
let t = document.querySelector('#title');
let a = document.querySelector('#autor');
let y = document.querySelector('#year');
const rbw = ['red', 'orange', 'green', 'blue', 'brown', 'orange'];

let myLibrary= [];
//object constructor
let newBook;
function Book(title, autor, year){
    this.title = title;
    this.autor = autor;
    this.year = year;
}
let s = 0;
function selveBooks(title, autor, year){
    s = s + 1;
    book= new Book(title, autor, year);
    myLibrary.push(book);
    newBook = document.createElement('p');
    newBook.classList.add(`book${s}`, 'book');
    books.appendChild(newBook);
   // newBook.setAttribute('style', `background:${rbw[b]}`);
    newBook.textContent = book.title + ',  ' + book.autor + ',  ' + book.year;
    node = document.querySelectorAll('#books > p');
}

selveBooks('The Pilgrims Progress', 'John Bunyan ', '1678');
selveBooks('Clarissa', 'Samuel Richardson', '1748');
selveBooks('Nineteen Eighty-Four', 'George Orwell', '1949');
selveBooks('Petre', 'Zoia', 2004);
selveBooks('Diana', 'Zoia', 2007);

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
let n = 3;
let b = 0;
function addBook(){
        node[n +1];
        x = x + 1;
      //  b = b + 1;
        b = Math.floor(Math.random() * 5);
    //    if( b == 5){ b = 0}
        title = t.value;
        autor = a.value;
        year = y.value;
        book= new Book(title, autor, year);
        myLibrary.push(book);
        let position = myLibrary.indexOf(book);
        newBook = document.createElement('p');
        newBook.classList.add(`#book${x}`,'book');
        books.appendChild(newBook);
        newBook.setAttribute('style', `background:${rbw[b]}`);
        newBook.textContent = book.title + ',  ' + book.autor + ',  ' + book.year;
        console.log(book);
        console.log(position);
        console.log(myLibrary.length);
        console.table(myLibrary);

        t.value = '';
        a.value = '';
        y.value = '';
        node = document.querySelectorAll('#books > p');
    }


add.addEventListener('click', () => { 
    addBook();
    console.log(node);
});

function lookTitle(){
    let x = t.value;
    let book_item = myLibrary.find(item => item.title == x);
    if (book_item == undefined){
        return 'Sorry, This book is not in the Library';
    }else{
    return x +', ' + 'by  ' + book_item.autor + ', ' + book_item.year;
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
lookfor.addEventListener('click', () => {
    document.getElementById('dem').innerHTML = lookTitle();
    document.getElementById('book_found').innerHTML = 'Book at index:  ' +lookIndex();
    console.log(myLibrary);
    console.log(lookIndex());
    console.log(index);
});
   
let b1 = document.querySelector('.books > #book1');
//let node = document.querySelectorAll('#books > p');
console.log(node);

remove.addEventListener('click', (e) => {
    if(index == undefined  || index == -1) return;
    myLibrary.splice(index, 1);
    node[index].remove(node[index]);
    console.log(node);

    
});