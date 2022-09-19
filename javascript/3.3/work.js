const persentageOfPopulation = function (population) {
  return `it's about ${((population * 100) / 7900).toFixed(
    1
  )} % of the world population.`;
};

const resault = persentageOfPopulation(1441);
console.log(resault);
