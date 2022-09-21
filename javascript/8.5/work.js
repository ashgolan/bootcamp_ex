const swapObj = function (obj) {
  const newObject = {};
  for (let myObj in obj) {
    let key = obj[myObj];
    newObject[key] = myObj;
  }
};

const book = {
  name: "The Secret",
  author: "Rhonda Byrne",
  language: "English",
  publishing: 2006,
  pages: 198,
  color: "yellow",
};

swapObj(book);
