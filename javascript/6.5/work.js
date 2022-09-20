const obj = { name: "alaa", age: 38 };
const arr = new Array(100);
arr.fill(obj, 0, 100);
console.log(arr);

console.log(
  Array(100)
    .fill(0)
    .map((_, idx) => idx + 1)
);
