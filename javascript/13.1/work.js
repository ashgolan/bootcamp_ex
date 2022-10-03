const numbers = [1, -5, 666, 2, 400, 11];

const descendingToAscending = numbers.sort((a, b) => a - b);
console.log(descendingToAscending);
const ascendingToDescending = numbers.sort((a, b) => b - a);
console.log(ascendingToDescending);
