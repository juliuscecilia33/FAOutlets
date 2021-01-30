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
`;

export const Row = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
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
  }
`;

export const Title = styled.h2`
  font-family: Roboto;
  font-style: italic;
  font-weight: bold;
  font-size: 30px;
  color: #ffffff;
  text-align: center;
`;

export const Description = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #e5e5e5;
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
`;

export const Price = styled.h3`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  color: #ffffff;
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
