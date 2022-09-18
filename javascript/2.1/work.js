const countryInfo = function () {
  const country = prompt("Enter the country");
  const population = prompt("Enter the population");
  const capitalCity = prompt("Enter the capitalCity");
  const resalt = `${country} has ${population} million people and its capital city is ${capitalCity}`;
  console.log(resalt);
};

countryInfo();
countryInfo();
countryInfo();
