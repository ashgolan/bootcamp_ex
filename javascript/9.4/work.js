const shape = function (n) {
  for (let i = 1; i <= n; i++) {
    let sh = "";

    for (let j = 1; j <= i; j++) {
      sh += "#";
    }
    console.log(sh);
  }
};
shape(5);
