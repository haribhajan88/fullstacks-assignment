"use strict";

class Book {
  constructor(title, author, isbn, isIssued = false) { this.title = title; this.author = author; this.isbn = isbn; this.isIssued = isIssued; }
  issueBook() { if (this.isIssued) return false; this.isIssued = true; return true; }
  returnBook() { this.isIssued = false; }
}
const books = [new Book("Clean Code", "Robert C. Martin", "9780132350884"), new Book("The Hobbit", "J. R. R. Tolkien", "9780547928227", true), new Book("JavaScript: The Good Parts", "Douglas Crockford", "9780596517748")];
function issueBookByIsbn(isbn) {
  const book = books.find((item) => item.isbn === isbn);
  if (!book) return console.log("Book not found.");
  console.log(book.issueBook() ? `Issued: ${book.title}` : `Already issued: ${book.title}`);
}
console.log("Available books:");
books.filter((book) => !book.isIssued).forEach((book) => console.log(`${book.title} — ${book.isbn}`));
issueBookByIsbn("9780132350884");
