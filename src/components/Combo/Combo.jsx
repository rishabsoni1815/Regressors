import * as S from "./Combo.style.js";
import * as Icons from "react-feather";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import plusImage from "./../../assets/plus.png";

const Combo = ({ product }) => {
  const [comboPack, setComboPack] = useState({});
  const [allProds, setAllProds] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

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
    fetch(`https://api-combo-kmeans.herokuapp.com/${product.product_id}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonResponse) => setComboPack(jsonResponse))
      .catch((err) => console.log(`Error : `, err));
  }, [product]);

  useEffect(() => {
    calcTotalPrice();
  }, [comboPack]);

  const calcTotalPrice = () => {
    setTotalPrice(0);
    let price = 0;
    comboPack?.product_id?.map((x, key) =>
      allProds?.map((product, key) =>
        x === product.product_id ? (price = price + product.price) : null
      )
    );
    setTotalPrice(price);
  };

  const loadProduct = () => {
    setTimeout(function () {
      window.location.reload();
    }, 200);
  };

  return (
    <S.Container>
      <S.Heading> Buy a Combo </S.Heading>

      <S.ComboContainer>
        <S.Combo>
          {comboPack && comboPack.product_id
            ? comboPack.product_id.map((x, key) =>
                allProds.map((product, key) =>
                  x === product.product_id ? (
                    <S.Wrapper>
                      <S.PlusContainer>
                        {comboPack.product_id.indexOf(x) !== 0 ? (
                          <img alt="+" src={plusImage} width="40px" />
                        ) : null}
                      </S.PlusContainer>

                      <Link to={`/${product._id}`} onClick={loadProduct}>
                        <S.ProductContainer>
                          <S.Image
                            src={product.images[0]}
                            alt="product image"
                          />
                          <S.InfoContainer>
                            <S.Name> {product.name} </S.Name>
                            <S.Description>
                              {" "}
                              {product.description}{" "}
                            </S.Description>
                            <S.Price> {` Rs. ${product.price}`} </S.Price>
                          </S.InfoContainer>
                        </S.ProductContainer>
                      </Link>
                    </S.Wrapper>
                  ) : null
                )
              )
            : null}
        </S.Combo>

        {product.price ? (
          <S.Footer>
            <S.Price>Rs. {totalPrice} </S.Price>
            <S.Button>
              <Icons.ShoppingBag size="18px" />
              <S.Text>Add Combo To Bag</S.Text>
            </S.Button>
          </S.Footer>
        ) : null}
      </S.ComboContainer>
    </S.Container>
  );
};

export default Combo;
