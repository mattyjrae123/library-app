"use strict";
let library = [];

const displayFormBtn = document.querySelector('#add-btn-container > button');
const addBookBtn = document.querySelector('#add-book-btn');
const formCloseBtn = document.querySelector('#close-btn');
const form = document.querySelector('form#add-book');

displayFormBtn.addEventListener('click', () => {
  form.style.display = 'flex';
});

addBookBtn.addEventListener('click', () => {
  let title = document.querySelector('input[name="title"]').value;
  let author = document.querySelector('input[name="author"]').value;
  let pages = Number(document.querySelector('input[name="pages"]').value);
  let read = document.querySelector('input[name="read"]').checked;

  if (!validInput(title, author, pages, read)) {
    alert('Please enter valid input');
    return;
  }

  form.reset();
  
  library.push(new Book(title, author, pages));
  const newDiv = generateBookHTML(title, author, pages, read);
  document.querySelector('main').appendChild(newDiv);
});

formCloseBtn.addEventListener('click', () => {
  form.style.display = 'none';
});

/**
 * Constructor for book objects that stores details of the book
 * @param {string} title Title of book
 * @param {string} author Author of book
 * @param {number} pages Number of pages in book
 * @param {boolean} read If book has been read
 */
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function validInput(title, author, pages, read) {
  if (!typeof title === 'string' || title.length <= 0) {
    return false;
  }

  if (!typeof author === 'string' || author.length <= 0) {
    return false;
  }

  if (!typeof pages === 'number' || (pages <= 0 || pages > 9999)) {
    return false;
  }

  if (typeof read !== 'boolean') {
    return false;
  }

  return true;
}

function generateBookHTML(title, author, pages, read) {
  const div = document.createElement('div');
  div.classList.add('book');

  if (read) {
    div.innerHTML = `<h2 class="title">'${title}'</h2>
                   <span class="author">By ${author}</span>
                   <span class="pages">${pages} pages</span>
                   <label class="read-status">Read <input type="checkbox" checked></label>
                   <button class="remove-btn">Remove</button>`;
  } else {
    div.innerHTML = `<h2 class="title">'${title}'</h2>
                   <span class="author">By ${author}</span>
                   <span class="pages">${pages} pages</span>
                   <label class="read-status">Read <input type="checkbox"></label>
                   <button class="remove-btn">Remove</button>`;
  }

  return div;
}
