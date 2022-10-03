const candyStore = {
  candies: [
    {
      name: "mint gum",
      id: "as12f",
      price: 2,
      amount: 2,
    },
    {
      name: "twix",
      id: "5hd7y",
      price: 5,
      amount: 4,
    },
  ],
  cashRegister: 200,
};
function getCandy(candyStore, id) {
  const candy = candyStore.candies.filter((c) => c.id === id);
  return candy[0];
}
function getPrice(candyStore, id) {
  const price = candyStore.candies.filter((c) => c.id === id);
  return price[0].price;
}
function addCandy(candyStore, id, name, price) {
  const newobj = { name: name, id: id, price: price, amount: 1 };
  const newCandy = candyStore.candies.push(newobj);
  return newCandy;
}
function buy(candyStore, id) {
  const price = candyStore.candies.filter((c) => c.id === id);
  candyStore.cashRegister += price[0].price;
  price[0].amount--;
  console.log(candyStore);
}

console.log(getCandy(candyStore, "as12f"));
console.log(`--------------------------------`);
console.log(getPrice(candyStore, "as12f"));
console.log(`--------------------------------`);
console.log(addCandy(candyStore, "sp12", "sprite", 8.99));
console.log(`--------------------------------`);
buy(candyStore, "sp12");
buy(candyStore, "as12f");
