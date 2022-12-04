import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import "./App.css";
import Actions from "./components/Actions";
const FarmersTable = styled.div`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  display: flex;
  flex-wrap: wrap;
`;
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getUserData() {
      try {
        const response = await axios.get(
          "https://6374adb808104a9c5f85d1fb.mockapi.io/farmers"
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    getUserData();
  }, []);
  const editHandler = () => {};
  const removeHandler = (id) => {
    console.log(id);
    const filtered = data.filter((d) => {
      return d.id !== id;
    });
    setData(filtered);
    console.log(data);
    axios
      .delete(`https://6374adb808104a9c5f85d1fb.mockapi.io/farmers/${id}`)
      .then(() => console.log("delete successful"));
  };
  const farmers = data.map((f) => {
    return (
      <div className="farmer" key={`farmer ${f.id}`}>
        <img key={f.image} src={f.image}></img>
        <h5 key={f.name}>Name: {f.name}</h5>
        <h5 key={f.farmerId}>farmerID: {f.farmerId}</h5>
        <h5 key={f.phone}>PHONE: {f.phone}</h5>
        <h5 key={f.year}>YEAR: {f.year}</h5>
        <h5 key={f.firstRead}>FIRST READ: {f.firstRead}</h5>
        <h5 key={f.secondRead}>SECOND READ: {f.secondRead}</h5>
        <h5 key={f.lastRead}>LAST READ: {f.lastRead}</h5>
        <div>
          <button onClick={() => removeHandler(f.id)}>Remove</button>
          <button onClick={editHandler}>Edit</button>
        </div>
      </div>
    );
  });
  return (
    <div>
      <Actions data={data} setData={setData}></Actions>
      <FarmersTable>{farmers}</FarmersTable>
    </div>
  );
}
export default App;
