const password = document.querySelector("p").textContent;
const inputs = [...document.getElementsByTagName("input")];

inputs.forEach((element, index) => {
  element.maxLength = 1;
  element.onkeyup = function (e) {
    element.textContent = e;
    if (index != inputs.length - 1) element.nextElementSibling.focus();
  };
});
