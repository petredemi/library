

const add = document.querySelector('#add');
const remove = document.querySelector('#remove');
const lookfor = document.querySelector('#lookfor');
let books = document.querySelector('#books');
let shelf1 = document.querySelector('.shelf1');
//let input = document.querySelectorAll('fieldset > li > input');
let node;
let book;
let t = document.querySelector('#title');
let a = document.querySelector('#autor');
let y = document.querySelector('#year');
let p = document.querySelector('#pages');
const rbw = ['red', 'orange','darkblue','darkgreen', 'brown', 'darkorange'];
const height = ['35','40','45', '30'];

let myLibrary= [];
//object constructor
let newBook;
function Book(title, autor, year, pages){
    this.title = title;
    this.autor = autor;
    this.year = year;
    this.pages = pages;
}
let s = 0;
function shelfBooks(title, autor, year, pages){
    s = s + 1;
    book= new Book(title, autor, year, pages);
    myLibrary.push(book);
    newBook = document.createElement('p');
    newBook.classList.add(`book${s}`, 'book');
    books.appendChild(newBook);
   // newBook.setAttribute('style', `background:${rbw[b]}`);
    newBook.textContent = book.title + ', by: ' + book.autor + ',  ' + book.year;
    node = document.querySelectorAll('#books > p');
    console.log(newBook);
}

shelfBooks('The Pilgrims Progress', 'John Bunyan ', '1678', '234');
shelfBooks('Clarissa', 'Samuel Richardson', '1748', '335');
shelfBooks('Nineteen Eighty-Four', 'George Orwell', '1949', '432');
shelfBooks('Petre', 'Zoia', '2004', '231');
shelfBooks('Diana', 'Zoia', '2007', '146');
shelfBooks('Enigma Otiliei', 'George Călinescu', '1938', '243');
shelfBooks('Moara cu Noroc','Ioan Slavici', '1881', '323');
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
let h = 0;
function addBook(){
        node[n +1];
        x = x + 1;
      //  b = b + 1;
        let b = Math.floor(Math.random() * 5);
        h = Math.floor(Math.random() * 4);
    //    if( b == 5){ b = 0}
        title = t.value;
        autor = a.value;
        year = y.value;
        pages = p.value;
        book= new Book(title, autor, year, pages);
        myLibrary.push(book);
        let position = myLibrary.indexOf(book);
        newBook = document.createElement('p');
        newBook.classList.add(`#book${x}`,'book');
        if(myLibrary.length < 10 ){
            books.appendChild(newBook);
        }else {
            shelf1.appendChild(newBook);
        }

    //    newBook.setAttribute('style', `background:${rbw[b]}`);//`height:${height[h]}px`);
        newBook.style.backgroundColor = `${rbw[b]}`;
        newBook.style.height= `${height[h]}px`;
        newBook.textContent = book.title + ',  by:' + book.autor + ',  ' + book.year;
        console.log(book);
        console.log(position);
        console.log(myLibrary.length);
        console.table(myLibrary);

        t.value = '';
        a.value = '';
        y.value = '';
        p.value = '';
        node = document.querySelectorAll('#books > p');
    }


add.addEventListener('click', () => {
    if (t.value == 0) return; 
    addBook();
    document.getElementById('dem').innerHTML = '';
    document.getElementById('book_index').innerHTML = '';
    console.log(node);
});
t.addEventListener('click', () => {
    t.value = '';
    document.getElementById('dem').innerHTML = '';
    document.getElementById('book_index').innerHTML = '';
    a.value = '';
    y.value = '';
    p.value = '';
});

let look = false;
function lookTitle(){
    look = true;
    let x = t.value;
    let book_item = myLibrary.find(item => item.title == x);
    if (book_item == undefined){
        return 'Sorry, This book is not in the Library';
    }else{
    return 'title: '+ x +',   by:  ' + book_item.autor + ',  year: ' + book_item.year + ',    ' + book_item.pages + ' pages';
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
    let z = lookIndex() + 1;
    if (z == undefined || z == -1) return;
    document.getElementById('book_index').innerHTML = 'Book at index:  ' + z + '  on shelf';
    if (index != undefined || index != -1){
        a.value = myLibrary[index].autor;
        y.value = myLibrary[index].year;
        p.value = myLibrary[index].pages

    } 
    console.log(myLibrary);
    console.log(lookIndex());
    console.log(index);
});
   
let b1 = document.querySelector('.books > #book1');
//let node = document.querySelectorAll('#books > p');
console.log(node);

remove.addEventListener('click', (e) => {
    if(index == undefined  || index == -1 || look == false) return;
    myLibrary.splice(index, 1);
    node[index].remove(node[index]);
    look = false;
    t.value = '';
    a.value = '';
    y.value = '';
    p.value = '';

    console.log(node);

    
});