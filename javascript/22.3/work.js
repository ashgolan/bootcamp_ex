const theLetter = document.querySelector(".the-letter");
const allLetterGuested = document.querySelector(".all-letters-tested");
const resault = document.querySelector(".resault");
const askPlayingAgain = document.querySelector(".ask-playing-again");
const submit = document.querySelector(".submit");
const errorLine = document.querySelector(".error");

let alphabet;
let randomCharacter;
let isGuested = false;
alphabet = "abcdefghijklmnopqrstuvwxyz";
randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)];
window.addEventListener("keyup", function (e) {
  if (!isGuested) {
    if (e.key.toLocaleLowerCase() === randomCharacter) {
      isGuested = true;
      theLetter.textContent = randomCharacter;
      resault.textContent = "Right Letter!";
      resault.style.color = "green";
      askPlayingAgain.style.display = "block";
      submit.style.display = "block";
      errorLine.style.display = "none";
    } else if (allLetterGuested.textContent.includes(e.key)) {
      errorLine.style.display = "block";
      errorLine.style.color = "red";
      errorLine.textContent = `the letter ** ${e.key} ** has been entered`;
    } else if (alphabet.includes(e.key)) {
      errorLine.style.display = "none";
      allLetterGuested.textContent += e.key + ",";
      resault.textContent = "Nope, wrong letter";
      resault.style.color = "red";
    }
  }
});

const newGame = function () {
  isGuested = false;
  alphabet = "abcdefghijklmnopqrstuvwxyz";

  randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)];
  resault.style.color = "black";
  resault.textContent = "Guess a key!";
  allLetterGuested.textContent = "";
  askPlayingAgain.style.display = "none";
  submit.style.display = "none";
  theLetter.textContent = "?";
};
submit.addEventListener("click", newGame);
