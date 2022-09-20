const countryToLiveIn = function (language, isIsland, population, country) {
  const resault =
    language === "English" && isIsland === !true && population < 50000000
      ? `You should live in ${country}`
      : `${country} does not meet your criteria`;
  return resault;
};

console.log(countryToLiveIn("English", !true, 7000000, "Israel"));
