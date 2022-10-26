function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
  this.name = pokemonName;
  this.type = pokemonType;
  this.attackList = pokemonAttackList;
}

Pokemon.prototype.callPokemon = function () {
  return `I choose you, ${this.name}`;
};

Pokemon.prototype.attack = function (attackNumber) {
  return `${this.name} use ${this.attackList[attackNumber]}`;
};

const Pikachu = new Pokemon("Pikachu", "Electric ", ["a", "b", "c", "d"]);
const Cosmog = new Pokemon("Cosmog", "Water", ["a", "b", "c", "d"]);
const Charmander = new Pokemon("Charmander", "Ice", ["a", "b", "c", "d"]);

console.log(Pikachu.callPokemon());
console.log(Pikachu.attack(1));
