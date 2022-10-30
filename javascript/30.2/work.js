const form = document.querySelector("form");
const myInput = document.querySelector(".input-search");
const btnSearch = document.querySelector(".btn-search");
const cardsContainer = document.querySelector(".cards-container");
const errorSearch = document.querySelector(".error-search");
const titleOfMovie = document.querySelector(".title");
const genreOfMovie = document.querySelector(".genre");
const year = document.querySelector(".year");
const plot = document.querySelector(".plot");
const director = document.querySelector(".director");
const actors = document.querySelector(".actors");
const img = document.querySelector(".image");
const card = document.querySelector(".card");
const rating = document.querySelector(".rating");
myInput.focus();

const makeTheCard = function (data) {
  titleOfMovie.setAttribute("target", "_blank");
  card.classList.add("cards");
  img.src = data.Poster;
  titleOfMovie.textContent = data.Title;
  genreOfMovie.textContent = data.Genre;
  year.textContent = data.Year;
  plot.textContent = data.Plot;
  director.textContent = data.Director;
  actors.textContent = data.Actors;
  rating.textContent = data.Ratings[0].Value;
};

const getInfo = async function () {
  try {
    const title = myInput.value;
    const myInfo = await fetch(
      `http://www.omdbapi.com/?t=${title}&apikey=62e9554`
    );
    const data = await myInfo.json();
    console.log(data);
    if (!myInfo.ok) {
      throw new Error(`Wrong with data`);
    } else {
      errorSearch.style.display = "none";
      makeTheCard(data);
    }
  } catch (error) {
    errorSearch.style.display = "block";
    errorSearch.textContent = error;
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getInfo(myInput.value);
  form.reset();
});
