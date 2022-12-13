import React, { useState, useRef, useEffect } from "react";
import { testApi } from "./api/testApi";
export default function App() {
  const cityName = useRef();
  const [backendData, setBackendData] = useState([{}]);
  const [city, setCity] = useState("london");
  useEffect(() => {
    testApi
      .get(`/api/${city}`)
      .then(({ data }) => {
        setBackendData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [city]);

  return (
    <div>
      <input ref={cityName} type="text" defaultValue={"london"} />
      <button
        onClick={() => {
          setCity(() => cityName.current.value);
        }}
      >
        submit
      </button>
      {/* <input ref={cityName} defaultValue="london"></input>
      <p>{cityName && cityName.current.value}</p> */}
      {/* <button onClick={setCity(cityName.current.value)}>submit</button> */}
      {/* {console.log(backendData)} */}
      {/* {typeof backendData.temprature === "undefined" ? (
        <p>Loading ...</p>
      ) : (
        <p>{backendData.temprature}</p>
      )} */}
      <p>{backendData.temperature}</p>
    </div>
  );
}
