const people = ["Greg", "Mary", "Devon", "James"];
people.shift(1);
people.pop(1);
people.unshift("Matt");
people.push("Alaa");
console.log(`------------------------------------`);

for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Mary") break;
}
console.log(`------------------------------------`);
const people2 = people.slice(2, 4);

for (let i = 0; i < people2.length; i++) {
  console.log(people2[i]);
}
console.log(`------------------------------------`);

console.log(people.indexOf("Mary"));
console.log(people.indexOf("Foo"));

console.log(`------------------------------------`);
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}
console.log(`------------------------------------`);

people.pop();
people.shift();
people.unshift("Greg");
people.push("James");

console.log(people);
console.log(`------------------------------------`);

people.splice(2, 1, "Elizabeth", "Artie");
console.log(people);

console.log(`------------------------------------`);

const withBob = ["Bob"];
console.log(withBob.concat(people));
