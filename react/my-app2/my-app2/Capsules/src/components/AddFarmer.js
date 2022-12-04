import { useState, useEffect } from "react";
import axios from "axios";

function AddFarmer(props) {
  const [farmerData, setFarmerData] = useState({
    farmerId: "",
    name: "",
    phone: "",
    firstRead: "",
    secondRead: "",
    lastRead: "",
    year: 2022,
  });
  const adding = (e) => {
    e.preventDefault();
    axios
      .post("https://6374adb808104a9c5f85d1fb.mockapi.io/farmers", {
        farmerId: farmerData.farmerId,
        name: farmerData.name,
        phone: farmerData.phone,
        firstRead: farmerData.firstRead,
        secondRead: farmerData.secondRead,
        lastRead: farmerData.lastRead,
        year: farmerData.year,
      })
      .then((response) => props.setData((p) => [...p, response.data]))
      .catch((err) => console.log(err));
  };
  return (
    <form
      onSubmit={adding}
      style={{ display: "flex", justifyContent: "space-around" }}
    >
      <div>
        <h5>farmerID</h5>
        <input
          type="text"
          value={farmerData.farmerId}
          onChange={(e) => {
            setFarmerData({ ...farmerData, farmerId: e.target.value });
          }}
        ></input>
      </div>
      <div>
        <h5>name</h5>
        <input
          type="text"
          value={farmerData.name}
          onChange={(e) => {
            setFarmerData({ ...farmerData, name: e.target.value });
          }}
        ></input>
      </div>
      <div>
        <h5>phone</h5>
        <input
          type="text"
          value={farmerData.phone}
          onChange={(e) => {
            setFarmerData({ ...farmerData, phone: e.target.value });
          }}
        ></input>
      </div>
      <div>
        <h5>first Read</h5>
        <input
          type="text"
          value={farmerData.firstRead}
          onChange={(e) => {
            setFarmerData({ ...farmerData, firstRead: e.target.value });
          }}
        ></input>
      </div>
      <div>
        <h5>second Read</h5>
        <input
          type="text"
          value={farmerData.secondRead}
          onChange={(e) => {
            setFarmerData({ ...farmerData, secondRead: e.target.value });
          }}
        ></input>
      </div>
      <div>
        <h5>last Read</h5>
        <input
          type="text"
          value={farmerData.lastRead}
          onChange={(e) => {
            setFarmerData({ ...farmerData, lastRead: e.target.value });
          }}
        ></input>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
export default AddFarmer;
