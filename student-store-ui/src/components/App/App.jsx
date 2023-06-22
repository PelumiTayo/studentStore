import * as React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import ProductDetails from "../ProductDetails/ProductDetails";
import "./App.css";

export default function App() {
  const [searchValue, setSearchValue] = useState("");
  const [category, setCategory] = useState("");
  const [products, setProducts] = useState([]);
  const url = "http://localhost:3001/store";

  useEffect(() => {
    axios.get(url).then((response) => {
      // console.log(response.data);
      setProducts(response.data);
    });
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Home
                  products={products}
                  searchValue={searchValue}
                  setSearchValue={setSearchValue}
                  setCategory={setCategory}
                  category={category}
                />
              }
            />
            <Route
              path="/products/:id"
              element={<ProductDetails products={products} />}
            />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}
