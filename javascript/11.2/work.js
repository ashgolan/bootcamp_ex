console.log(`--------------- 1 ---------------`);
const doubleValues = function (arr) {
  arr.map((element) => {
    console.log(element * 2);
  });
};
const newArr = [2, 5, 8, 9];
doubleValues(newArr);
console.log(`--------------- 2 ---------------`);
const onlyEvenValues = function (arr) {
  arr.map((element) => {
    if (element % 2 != 0) console.log(element);
  });
};
const newArr2 = [2, 5, 8, 9];
onlyEvenValues(newArr2);

console.log(`-------------- 3 ---------------`);

const arr3 = ["alaa", "NOOR", 4, 12, "mais", 34, "anat"];
const newArr3 = [];
const showFirstAndLast = arr3.forEach((element) => {
  if (typeof element === "string")
    if (newArr3.length < 2) newArr3.push(element);
    else newArr3[1] = element;
});
console.log(newArr3);

console.log(`-------------- 4 ----------------`);

let str4 = "alaa shaalan EinKynia";
str4 = str4.toLowerCase().split("");
let vowelCount = {};
str4.forEach((e) => {
  if (e === "a" || e === "o" || e === "i" || e === "u" || e === "e") {
    if (vowelCount[e]) vowelCount[e]++;
    else vowelCount[e] = 1;
  }
});

console.log(vowelCount);

console.log(`--------------- 5 ---------------`);

const capitalized = function (str5) {
  str5 = str5.split(" ");
  const capital = str5.map((e) => {
    return e.toUpperCase();
  });
  return capital.join(" ");
};

console.log(capitalized("alaa shaalan EinKynia"));

console.log(`--------------- 6 ---------------`);

const shiftingLetters = function (str) {
  str = str.split("");
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const mappingStr = str.map((m) => {
    const indexOfChar = alphabet.indexOf(m);
    if (indexOfChar === 0) return alphabet[alphabet.length - 1];
    return alphabet[indexOfChar - 1];
  });
  return mappingStr;
};

console.log(shiftingLetters("adfsdf"));

console.log(`--------------- 7 ---------------`);

const capitalized2 = function (str6) {
  str6 = str6.split(" ");
  const capital = str6.map((e, i = 1) => {
    if (i % 2 !== 0) {
      return e.toUpperCase();
    } else {
      return e.toLowerCase();
    }
  });
  return capital.join(" ");
};

console.log(capitalized2("alaa mair adva nofar sahar bashir"));
