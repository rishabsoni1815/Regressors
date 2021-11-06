import * as S from "./Navigation.style.js";
import * as Icons from "react-feather";

import { Link } from "react-router-dom";

import logo from "./../../assets/myntra1.png";

const Navigation = () => {
  return (
    <>
      <S.Nav>
        <S.Container>
          <Link to="/">
            <S.LogoContainer>
              <S.Image src={logo} alt="logo" />
            </S.LogoContainer>
          </Link>
          <S.Link>MEN</S.Link>
          <S.Link>WOMEN</S.Link>
          <S.Link>KIDS</S.Link>
          <S.Link>HOME & LIVING</S.Link>
          <S.Link>BEAUTY</S.Link>
        </S.Container>
        <S.Container>
          <S.SearchContainer>
            <S.IconContainer>
              {" "}
              <S.Icon>
                {" "}
                <Icons.Search size="16px" />{" "}
              </S.Icon>{" "}
            </S.IconContainer>
            <S.Search placeholder="Search for products, brands and more" />
          </S.SearchContainer>
          <S.IconContainer>
            {" "}
            <S.Icon>
              {" "}
              <Icons.User />{" "}
            </S.Icon>{" "}
          </S.IconContainer>
          <S.IconContainer>
            {" "}
            <S.Icon>
              {" "}
              <Icons.Heart />{" "}
            </S.Icon>{" "}
          </S.IconContainer>
          <S.IconContainer>
            {" "}
            <S.Icon>
              {" "}
              <Icons.ShoppingBag />{" "}
            </S.Icon>
          </S.IconContainer>
        </S.Container>
      </S.Nav>
    </>
  );
};
export default Navigation;
