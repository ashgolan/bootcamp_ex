//?  2)
//?  create a car Market Object
//?  fetch all data from the API and assign it to the carMarketObj
//?  add spinner to see that everything works
//?  and show message when done

//? Do i need? https://capsules7.herokuapp.com/api/carMarket/agencies
//? Do i need? https://capsules7.herokuapp.com/api/carMarket/customers
//? Do i need? https://capsules7.herokuapp.com/api/carMarket/tax

//? Do i need? https://capsules7.herokuapp.com/api/carMarket/customers/:id
//? Do i need? https://capsules7.herokuapp.com/api/carMarket/agencies/:id

const spinner = document.querySelector(".spinner");
const agenciesBtn = document.querySelector("#sellers");
const customersBtn = document.querySelector("#customers");
const mainUl = document.createElement("ul");

let stat = {};

const arrOfUrls = [
  `https://capsules7.herokuapp.com/api/carMarket/agencies`,
  `https://capsules7.herokuapp.com/api/carMarket/customers`,
  `https://capsules7.herokuapp.com/api/carMarket/tax`,
];

const fetchData = async function (url) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

const getAllPromis = async function (urls) {
  const allfetches = urls.map((url) => {
    return fetchData(url);
  });
  const [sellers, customers, taxesAuthority] = await Promise.all(allfetches);
  return { sellers, customers, taxesAuthority };
};

const startup = async function () {
  spinnerShow(true);
  stat = await getAllPromis(arrOfUrls);
  spinnerShow(false);
};

const spinnerShow = function (bool) {
  if (bool) {
    spinner.style.display = "block";
  } else {
    spinner.style.display = "none";
  }
};

// const displayResault = function (dataArr) {
//   for (let item of dataArr) {
//   }
// };

const showCard = async (data) => {
  const fullData = await data;
  const cardContainer = document.createElement("div");
  document.body.appendChild(cardContainer);
  cardContainer.setAttribute("class", "cardContainer");

  // let text = "";
  // let mainCardUl;

  // for (let item in fullData) {
  //   console.log(fullData[item]);
  //   mainCardUl = document.createElement("ul");
  //   if (item !== "cars") {
  //     mainCardUl.textContent += item + " : " + fullData[item];
  //     cardContainer.appendChild(mainCardUl);
  //   } else {
  //     for (let car in fullData[item]) {
  //       if (car.length > 0) {
  //         const carLi = document.createElement("li");
  //         text = JSON.stringify(fullData[item][car]);
  //         console.log(text);
  //         carLi.textContent = text;
  //         cardContainer.appendChild(carLi);
  //       }
  //     }
  //   }
  // }
  let mainCardUl;
  console.log(fullData);
  for (let item in fullData) {
    mainCardUl = document.createElement("ul");
    cardContainer.appendChild(mainCardUl);
    mainCardUl.textContent = item;
    if (item !== "cars") {
      mainCardUl.textContent += " : " + fullData[item];
    } else {
      for (let brand in fullData[item]) {
        if (fullData[item][brand].length > 0) {
          let brandUl = document.createElement("ul");
          mainCardUl.appendChild(brandUl);
          brandUl.textContent = brand;
          for (let car of fullData[item][brand]) {
            let carLi = document.createElement("li");
            carLi.classList.add("carData");
            brandUl.appendChild(carLi);
            for (let dataOfCar in car) {
              const dataDiv = document.createElement("div");
              carLi.appendChild(dataDiv);
              dataDiv.textContent = dataOfCar + " :" + car[dataOfCar];
            }
            // carLi.textContent = brand[car];
            console.log(carLi);
          }
        }
      }
      // console.log("its a car");
    }
  }
  // Convert apple[x] to a string using JSON.stringify(apple[x]) and this

  // console.log(fullData);
};

const getAgencyById = async function (id) {
  const agencyData = await fetchData(
    `https://capsules7.herokuapp.com/api/carMarket/agencies/${id}`
  );
  // console.log(agencyData);
  showCard(agencyData);
};

const getCustomerById = async (id) => {
  const customerData = await fetchData(
    `https://capsules7.herokuapp.com/api/carMarket/customers/${id}`
  );
  console.log(customerData);
  showCard(agencyData);
};

const searchForResaults = function (e) {
  const res = e.target.parentElement.id;
  if (res === "sellers") getAgencyById(e.target.id);
  else getCustomerById(e.target.id);
};

const showAList = function (e) {
  if (mainUl) mainUl.replaceChildren("");
  const id = e.target.getAttribute("id");
  document.body.appendChild(mainUl);
  for (let item of stat[id]) {
    const li = document.createElement("li");
    // li.setAttribute('id',)
    // id === "sellers"
    //   ? (li.textContent = item.agencyName)
    //   : (li.textContent = item.name);
    if (id === "sellers") {
      li.textContent = item.agencyName;
      li.setAttribute("id", item.agencyId);
      mainUl.setAttribute("id", "sellers");
    } else {
      li.textContent = item.name;
      li.setAttribute("id", item.id);
      mainUl.setAttribute("id", "customers");
    }
    mainUl.appendChild(li);
  }

  mainUl.addEventListener("click", searchForResaults);
};

const events = function () {
  agenciesBtn.addEventListener("click", showAList);
  customersBtn.addEventListener("click", showAList);
};
startup();
events();

//? 3)
//? Create two button on the screen "Customers" "Agencies"
//? When the user clicks the button display a list of Customers / Agencies names
//? Only one list can be presented at a time

//? 4)
//? When the user clicks on single name of a Customer / Agency
//? Show over the screen a card with all the data of that particular Customer / Agency

//? 5)
//? When the user clicks on get image of the car fetch the car image and display another card with the image.
//! but what if i did no get the image ?????

//? ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
// https://capsules7.herokuapp.com/api/carMarket/img/':brand'/:model

//! Questions we should ask ourselves:
//! Where functions can be combined into one function?
//! Am I holding unnecessary information in the client's browser?
//! Why did I choose to call the API the way I did?

//* You can divide the work inside the capsule and share the responsibility
//* Separate the functions of logic and The functions related to HTML
//* Don't mess with the design (CSS)
