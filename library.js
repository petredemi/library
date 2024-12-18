const add = document.querySelector('#add');
const remove = document.querySelector('#remove');
const lookfor = document.querySelector('#lookfor');
let shelf1 = document.querySelector('#shelf1');
let shelf2 = document.querySelector('.shelf2');
let yes = document.querySelector('#yes');
let no = document.querySelector('#no');
let books_found = document.querySelector('#books_found');
let full = document.querySelector('.full');
shelf2.style.display = 'none';
let newBook; // creates paragraph for each book on display

function checkY() { 
    document.getElementById("yes").checked = true;
  }
function uncheckY(){
    document.getElementById('yes').checked = false;
  }
function checkN(){
    document.getElementById('no').checked  = true;
}
function uncheckN(){
    document.getElementById('no').checked  = false;
}
function uncheck(){
    document.getElementById('yes').checked = false;
    document.getElementById('no').checked = false;
}
function radioInput(yes, no){
    if( yes.checked == true && no.checked ==false){
        radio = 'yes';
        checkY();
        uncheckN();
    }else if(yes.checked == false && no.checked == true){
        radio = 'no';
        checkN();
        uncheckY();
    }else{
        radio = '';
    }
    return radio;
}

function updateRadio(){ // update radio buttons after search for title or autor
        if ( xRadio == 'yes'){          
            checkY();
        }else if (xRadio == 'no'){
            checkN();
        }
        yes.addEventListener('click', () => {
            myLibrary[index].radio = 'yes';
        });
        no.addEventListener('click', () => {
            myLibrary[index].radio = 'no'
        });
}

let node; // node created -nodelist
let book; // book object for each book added
let t = document.querySelector('#title');
let a = document.querySelector('#autor');
let y = document.querySelector('#year');
let p = document.querySelector('#pages');
let index; // books in library array;
let myLibrary= [];
let np = myLibrary.length; //number of p elements-books

//books covers color and thikness
const rbw = ['red', 'orange','darkblue','darkgreen', 'brown', 'darkorange'];
const height = ['25','35','45', '50'];
function initialBooks(){
        let txt = localStorage.getItem('testjson')
        console.log(txt)
    if(txt == null){
        shelfBooks('The Happy Prince and Other Tales', 'Oscar Wild', '1888', '189', 'yes', 2, 1);
        shelfBooks('Enigma Otiliei', 'George Calinescu', '1938', '243', 'no', 0, 3);
        let localmemory = JSON.stringify(myLibrary)
        localStorage.setItem('testjson', localmemory)
    }else{
        getBook()
    }
}
function getBook(){
    let text = localStorage.getItem('testjson');
    let mymem = JSON.parse(text);
    if(mymem.length == null){return}
    for(let i = 0; i < mymem.length; i++){
       shelfBooks(mymem[i].title, mymem[i].autor, mymem[i].year, mymem[i].pages, mymem[i].radio, mymem[i].color, mymem[i].thickness)
    }
    console.log(mymem)
}
//shelfBooks('The Happy Prince and Other Tales', 'Oscar Wild', '1888', '189', 'yes', 2, 2);
function Book(title, autor, year, pages, radio, color, thickness){
    this.title = title;
    this.autor = autor;
    this.year = year;
    this.pages = pages;
    this.radio = radio;
    this.color = color;
    this.thickness = thickness;     
}

// number of books created
//class Clas{ //create objects by class
//    np = np + 1;
//        constructor(title, autor, year, pages, radio){
//        this.title = title;
//        this.autor = autor;
//        this.year = year;
//        this.pages = pages;
//        this.radio = radio;     
//    }
//        shelfBooks(){
//            np = np + 1;
//            myLibrary.push(constructor);
//            newBook = document.createElement('p');
//            newBook.classList.add(`book${np}`, 'book');
//            shelf1.appendChild(newBook);
//            newBook.textContent = this.title + ', by: ' + this.autor + ',  ' + this.year;
//            node = document.querySelectorAll('#shelf1 > p');
//    }
//}
//let book1 = new Clas('Moara cu Noroc','Ioan Slavici', '1881', '323', 'yes');
//let book2 = new Clas('Enigma Otiliei', 'George Călinescu', '1938', '243', 'no');
//let book3 = new Clas('The Happy Prince and Other Tales', 'Oscar Wild', '1888', '189', 'yes');
//book1.shelfBooks();
//book2.shelfBooks();
//book3.shelfBooks();
////create object by function
  function shelfBooks(title, autor, year, pages, radio, c, h){
        radioInput(yes, no);
        np = np + 1;
        book= new Book(title, autor, year, pages, radio, c, h);
        myLibrary.push(book);
        newBook = document.createElement('p');
        newBook.classList.add(`book${np}`, 'book');
        if(myLibrary.length < 7 ){
            shelf1.appendChild(newBook);
        }else if(myLibrary.length > 6){
            shelf2.style.display = 'flex'
            shelf2.appendChild(newBook);
        }
        newBook.style.backgroundColor = `${rbw[c]}`;
        newBook.style.height= `${height[h]}px`;
        newBook.textContent = book.title + ', by: ' + book.autor + ',  ' + book.year;
        node = document.querySelectorAll('#shelf1 > p');
    }
    
