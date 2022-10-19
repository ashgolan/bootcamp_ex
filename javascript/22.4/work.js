"use strict";

const players = { ...document.querySelectorAll(".active") };
const tdes = document.querySelectorAll("td");
let isWin = false;

window.addEventListener("keyup", function (element) {
  if (element.key === "l" && players[0]) moving(0);
  else if (element.key === "s" && players[1]) moving(1);
});

const moving = function (key) {
  if (!isWin)
    if (players[key].nextElementSibling !== null) {
      players[key].classList.remove("active");
      players[key] = players[key].nextElementSibling;
      players[key].classList.add("active");
    } else {
      console.log(`player ${[+key + 1]} Won`);
      isWin = !isWin;
    }
};
