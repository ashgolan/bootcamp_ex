const theTitle = document.querySelector(".the-title");
const click = document.querySelector(".btn-click");
const theJoke = document.querySelector(".the-joke");

click.addEventListener("click", getData);

async function getData() {
  try {
    const response = await fetch("https://api.jokes.one/jod");
    const afterJson = await response.json();
    theTitle.innerHTML = afterJson.contents.jokes[0].joke.title;
    theJoke.innerHTML = afterJson.contents.jokes[0].joke.text;
  } catch (e) {
    console.log("Error with opening this api");
  }
}
