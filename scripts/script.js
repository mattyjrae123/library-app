"use strict";

const addBookBtn = document.querySelector('#add-btn-container > button');
const formCancelBtn = document.querySelector('#cancel-btn');
const form = document.querySelector('form#add-book');

addBookBtn.addEventListener('click', () => {
  form.style.display = 'flex';
});

formCancelBtn.addEventListener('click', () => {
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
