import * as S from "./Home.style.js";
import { useState, useEffect } from "react";

import { Link, BrowserRouter as Router } from "react-router-dom";

import ProductCard from "./../ProductCard/ProductCard";

const Home = () => {
  const [allProds, setAllProds] = useState([]);

  useEffect(() => {
    fetch("https://floating-atoll-22103.herokuapp.com/products")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonResponse) => setAllProds(jsonResponse))
      .catch((err) => console.log("Error: " + err));
  }, []);

  const loadProduct = () => {
    setTimeout(function () {
      window.location.reload();
    }, 200);
  };

  return (
    <Router>
      <S.Container>
        {allProds.map((product, index) => (
          <Link to={`/${product._id}`}>
            <S.Button onClick={loadProduct}>
              <ProductCard product={product} />
            </S.Button>
          </Link>
        ))}
      </S.Container>
    </Router>
  );
};

export default Home;
