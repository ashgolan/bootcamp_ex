const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];

const descendingSort = foods.sort();
console.log(descendingSort);
const ascendingSort = foods.sort((a, b) => {
  if (a < b) {
    return 1;
  } else if (a > b) {
    return -1;
  } else return 0;
});
console.log(ascendingSort);

const foodsWithUpperCase = [
  "falafel",
  "Sabich",
  "hummus",
  "pizza with extra pineapple",
];

const ascendingSort2 = foods.sort((a, b) => {
  const strA = a.toUpperCase();
  const strB = b.toUpperCase();
  if (strA > strB) {
    return 1;
  } else if (strA < strB) {
    return -1;
  } else return 0;
});

console.log(ascendingSort2);

const descendingSort2 = foods.sort((a, b) => {
  const strA = a.toUpperCase();
  const strB = b.toUpperCase();
  if (strA < strB) {
    return 1;
  } else if (strA > strB) {
    return -1;
  } else return 0;
});

console.log(descendingSort2);

const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];

const longest = words.sort((a, b) => {
  const long1 = a.length;
  const long2 = b.length;
  if (long1 < long2) {
    return 1;
  } else if (long1 > long2) {
    return -1;
  } else return 0;
});
console.log(longest);
