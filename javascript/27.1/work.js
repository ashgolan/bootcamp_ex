const checkNumber = function (number) {
  return new Promise((resolve, reject) => {
    number > 10 ? resolve() : reject();
  });
};

checkNumber(7)
  .then(() => {
    console.log("Resolved");
  })
  .catch(() => {
    console.log("Rejected");
  });
