async function getIDs(arr) {
  setTimeout(() => {
    console.log(arr);
    return getRecipe(arr[2]);
  }, 1500);
}

async function getRecipe(recipeID) {
  setTimeout(
    (ID) => {
      const recipe = {
        title: "Fresh tomato pasta",
        publisher: "Pinchas Hodadad",
      };
      console.log(`${ID}: ${recipe.title}`);
    },
    1500,
    recipeID
  );
}

getIDs([532, 543, 753, 1, 5]).catch((err) => {
  console.log("It is an error!");
});
