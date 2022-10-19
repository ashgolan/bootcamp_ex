const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const inputText = document.querySelector(".my-text");
let myFontSize = 16;

plus.addEventListener("click", function () {
  if (myFontSize < 100) {
    myFontSize++;
    inputText.style.fontSize = myFontSize + "px";
  }
});
minus.addEventListener("click", function () {
  if (myFontSize >= 16) {
    myFontSize--;
    inputText.style.fontSize = myFontSize + "px";
  }
});
