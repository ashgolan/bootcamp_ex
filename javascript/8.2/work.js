const myCountry = {
  country: "Italy",
  capital: "Roma",
  motherTongue: "Italian",
  population: 8.9,
  neighbours: [
    "Austria",
    "France",
    "Holy See",
    "San Marino",
    "Slovenia",
    "Switzerland",
  ],
  describe() {
    console.log(`${this.country} has ${this.population} million people, their mother tongue is ${this.motherTongue}, they
    have ${this.neighbours.length} neighbouring countries and a capital called
    ${this.country.capital}.`);
  },
  chechIsland() {
    this.isIsland = this.neighbours.length ? false : true;
    return this.isIsland;
  },
};

myCountry.describe();
myCountry.chechIsland();
console.log(myCountry);
