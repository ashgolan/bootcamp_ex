const form = document.querySelector("form");
const myInput = document.querySelector(".input-search");
const btnSearch = document.querySelector(".btn-search");
const cardsContainer = document.querySelector(".cards-container");
const errorSearch = document.querySelector(".error-search");

mySearchPage = {
  personViwed: [],
};
myInput.focus();

const makeTheCard = function (data) {
  const img = document.createElement("img");
  const nameOfAvatar = document.createElement("a");
  nameOfAvatar.href = data.html_url;
  nameOfAvatar.setAttribute("target", "_blank");
  const card = document.createElement("div");
  card.classList.add("cards");

  img.src = data.avatar_url;
  nameOfAvatar.textContent = `${data.login} - ${data.public_repos}`;
  nameOfAvatar.style.cursor = "pointer";

  cardsContainer.appendChild(card);
  card.appendChild(img);
  card.appendChild(nameOfAvatar);
  mySearchPage.personViwed.push(data.id);
};

const getInfo = async function (name) {
  try {
    const myInfo = await fetch(`https://api.github.com/users/${name}`);
    const data = await myInfo.json();
    console.log(data);
    if (!myInfo.ok) {
      throw new Error(`Wrong with data`);
    } else {
      console.log(data);
      if (!mySearchPage.personViwed.includes(data.id)) {
        errorSearch.style.display = "none";
        makeTheCard(data);
      }
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
