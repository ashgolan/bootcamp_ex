const convertingNums = function (num) {
  let resault;
  if (num >= 0 && num <= 64) resault = "F";
  else if (num >= 65 && num <= 69) resault = "D";
  else if (num >= 70 && num <= 79) resault = "C";
  else if (num >= 80 && num <= 89) resault = "B";
  else if (num >= 90 && num <= 100) resault = "A";
  return resault;
};

console.log(convertingNums(69));

// 0-64 is a “F”
// 65-69 is a “D”
// 70-79 is a “C”
// 80-89 is a “B”
// 90-100 is an “A
