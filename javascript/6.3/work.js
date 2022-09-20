const lengthOfArray = function (arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].length);
  }
  console.log(newArr);
};

lengthOfArray(["boo", "doooo", "hoo", "ro"]);
