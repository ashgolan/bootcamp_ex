console.log(`---------------1---------------`);
const doubleValues = function (arr) {
  arr.map((element) => {
    console.log(element * 2);
  });
};
const newArr = [2, 5, 8, 9];
doubleValues(newArr);
console.log(`---------------2---------------`);
const onlyEvenValues = function (arr) {
  arr.map((element) => {
    if (element % 2 != 0) console.log(element);
  });
};
const newArr2 = [2, 5, 8, 9];
onlyEvenValues(newArr2);

console.log(`-----------------3---------------`);

const arr3 = ["alaa", "NOOR", 4, 12, "mais", 34, "anat"];
const newArr3 = [];
const showFirstAndLast = arr3.forEach((element) => {
  if (typeof element === "string")
    if (newArr3.length < 2) newArr3.push(element);
    else newArr3[1] = element;
});
console.log(newArr3);

console.log(`--------------4----------------`);

let str4 = "alaa shaalan EinKynia";
str4 = str4.toLowerCase().split("");
let vowelCount = {};
str4.forEach((e) => {
  if (e == "a" || e == "o" || e == "i" || e == "u" || e == "e") {
    if (vowelCount[e]) vowelCount[e]++;
    else vowelCount[e] = 1;
  }
});

console.log(vowelCount);

console.log(`---------------5---------------`);

const capitalized = function (str5) {
  str5 = str5.toLowerCase().split(" ");
  let capitalizedText = [];
  str5.map((e) => {
    capitalizedText.push(e.toUpperCase());
  });
  return capitalizedText.join(" ");
};

const capital = capitalized("alaa shaalan EinKynia");
console.log(capital);

console.log(`---------------6---------------`);
