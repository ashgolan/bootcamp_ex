const storm = {
  superPower: "Flying",
  weather: "snowing",
};
function printSuperPower() {
  console.log("my superpower is " + this.superPower);
  console.log("my weather is " + this.weather);
}

storm.printSuperPower();
