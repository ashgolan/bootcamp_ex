const sevenNumber = function (n) {
  for (let i = 1; i <= n; i++) {
    let textNumber = i.toString();
    if (i % 7 == 0 && textNumber.includes(7)) {
      console.log("BOOM BOOM");
    } else if (textNumber.includes(7) || i % 7 == 0) {
      console.log("BOOM");
    } else console.log(i);
  }
};

sevenNumber(18);
