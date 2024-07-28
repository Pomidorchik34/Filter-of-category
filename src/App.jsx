import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import details from "./pages/details";
function App() {
  const [products, setProducts] = useState([]);
  const [sect, setSect] = useState("");
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
    getData("https://cars-pagination.onrender.com/products")
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  // const cards = document.querySelectorAll(".card");
  // cards.forEach((card) => {
  //   card.addEventListener("click", () => {
  //     const cardId = this.getAttribute("data-id");
  //     console.log(cardId);
  //   });
  // });
  let id;
  function onClicked(event) {
    console.log(event.target.id);
    id = `details/${event.target.id}`;
    console.log(id);
    location.assign(`/details/${event.target.id}`);
  }

  function select(event) {
    console.log(event.target.value);
    setSect(event.target.value);
  }
  return (
    <>
      <select className="select" onChange={select} name="">
        <option value="все">все</option>
        <option value="не популярен">не популярен</option>
        <option value="средний">средний</option>
        <option value="известный">известный</option>
      </select>
      <div className="container">
        <BrowserRouter>
          {products.length > 0 &&
            products.map((products, index) => {
              if (sect == "" || sect == "все") {
                return (
                  <div
                    onClick={onClicked}
                    key={index}
                    id={products.id}
                    className="card"
                  >
                    <img
                      width={400}
                      height={400}
                      src={products.image}
                      id={products.id}
                    />
                    <h2 id={products.id} className="title">
                      {products.name}
                    </h2>
                    <h3 id={products.id} className="thumbnailUrl">
                      Цена: {products.newPrice}$
                    </h3>
                    <h3 id={products.id}>{products.oldPrice}$</h3>
                    <div id={products.id} className="oldPrice"></div>

                    <h4 id={products.id}>отзывы {products.comments}</h4>
                  </div>
                );
              }
              if (sect == products.category) {
                return (
                  <div
                    onClick={onClicked}
                    key={index}
                    id={products.id}
                    className="card"
                  >
                    <img
                      width={400}
                      height={400}
                      src={products.image}
                      id={products.id}
                    />
                    <h2 id={products.id} className="title">
                      {products.name}
                    </h2>
                    <h3 id={products.id} className="thumbnailUrl">
                      Цена: {products.newPrice}$
                    </h3>
                    <h3 id={products.id}>{products.oldPrice}$</h3>
                    <div id={products.id} className="oldPrice"></div>

                    <h4 id={products.id}>отзывы {products.comments}</h4>
                  </div>
                );
              }
            })}
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
