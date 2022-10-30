const makeAllCaps = function (arrOfWords) {
  return new Promise((resolve, reject) => {
    resault = true;
    arrOfWords.forEach((element) => {
      if (typeof element !== "string") resault = false;
    });
    if (resault) {
      resolve(arrOfWords);
    } else {
      reject();
    }
  });
};

makeAllCaps(["name", "age", "school"])
  .then((arr) => {
    const newarr = arr.map((element) => {
      return element.toUpperCase();
    });
    return newarr;
  })
  .then((newarr) => {
    sortWords(newarr);
  })
  .catch(() => {
    console.log("the array includes other types than string");
  });

const sortWords = function (newarr) {
  console.log(newarr.sort());
};
