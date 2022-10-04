const data = [
  {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
      meats: ["hamburgers", "sausages"],
      fish: ["salmon", "pike"],
    },
  },
  {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
      meats: ["hamburgers", "steak", "lamb"],
      fish: ["tuna", "salmon", "barracuda"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["ham", "chicken"],
      fish: ["pike"],
    },
  },
  {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
      meats: ["bird", "rooster"],
      fish: ["salmon"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["hamburgers", "lamb"],
      fish: ["anchovies", "tuna"],
    },
  },
];
console.log(`------------ 1 -------------`);

const names = function (arr) {
  const newwArr = arr.map((m) => {
    return m.name;
  });
  return newwArr;
};

console.log(`----------- 2 --------------`);

data.forEach((m) => {
  const year = m.birthday.split("-")[2];
  if (Number(year) < 1990) console.log(m);
});

console.log(`----------- 3 --------------`);

foods = {};
data.forEach((object) => {
  const allFoods = object.favoriteFoods.meats.concat(object.favoriteFoods.fish);
  allFoods.forEach((m) => {
    if (foods[m]) foods[m]++;
    else foods[m] = 1;
  });
});

console.log(foods);
