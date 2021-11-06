import * as S from "./InfoContainer.style.js";
import * as Icons from "react-feather";

const InfoContainer = ({ product }) => {
  return (
    <>
      <S.Container>
        <S.Name> {product?.name} </S.Name>
        <S.Description> {product?.description} </S.Description>
        <hr />
        <S.Price>
          {" "}
          {product.price ? `Rs. ${product.price}` : "Loading..."}{" "}
        </S.Price>

        {product.price ? (
          <S.Button>
            <Icons.ShoppingBag size="18px" />
            <S.Text>Add To Bag</S.Text>
          </S.Button>
        ) : null}
      </S.Container>
    </>
  );
};

export default InfoContainer;
