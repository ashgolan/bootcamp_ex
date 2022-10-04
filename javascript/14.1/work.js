const numbers = [1, 2, 4, 10, 4, 3, 11];

// const reduced = numbers.reduce((max, current) => {
//   if (max > current) {
//     return max;
//   } else return current;
// });
//shortest ::
const reduced = numbers.reduce((max, current) => {
  return Math.max(max, current);
});

console.log(reduced);

const sumOfEven = numbers.reduce((sum, current) => {
  if (current % 2 === 0) return sum + current;
  else return sum;
}, 0);

console.log(sumOfEven);

const average = numbers.reduce((total, current) => {
  return total + current / numbers.length;
}, 0);

console.log(average / numbers.length);
