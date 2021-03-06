import * as S from "./ProductCard.style.js";

const ProductCard = ({ product }) => {
  return (
    <>
      <S.Container>
        <S.ImageContainer>
          <img src={`${product.images[0]}`} width="220px" alt="product" />
        </S.ImageContainer>

        <S.InfoContainer>
          <S.Name> {product.name} </S.Name>
          <S.Description> {product.description} </S.Description>
          <S.Price> Rs. {product.price} </S.Price>
        </S.InfoContainer>
      </S.Container>
    </>
  );
};

export default ProductCard;
