const populationPercentages = function (populationArr) {
  const percentages = [];
  for (let i = 0; i < populationArr.length; i++) {
    const percentage = ((populationArr[i] * 100) / 7900000000).toFixed(1);
    percentages.push(percentage);
  }
  return percentages;
};

const populations = [7000000, 10000000, 24000000, 70000000];

populationPercentages(populations);
console.log(`----------------------------`);

const allPercentages = populationPercentages(populations);
console.log(allPercentages);
