import * as S from "./ProductPage.style.js";

import { useState, useEffect } from "react";

import ImageContainer from "./../ImageContainer/ImageContainer";
import InfoContainer from "./../InfoContainer/InfoContainer";
import Combo from "./../Combo/Combo";

const ProductPage = ({ match, location }) => {
  const [product, setProduct] = useState({});

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

  useEffect(() => {
    allProds?.map((product, index) =>
      product._id === match.params.id ? setProduct(product) : null
    );
  });

  return (
    <>
      <S.Container>
        <ImageContainer product={product} />
        <InfoContainer product={product} />
      </S.Container>
      {product.price ? <Combo product={product} /> : null}
    </>
  );
};

export default ProductPage;
