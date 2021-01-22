import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: none;
`;

export const Hero = styled.div`
  width: 100%;
  height: 60vh;
  background: #ef8354;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1.5rem;

  @media (max-width: 750px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const ImageContainer = styled.div`
  width: 70%;
  height: 50%;
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: center;

  img {
    max-width: 85%;
    height: auto;

    @media (max-width: 750px) {
      max-width: 100%;
      height: auto;
    }
  }

  @media (max-width: 650px) {
    width: 95%;
  }
`;

export const TitleContainer = styled.div`
  width: 30%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${({ alignItems }) => alignItems};
  padding: 0 1rem;

  @media (max-width: 750px) {
    width: 100%;
    align-items: center;
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-family: Yeseva One;
  font-style: normal;
  font-weight: normal;
  font-size: 3.5vw;
  text-align: ${({ textAlign }) => textAlign};
  color: ${({ color }) => color};
  margin-bottom: 1rem;

  @media (max-width: 750px) {
    text-align: center;
    line-height: 40px;
    font-size: 2rem;
  }

  @media (max-width: 550px) {
    font-size: 1.8rem;
  }
`;

export const Button = styled.a`
  margin: none;
  outline: none;
  border: none;
  width: 200px;
  height: 53px;
  border-radius: 20px;
  background: ${({ background }) => background};
  color: #fffffc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 1rem;
  font-size: 1.2rem;

  @media (max-width: 1400px) {
    width: 150px;
    height: 43px;
    font-size: 1rem;
  }

  i {
    color: #fffffc;
    font-size: 1.3vw;

    @media (max-width: 450px) {
      font-size: 12px;
    }
  }

  @media (max-width: 850px) {
    width: 142px;
    height: 35px;
    font-size: 0.8rem;
  }
`;

export const LogosContainer = styled.div`
  width: 100%;
  height: 45vh;
  background: #fffffc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1.5rem;

  @media (max-width: 450px) {
    height: 60vh;
    flex-direction: row;
  }
`;

export const LogoRow = styled.div`
  width: 85%;
  height: 40%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 450px) {
    flex-direction: column;
    width: 50%;
    height: 100%;
  }
`;

export const Logo = styled.div`
  img {
    width: 8.4vw;
    height: auto;
  }

  @media (max-width: 450px) {
    img {
      width: 3rem;
      height: auto;
    }
  }
`;

export const ManufacturerContainer = styled.div`
  width: 100%;
  height: 60vh;
  background: #2d3142;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1.5rem;

  @media (max-width: 750px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const ProductsContainer = styled.div`
  width: 100%;
  height: 60vh;
  background: #fffffc;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1.5rem;

  @media (max-width: 750px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const PaymentsContainer = styled.div`
  width: 100%;
  height: 60vh;
  background: #4f5d75;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1.5rem;

  @media (max-width: 750px) {
    flex-direction: column;
    text-align: center;
  }
`;
