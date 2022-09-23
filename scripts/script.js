"use strict";

const displayFormBtn = document.querySelector('#add-btn-container > button');
const addBookBtn = document.querySelector('#add-book-btn');
const formCloseBtn = document.querySelector('#close-btn');
const form = document.querySelector('form#add-book');

displayFormBtn.addEventListener('click', () => {
  form.style.display = 'flex';
});

addBookBtn.addEventListener('click', addBookToLibrary);

formCloseBtn.addEventListener('click', () => {
  form.style.display = 'none';
});

let library = [];

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

function addBookToLibrary() {
  let title = document.querySelector('input[name="title"]').value;
  let author = document.querySelector('input[name="author"]').value;
  let pages = document.querySelector('input[name="pages"]').value;
  let read = document.querySelector('input[name="read"]').checked;

  library.push(new Book(title, author, pages, read));
  form.reset();
}