//radioInput(yes, no);
initialBooks()
//getBook();
//shelfBooks('The Happy Prince and Other Tales', 'Oscar Wild', '1888', '189', 'yes', '2', '2');
//shelfBooks('Enigma Otiliei', 'George Calinescu', '1938', '243', 'no');
//shelfBooks('Moara cu Noroc','Ioan Slavici', '1881', '323', 'yes');
console.log(np)
//getBook()
console.table(myLibrary);
console.log(myLibrary.length);

function addBook(){
    if (myLibrary.length > 12){
        full.textContent = 'shelves are full';
        return;
    }
        np = np + 1;
        let b = Math.floor(Math.random() * 5);
        let h = Math.floor(Math.random() * 4);
        title = t.value;
        autor = a.value;
        year = y.value;
        pages = p.value;
        color = b;
        thickness = h;
        radioInput(yes, no);
        book= new Book(title, autor, year, pages, radio, b, h);
        myLibrary.push(book);
        newBook = document.createElement('p');
        newBook.classList.add(`book${np}`,'book');
        if(myLibrary.length < 7 ){
            shelf1.appendChild(newBook);
        }else if(myLibrary.length > 6){
            shelf2.style.display = 'flex'
            shelf2.appendChild(newBook);
        }
        newBook.style.backgroundColor = `${rbw[b]}`;
        newBook.style.height= `${height[h]}px`;
        newBook.textContent = book.title + ',  by:' + book.autor + ',  ' + book.year;
        t.value = '';
        a.value = '';
        y.value = '';
        p.value = '';
        node = document.querySelectorAll('#shelf1 > p, .shelf2 > p');
        uncheck();

    }

add.addEventListener('click', () => { // add book at library
    if (t.value == 0) return; 
    addBook();
   let localmemory = JSON.stringify(myLibrary)
    localStorage.setItem('testjson', localmemory)
    document.getElementById('dem').innerHTML = '';
    document.getElementById('book_index').innerHTML = '';
    console.table(myLibrary)

});
t.addEventListener('click', () => { //clear the form and save read status
    t.value = '';
    document.getElementById('dem').innerHTML = '';
    document.getElementById('book_index').innerHTML = '';
    a.value = '';
    y.value = '';
    p.value = '';
    uncheck();
});
a.addEventListener('click', () => {
    document.getElementById('dem').innerHTML = '';
    document.getElementById('book_index').innerHTML = '';
    a.value = '';
    y.value = '';
    p.value = '';
    uncheck();
})

let look = false; // lookfor button linked with remove button
function indxT(){ // find index by title
    index = myLibrary.findIndex(book => book.title.toLowerCase() == t.value.toLowerCase());
    return index;
}
function indxA(){ // find index by autor
    index = myLibrary.findIndex(book => book.autor.toLowerCase() == a.value.toLowerCase());
    console.log(index)
    console.log(typeof(index))
    return index;
}
function lookTitelAutor(){ // look for title or autor function
    look = true;
    let inxtitle = indxT();
    let inxautor = indxA()
   if (t.value != '' && a.value == ''){
        if (inxtitle == -1){
            return 'Sorry, This book is not in the Library';

        }else{
            document.getElementById('book_index').innerHTML = 'book at index:  ' + (indxT() + 1);
            a.value = myLibrary[index].autor;
            y.value = myLibrary[index].year;
            p.value = myLibrary[index].pages;
            xRadio = myLibrary[index].radio;
            updateRadio();
            return 'title: '+ myLibrary[index].title +', by:  ' + myLibrary[index].autor + ',  year: ' + myLibrary[index].year + ',    ' + myLibrary[index].pages + ' pages.';
        }
    }else if (t.value == '' && a.value != ''){
        if (inxautor == -1){
            return 'Sorry, no books by this Autor in the library';
        }else {
          //  updateRadio();
            document.getElementById('book_index').innerHTML = 'book at index:  ' + (indxA() + 1);
            return  'title:  ' + myLibrary[index].title  + ',   year: ' +myLibrary[index].year + ',  ' + myLibrary[index].pages + ' pages.';
        }
    }
}

lookfor.addEventListener('click', () => {
    if (t.value == '' && a.value == '') return;
   document.getElementById('dem').innerHTML = lookTitelAutor();
    return index;
});
remove.addEventListener('click', (e) => {
    if(index == undefined  || index == -1 || look == false) return;
    myLibrary.splice(index, 1);
    node[index].remove(index);
    let localmemory = JSON.stringify(myLibrary)
    localStorage.setItem('testjson', localmemory)
    full.textContent = ''
    index = '';
    look = false;
    t.value = '';
    a.value = '';
    y.value = '';
    p.value = '';
    document.getElementById('dem').innerHTML = '';
    document.getElementById('book_index').innerHTML = '';
    uncheck();
    console.log(node);
    console.table(myLibrary);
    node = document.querySelectorAll('#shelf1 > p, .shelf2 > p');
});