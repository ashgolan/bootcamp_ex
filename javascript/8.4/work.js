const array = ["Hello", "Good Day", "YourWelcome", "hotdog", "hamburgers"];

let str = array.toString().toLocaleLowerCase();
const obj = {};
for (let i = 0; i < str.length; ) {
  let counter = 0;
  let letter = str[0];
  while (str.includes(letter)) {
    counter++;
    str = str.replace(letter, "");
  }
  if (letter !== "," && letter !== " ") obj[letter] = counter;
}

console.log(obj);
