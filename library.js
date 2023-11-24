

const add = document.querySelector('#add');
const remove = document.querySelector('#remove');
const lookfor = document.querySelector('#lookfor');
let shelf1 = document.querySelector('#shelf1');
let shelf2 = document.querySelector('.shelf2');
let yes = document.querySelector('#yes');
let no = document.querySelector('#no');

//radio check functions Y for yes and N for no 
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

/*function checkReading(){
    if(radio == 'yes'){x
        checkY();
        uncheckN();
    } else if(radio == 'no'){
        checkN();
        uncheckY();
    }else{
        uncheck();    
    }
}*/
//function saveChanges(){
  //  return radioInput();
//}
function updateRadio(){
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
let index; // books in lybrary array;


const rbw = ['red', 'orange','darkblue','darkgreen', 'brown', 'darkorange'];
const height = ['35','40','45', '30'];

let myLibrary= [];
//object constructor
let newBook; // creates paragraph for each book on display
function Book(title, autor, year, pages, radio){
    this.title = title;
    this.autor = autor;
    this.year = year;
    this.pages = pages;
    this.radio = radio;     
}

//radioInput(yes, no);
let np = 0; // number of <p>created
function shelfBooks(title, autor, year, pages, radio){
    radioInput(yes, no);
    np = np + 1;
    book= new Book(title, autor, year, pages, radio);
    myLibrary.push(book);
    newBook = document.createElement('p');
    newBook.classList.add(`book${np}`, 'book');
    shelf1.appendChild(newBook);
    newBook.textContent = book.title + ', by: ' + book.autor + ',  ' + book.year;
    node = document.querySelectorAll('#shelf1 > p');
}

shelfBooks('The Pilgrims Progress', 'John Bunyan ', '1678', '234','yes');
shelfBooks('Clarissa', 'Samuel Richardson', '1748', '335', 'no');
shelfBooks('Nineteen Eighty-Four', 'George Orwell', '1949', '432', 'no');
shelfBooks('Petre', 'Domnica', '2004', '231', 'yes');
shelfBooks('Diana', 'Zoia', '2007', '146', 'yes');
shelfBooks('Enigma Otiliei', 'George Călinescu', '1938', '243', 'no');
shelfBooks('Moara cu Noroc','Ioan Slavici', '1881', '323', 'yes');

console.table(myLibrary);
console.log(myLibrary.length);

let n = 0 // create node
let h = 0; //style book thikeness 
function addBook(){
        np = np + 1;
        let b = Math.floor(Math.random() * 5);
        h = Math.floor(Math.random() * 4);
        title = t.value;
        autor = a.value;
        year = y.value;
        pages = p.value;
        radioInput(yes, no);
        book= new Book(title, autor, year, pages, radio);
        myLibrary.push(book);
        newBook = document.createElement('p');
        newBook.classList.add(`book${np}`,'book');
        if(myLibrary.length < 10 ){
            shelf1.appendChild(newBook);
        }else {
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
    document.getElementById('dem').innerHTML = '';
    document.getElementById('book_index').innerHTML = '';

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
    t.value = '';
    document.getElementById('dem').innerHTML = '';
    document.getElementById('book_index').innerHTML = '';
    a.value = '';
    y.value = '';
    p.value = '';
    uncheck();
})

let look = false; // lookfor button linked with remove button
function indxT(){ // find index by title
    index = myLibrary.findIndex(book => book.title == t.value);
    return index + 1;
}
function indxA(){ // find index by autor
    index = myLibrary.findIndex(book => book.autor == a.value);
    return index + 1;
}

function lookTitelAutor(){ // look for title or autor function
    look = true;
    let xTitle = t.value;
    let xAutor = a.value;
    let book_item;
    if ( xTitle != '' && xAutor == ''){
        book_item = myLibrary.find(item => item.title == xTitle);
        if(book_item == undefined){
            return 'Sorry, This book is not in the Library';

        }else{
            document.getElementById('book_index').innerHTML = 'book at index:  ' + indxT();
            t.value = myLibrary[index].title;
            a.value = myLibrary[index].autor;
            y.value = myLibrary[index].year;
            p.value = myLibrary[index].pages;
            xRadio = myLibrary[index].radio;
            updateRadio();
            return 'title: '+ xTitle +',   by:  ' + book_item.autor + ',  year: ' + book_item.year + ',    ' + book_item.pages + ' pages.';
        }
    }else if (xTitle == '' && xAutor != ''){
        book_item = myLibrary.find(item => item.autor == xAutor);
        if (book_item == undefined){
            return 'Sorry, no books by this Autor in the library';
        }else {
            document.getElementById('book_index').innerHTML = 'book at index:  ' + indxA();
            updateRadio();
        
            /*    if ( xRadio == 'yes'){          
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
            */
            return  'title:  ' + book_item.title  + ',   year: ' + book_item.year + ',  ' + book_item.pages + ' pages.';
        }
    }
}

lookfor.addEventListener('click', () => {
    if (t.value == '' && a.value == '') return;
   document.getElementById('dem').innerHTML = lookTitelAutor();
      /*  if ( xRadio == 'yes'){          
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
       */
    return index;
});
   
console.log(node);

remove.addEventListener('click', (e) => {
    if(index == undefined  || index == -1 || look == false) return;
    myLibrary.splice(index, 1);
    node[index].remove(index);
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