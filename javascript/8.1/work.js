const book = {
  name: "The Secret",
  author: "Rhonda Byrne",
  language: "English",
  publishing: 2006,
  pages: 198,
  color: "yellow",
};

const bookFunc = function (book) {
  return `The book '${book.name}' was written by ${book.author} in
  the year ${book.publishing}`;
};

console.log(bookFunc(book));
