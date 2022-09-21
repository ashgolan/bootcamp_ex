const TheSecret = {
  name: "The Secret",
  author: "Rhonda Byrne",
  year: 2006,
};
const JavaScripTheGoodParts = {
  name: "JavaScrip The Good Parts",
  author: "Douglas Crockford",
  year: 2008,
};

const bookUtils = {
  getFirstPublished(book1, book2) {
    const smaller = book1.year < book2.year ? book1 : book2;
    return smaller;
  },
  setNewEdition(book, editionYear) {
    book.latestEdition = editionYear;
  },
  setLanguage(book, language) {
    book.language = language;
  },
  setTranslation(book, language, translator) {
    const obj = {};
    obj[translator] = language;
    book.translator = obj;
  },
  setPublisher(book, name, location) {
    const obj = {};
    obj[name] = location;
    book.publisher = obj;
  },
  isSamePublisher(book1, book2) {
    var props1 = Object.getOwnPropertyNames(book1.publisher);
    var props2 = Object.getOwnPropertyNames(book2.publisher);

    if (props1.length != props2.length) {
      return false;
    }

    for (var i = 0; i < props1.length; i++) {
      let val1 = book1.publisher[props1[i]];
      let val2 = book2.publisher[props1[i]];
      let isObjects = isObject(val1) && isObject(val2);

      if (
        (isObjects && !isEqual(val1, val2)) ||
        (!isObjects && val1 !== val2)
      ) {
        return false;
      }
    }
    return true;
  },
};

function isObject(object) {
  return object != null && typeof object === "object";
}

bookUtils.setPublisher(TheSecret, "ddd", "dddsss");
bookUtils.setPublisher(JavaScripTheGoodParts, "ddd", "dddsss");

console.log(bookUtils.isSamePublisher(TheSecret, JavaScripTheGoodParts));
