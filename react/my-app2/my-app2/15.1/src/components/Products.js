import React, { useState, useEffect } from "react";
import data from "../store";
import ProductsHeader from "./ProductsHeader";
import Product from "./Product";
import "./Products.css";
function Products() {
  const [mydata, setMyData] = useState(data);
  const [productSelected, setProductSelected] = useState(null);
  useEffect(() => {
    console.log(mydata);
  }, []);

  const productHandler = (event) => {
    setProductSelected(event.target.textContent);
  };

  const myTitles = mydata.map((data) => {
    return (
      <ul>
        <li key={data.id} onClick={productHandler}>
          {data.title}
        </li>
      </ul>
    );
  });
  return (
    <div>
      {!productSelected && (
        <ProductsHeader myTitles={myTitles}></ProductsHeader>
      )}
      {productSelected && (
        <Product
          productSelected={productSelected}
          data={mydata}
          setProductSelected={setProductSelected}
        ></Product>
      )}
    </div>
  );
}
export default Products;
