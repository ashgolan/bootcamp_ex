const arrOfNames = (arr) => {
  return arr.map((item) => {
    return item.name;
  });
};

const bornBefore1990 = (arr) => {
  return arr.filter((item) => {
    return Number(item.birthday.slice(-4)) < 1990;
  });
};

export { arrOfNames, bornBefore1990 };
