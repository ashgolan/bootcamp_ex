const theTitle = document.querySelector(".the-title");
const click = document.querySelector(".btn-click");
const theJoke = document.querySelector(".the-joke");

click.addEventListener("click", getData);

function getData() {
  fetch("https://api.jokes.one/jod")
    .then((res) => {
      if (!res.ok) throw new Error(`error ${res.status}`);
      res.json().then((data) => {
        theTitle.innerHTML = data.contents.jokes[0].joke.title;
        theJoke.innerHTML = data.contents.jokes[0].joke.text;
      });
    })
    .catch((error) => console.log(error));
}
