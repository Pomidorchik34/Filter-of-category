import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./details.css";
function details() {
  const [produsts, setProducts] = useState("");
  async function getData(url) {
    try {
      const response = await fetch(url);
      let data = [];
      if (response.status == 200) {
        data = await response.json();
      }

      return data;
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    let id = JSON.parse(localStorage.getItem("id"));
    getData(`https://cars-pagination.onrender.com/products/${id}`)
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  let has;
  if (produsts.isExist) {
    has = "В наличии";
  } else {
    has = "Нет в наличии";
  }
  return (
    <div className="detailsContainer">
      <div className="text">
        <h1>{produsts.name}</h1>
        <h2>Цена: {produsts.newPrice}</h2>
        <h2>Отзывы: {produsts.comments}</h2>
        <h3>{has}</h3>
      </div>
      <img src={produsts.image} alt="" />
    </div>
  );
}

export default details;
