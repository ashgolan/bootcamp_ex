// import logo from './logo.svg';
import { useState } from "react";
import { arrOfNames, bornBefore1990 } from "./ultilities";
import Name from "./components/Name";
import Card from "./components/Card";
import "./App.css";

function App() {
  const data = [
    {
      name: "John",
      birthday: "1-1-1995",
      favoriteFoods: {
        meats: ["hamburgers", "sausages"],
        fish: ["salmon", "pike"],
      },
    },
    {
      name: "Mark",
      birthday: "10-5-1980",
      favoriteFoods: {
        meats: ["hamburgers", "steak", "lamb"],
        fish: ["tuna", "salmon", "barracuda"],
      },
    },
    {
      name: "Mary",
      birthday: "1-10-1977",
      favoriteFoods: {
        meats: ["ham", "chicken"],
        fish: ["pike"],
      },
    },
    {
      name: "Thomas",
      birthday: "1-10-1990",
      favoriteFoods: {
        meats: ["bird", "rooster"],
        fish: ["salmon"],
      },
    },
    {
      name: "Mary",
      birthday: "1-10-1977",
      favoriteFoods: {
        meats: ["hamburgers", "lamb"],
        fish: ["anchovies", "tuna"],
      },
    },
  ];
  const arrayOfNames = arrOfNames(data);
  const peopleBeforeNineties = bornBefore1990(data);
  const [names, setNames] = useState(arrayOfNames);
  const [beforeNineties, setBeforeNineties] = useState(peopleBeforeNineties);
  return (
    <div className="App">
      <Name name={names} />
      <div className="conatainer">
        {beforeNineties.map((e) => {
          return (
            <Card
              name={e.name}
              birthday={e.birthday}
              meats={e.favoriteFoods.meats.join(" ")}
              fish={e.favoriteFoods.fish.join(" ")}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
