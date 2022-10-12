const password = document.querySelector("p").textContent;
const inputs = [...document.getElementsByTagName("input")];
const theCode = document.querySelector("p");

inputs.forEach((element) => {
  element.maxLength = 1;
  element.onkeyup = function (e) {
    element.textContent = e;
    if (element.nextElementSibling) element.nextElementSibling.focus();
  };
});
let copied;
theCode.addEventListener("copy", (e) => {
  copied = [...e.target.textContent];
});

inputs[0].addEventListener("paste", () => {
  inputs.forEach((element, index) => {
    element.value = copied[index];
    element.focus();
  });
});
