const averageScore = function (score1, score2, score3) {
  const average = (score1 + score2 + score3) / 3;
  return average;
};

const averageOfJohn = averageScore(89, 120, 103);
const averageOfMike = averageScore(116, 94, 123);
const averageOfMary = averageScore(97, 134, 105);
console.log(averageOfJohn);
console.log(averageOfMike);
console.log(averageOfMary);
// const averageOfJohn = averageScore(89, 120, 103);
// const averageOfMike = averageScore(89, 120, 103);

if (averageOfJohn > averageOfMike && averageOfJohn > averageOfMary) {
  console.log(`John wiins 🏆 , The average is ${averageOfJohn}`);
} else if (averageOfMike > averageOfJohn && averageOfMike > averageOfMary) {
  console.log(`Mike wiins 🏆, The average is ${averageOfMike}`);
} else if (averageOfMary > averageOfJohn && averageOfMary > averageOfMike)
  console.log(`Mary wiins 🏆, The average is ${averageOfMary}`);
else console.log(`Draw !!!`);
