import React, { useEffect, useState, useRef, axios } from "react";
import "./App.css";
import InputBox from "./InputBox";
import Users from "./Users";

function App() {
  
  const [myArr, setMyArr] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetchData("https://randomuser.me/api/?results=10");
  }, []);

  const fetchData = async function (url) {
    try {
      const res = await fetch(url);
      const data = await res.json();
      const myData = data.results;
      const myMap = myData.map((m) => {
        return {
          name: m.name,
          email: m.email,
          phone: m.phone,
          gender: m.gender,
          picture: m.picture.large,
        };
      });
      setMyArr(myMap);
    } catch {
      console.log("error");
    }
  };

  const getUsers = () => {
    let allData;
    if (filteredData.length === 0) {
      allData = myArr;
    } else {
      allData = filteredData;
    }
    return allData.map((user) => {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            border: "2px gray solid",
            width: "15%",
            margin: "1%",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <img key={user.picture} src={user.picture}></img>
          <h4 key={user.name.first}>{user.name.first}</h4>
          <h4 key={user.gender}>{user.gender}</h4>
          <h6 key={user.email}>{user.email}</h6>
          <h4 key={user.phone}>{user.phone}</h4>
        </div>
      );
    });
  };

  const filterByName = (event) => {
    const filtersr = myArr.filter((data) => {
      return data.name.first.toLowerCase().includes(event.target.value);
    });
    setFilteredData(filtersr);
  };
  return (
    <div>
      <InputBox searching={filterByName}></InputBox>
      <Users getUsers={getUsers()}></Users>
    </div>
  );
}

export default App;
