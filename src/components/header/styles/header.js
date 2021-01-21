import styled from "styled-components/macro";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 8vh;
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
`;

export const LogoContainer = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
`;

export const Logo = styled.button`
  width: 100%;
  height: 100%;
  outline: none;
  background: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  img {
    width: 7.3046875vw;
    height: auto;

    @media (max-width: 950px) {
      width: 100px;
      height: auto;
    }
  }
`;

export const Links = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 15%;

  @media (max-width: 750px) {
    display: none;
  }
`;

export const Link = styled.a`
  font-size: 1.1029166666666667vw;
  font-weight: 600;
  color: #2d3142;
  text-decoration: none;
  cursor: pointer;
  transition: 0.5s ease all;

  &:hover,
  &:active,
  &:focus {
    color: #ef8354;
  }

  @media (max-width: 1050px) {
    font-size: 1rem;
  }
`;

export const Price = styled.p`
  font-size: 1.0229166666666667vw;
  font-weight: 700;
  color: #2d3142;
  margin-right: 0.5rem;

  @media (max-width: 750px) {
    display: none;
  }
`;

export const ShoppingCart = styled.a`
  position: relative;
  width: 50px;
  height: 50px;
  border: none;
  outline: none;
  border-radius: 50%;
  background-color: #ef8354;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: visible;

  @media (max-width: 750px) {
    display: none;
  }

  i {
    color: #ffffff;
    font-size: 1.1927083333333333vw;
  }

  @media (max-width: 1400px) {
    width: 40px;
    height: 40px;
  }
`;

export const Checkout = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 15%;
  height: 100%;

  @media (max-width: 750px) {
    display: none;
  }
`;

export const ShoppingBadge = styled.div`
  position: absolute;
  top: -10%;
  right: -10%;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #4f5d75;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 0.8vw;
  font-weight: 700;

  @media (max-width: 750px) {
    display: none;
  }

  @media (max-width: 1400px) {
    width: 20px;
    height: 20px;
  }
`;
