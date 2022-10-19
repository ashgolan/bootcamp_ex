const btn = document.querySelector("button");
const label = document.createElement("label");
const form = document.querySelector("form");
const input = document.querySelector("input");

const check = function (event) {
  event.preventDefault();
  label.textContent =
    Number(input.value) > 18 ? `you can drink appear` : `you’re too young`;
  form.appendChild(label);
};

btn.addEventListener("click", check);
