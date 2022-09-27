const myPerson = {};
const myMapPerson = new Map();

const maxCount = 1000000;
console.time(myPerson);
let a, b;
for (let i = 0; i < maxCount; i++) {
  myPerson.key = "key";
  myPerson.value = i;
}
console.timeEnd(myPerson);
console.log(myPerson);
//********************************************************** */
console.time(myPerson);
for (let i = 0; i < maxCount; i++) {
  a = myPerson.length;
  break;
}
console.timeEnd(myPerson);
console.log(myPerson);
//*********************************************************** */
console.time(myPerson);

myPerson.name = "Alaa";
console.timeEnd(myPerson);
console.log(myPerson);

// *********************************************************
console.time(myMapPerson);

for (let i = 0; i < maxCount; i++) {
  myMapPerson.set("Key", i);
}

console.timeEnd(myMapPerson);

console.log(myMapPerson);
//********************************************************* */
console.time(myMapPerson);

for (let i = 0; i < maxCount; i++) {
  b = myMapPerson.size;
  break;
}

console.timeEnd(myMapPerson);

console.log(myMapPerson);
//**************************************************** */

console.time(myMapPerson);
myMapPerson.name = "Alaa";
console.timeEnd(myMapPerson);

console.log(myMapPerson);
