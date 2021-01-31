import styled from "styled-components/macro";

export const Container = styled.div`
  width: 300px;
  height: 434px;
  background: #2d3142;
  border: 4px solid #ef8354;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 0 1.3rem;
  margin: 1.4rem 5rem;

  @media (max-width: 1300px) {
    width: 280px;
    height: 414px;
  }

  @media (max-width: 1050px) {
    margin: 1.2rem;
  }

  @media (max-width: 700px) {
    width: 250px;
    height: 384px;
  }

  @media (max-width: 650px) {
    width: 225px;
    height: 369px;
  }
`;

export const Row = styled.div`
  width: 85%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;

  @media (max-width: 1050px) {
    width: 90%;
  }
`;

export const Picture = styled.div`
  width: 220px;
  height: 154px;
  background: #ef8354;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: visible;

  img {
    width: auto;
    max-width: 200px;
    max-height: 200px;
    height: auto;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    @media (max-width: 1300px) {
      max-width: 175px;
      max-height: 175px;
      width: auto;
      height: auto;
    }

    @media (max-width: 700px) {
      max-width: 150px;
      max-height: 150px;
      width: auto;
      height: auto;
    }
  }

  @media (max-width: 1300px) {
    width: 200px;
    height: 134px;
  }

  @media (max-width: 700px) {
    width: 180px;
    height: 124px;
  }
`;

export const Title = styled.h2`
  font-family: Roboto;
  font-style: italic;
  font-weight: bold;
  font-size: 30px;
  color: #ffffff;
  text-align: center;

  @media (max-width: 1300px) {
    font-size: 26px;
  }

  @media (max-width: 700px) {
    font-size: 23px;
  }
`;

export const Description = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #e5e5e5;

  @media (max-width: 1300px) {
    font-size: 13px;
  }

  @media (max-width: 650px) {
    font-size: 12px;
  }
`;

export const CartPrice = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PriceContainer = styled.div`
  width: 96px;
  height: 36px;
  background: #4f5d75;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1300px) {
    width: 92px;
    height: 28px;
  }

  @media (max-width: 700px) {
    width: 86px;
    height: 26px;
  }

  @media (max-width: 650px) {
    width: 86px;
    height: 28px;
  }
`;

export const Price = styled.h3`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  color: #ffffff;

  @media (max-width: 1300px) {
    font-size: 17px;
  }

  @media (max-width: 700px) {
    font-size: 15px;
  }

  @media (max-width: 650px) {
    font-size: 14px;
  }
`;

export const CartContainer = styled.button`
  width: 53px;
  height: 53px;
  background: #ef8354;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  i {
    font-size: 20px;
    margin: 0;
    padding: 0;
    color: #ffffff;

    @media (max-width: 1300px) {
      font-size: 18px;
    }

    @media (max-width: 700px) {
      font-size: 16px;
    }
  }

  @media (max-width: 1300px) {
    width: 50px;
    height: 50px;
  }

  @media (max-width: 700px) {
    width: 46px;
    height: 46px;
  }
`;

export const Error = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    font-family: Yeseva One;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    color: #000000;
    margin-bottom: 2rem;
  }
`;

export const Link = styled.a`
  width: 260px;
  height: 53px;
  border-radius: 10px;
  background-color: #ef8354;
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fffffc;

  @media (max-width: 1400px) {
    width: 240px;
    height: 43px;
  }
`;
