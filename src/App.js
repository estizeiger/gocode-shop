// import ButtonSwitch from "./components/ButtonSwitch";
import React, { useState, useEffect } from "react";
import MyContext from "./MyContext";
import "./App.css";
import Nav from "./components/Nav";
import Products from "./components/Products";

function App() {
  const [productsList, setProductsList] = useState([]);
  const [currProductList, setCurrProductList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("All");
  const [valueRange, setValueRange] = useState([1, 1000]);

  async function fetchData() {
    const response = await fetch("https://fakestoreapi.com/products");
    const json = await response.json();
    setProductsList(json);
    setCurrProductList(json);
    //we want it to happen only once and be nagish outside->
    //we can do it here, its called in useEffect in begining of component's life:
    setCategories(
      json
        .map((p) => p.category)
        .filter((value, index, array) => array.indexOf(value) === index)
    );
  }
  useEffect(() => {
    fetchData();
    console.log(productsList);
  }, []);

  useEffect(() => {
    console.log("currProductList ", currProductList);
  }, [currProductList]);

  useEffect(() => {
    console.log("category ", category);
    console.log("valueRange ", valueRange);
    const copyProductsList = productsList;
    if (category === "All") {
      setCurrProductList(
        copyProductsList.filter(
          (item) => item.price >= valueRange[0] && item.price <= valueRange[1]
        )
      );
    } else {
      setCurrProductList(
        copyProductsList.filter(
          (item) =>
            item.category === category &&
            item.price >= valueRange[0] &&
            item.price <= valueRange[1]
        )
      );
    }
  }, [category, valueRange]);

  return (
    <MyContext.Provider
      value={{
        currProductList,
        categories,
        category,
        setCategory,
        valueRange,
        setValueRange,
      }}
    >
      <div className="App">
        <Nav />
        <Products />
        {/* <ButtonSwitch /> */}
      </div>
    </MyContext.Provider>
  );
}

export default App;
