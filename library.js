

const add = document.querySelector('#add');
const remove = document.querySelector('#remove');
const lookfor = document.querySelector('#lookfor');
let shelf1 = document.querySelector('#shelf1');
let shelf2 = document.querySelector('.shelf2');
let yes = document.querySelector('#yes');
let no = document.querySelector('#no');

//radio check functions
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

function checkReading(){
    if(radio == 'yes'){
        checkY();
        uncheckN();
    } else if(radio == 'no'){
        checkN();
        uncheckY();
    }else{
        uncheck();    
    }
}
function saveChanges(){
    return radioInput();
}

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
    console.log(newBook);
    console.log(node);
}

shelfBooks('The Pilgrims Progress', 'John Bunyan ', '1678', '234','yes');
shelfBooks('Clarissa', 'Samuel Richardson', '1748', '335', 'no');
shelfBooks('Nineteen Eighty-Four', 'George Orwell', '1949', '432', 'no');
shelfBooks('Petre', 'Zoia', '2004', '231', 'yes');
shelfBooks('Diana', 'Zoia', '2007', '146', 'yes');
shelfBooks('Enigma Otiliei', 'George Călinescu', '1938', '243', 'no');
shelfBooks('Moara cu Noroc','Ioan Slavici', '1881', '323', 'yes');

console.table(myLibrary);
console.log(myLibrary.length);

let n = 0 // create node
let h = 0; //style book thikeness 
function addBook(){
    //    node[n +1];
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
        let position = myLibrary.indexOf(book);
        newBook = document.createElement('p');
        newBook.classList.add(`book${np}`,'book');
        if(myLibrary.length < 10 ){
            shelf1.appendChild(newBook);
        }else {
            shelf2.appendChild(newBook);
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
        node = document.querySelectorAll('#shelf1 > p, .shelf2 > p');
        uncheck();

    }

add.addEventListener('click', () => {
   // check();
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
    uncheck();
});

let look = false; // lookfor button linked with remove button
function lookTitle(){
    look = true;
    let xTitle = t.value;
    let book_item = myLibrary.find(item => item.title == xTitle);
    if (book_item == undefined){
        return 'Sorry, This book is not in the Library';
    }else{
    return 'title: '+ xTitle +',   by:  ' + book_item.autor + ',  year: ' + book_item.year + ',    ' + book_item.pages + ' pages.';
    }
}
let index;

function lookIndex(){
    let xIndex = t.value;
    if(xIndex != 0){
    index = myLibrary.findIndex(book => book.title == xIndex);
    console.log(index);
    return index;
    }
}
lookfor.addEventListener('click', () => {
    document.getElementById('dem').innerHTML = lookTitle();
    let z = lookIndex() + 1;
    if (z == undefined || z == -1 || z == 0) return;
    document.getElementById('book_index').innerHTML = 'Book at index:  ' + z + '  on shelf';
    if (index == undefined || index == NaN || index == -1)  return;
    else if (index != undefined || index != -1){
        a.value = myLibrary[index].autor;
        y.value = myLibrary[index].year;
        p.value = myLibrary[index].pages;
        let xRadio = myLibrary[index].radio;
        console.log(xRadio); 
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
        })
    }
    console.log(lookIndex());
    console.log(index);
    return index;
});
   
console.log(node);

remove.addEventListener('click', (e) => {
    if(index == undefined  || index == -1 || look == false) return;
    myLibrary.splice(index, 1);
    node[index].remove(index);
   
  //  node[index].remove(node[index]);

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