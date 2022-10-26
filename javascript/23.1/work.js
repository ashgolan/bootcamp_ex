console.log(this);
// it's point to the window global because it's not in a spesific function .

const myObj = {
  name: "Timmy",
  greet: function () {
    console.log(`Hello ${this.name}`);
  },
};
myObj.greet();

// I change the kind of the function from arrow to ...

const myFuncArrow = () => {
  console.log(this);
};
myFuncArrow();

// point to the global window because the arrow func go to the parent function

document.querySelector(".element").addEventListener("click", function () {
  console.log(this);
});
