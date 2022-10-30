const body = document.querySelector("body");
const arrOfObject = [];
const characters = async function () {
  try {
    const res = await fetch("https://swapi.dev/api/people/");
    const data = await res.json();
    const results = data.results;
    for (let i = 0; i < results.length; i++) {
      const planetObj = await checkPlanet(results[i].homeworld);
      arrOfObject.push({
        name: results[i].name,
        hairColor: results[i].hair_color,
        height: results[i].height,
        planet: planetObj,
      });
    }
    createTable(arrOfObject);
  } catch {
    console.log("err");
  }
};

const createTable = async function (arr) {
  const table = document.createElement("table");
  body.appendChild(table);
  output = "";
  counter = 1;
  for (let item of arr) {
    output += `<tr>`;
    for (let innerItem in item) {
      if (counter === 1) {
        output += `<th>${innerItem}</th>`;
      } else {
        output += `<td>${item[innerItem]}</td>`;
      }
    }
    output += `</tr>`;
    counter++;
  }
  table.innerHTML = output;
};
const hasOwnP = function () {};
const checkPlanet = async function (planetApi) {
  try {
    const res = await fetch(`${planetApi}`);
    const data = await res.json();
    const planet = { name: data.name, population: data.population };
    return planet;
  } catch {
    console.log("error");
  }
};

characters();
