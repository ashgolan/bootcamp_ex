const lengthOfArray = function (arr) {
  let newArr = [];
  while (newArr.length < arr.length) {
    newArr.push(arr[newArr.length].length);
  }
  //   for (let i = 0; i < arr.length; i++) {
  //     newArr.push(arr[i].length);
  //   }

  console.log(newArr);
};

lengthOfArray(["boo", "doooo", "hoo", "ro"]);
// I think that while is better than for
