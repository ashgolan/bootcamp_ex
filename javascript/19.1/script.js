let li2 = document.querySelector(".start-here");
li2.textContent = "main title";

const ul = li2.nextElementSibling.firstElementChild;
const newLi = document.createElement("li");
newLi.textContent = "sub title 4";
ul.appendChild(newLi);

const lastLi = li2.parentElement.lastElementChild;
lastLi.remove();

const myTitle = document.querySelector("title");
myTitle.textContent = "Master Of The Dom";

const paragraph = document.querySelector("p");
paragraph.textContent = "Alaa Shaalan";
