const Printing = {
  name: "Alaa",
  showTheName: function () {
    return this.name;
  },
  showTheNameAfterSecond() {
    const one = this.showTheName();
    setTimeout(function () {
      console.log(one);
    }, 3000);
  },
};
Printing.showTheNameAfterSecond();
