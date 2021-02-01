import styled from "styled-components/macro";

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
`;

export const Item = styled.div`
  width: 100%;
  height: 13vh;
  background: #2d3142;
  border: 4px solid #ef8354;
  border-radius: 50px;
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.5rem;

  @media (max-width: 1100px) {
    height: 12vh;
  }

  @media (max-width: 950px) {
    height: 11vh;
  }

  @media (max-width: 550px) {
    height: 9.5vh;
  }

  @media (max-width: 450px) {
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 14vh;
    padding: 0.5rem 1rem;
    border-radius: 35px;
  }
`;

export const Picture = styled.div`
  width: 125px;
  height: 87px;
  background-color: #ef8354;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow: visible;

  @media (max-width: 1400px) {
    width: 115px;
    height: 77px;
  }

  @media (max-width: 1100px) {
    width: 110px;
    height: 74px;
  }

  @media (max-width: 950px) {
    width: 105px;
    height: 71px;
  }

  @media (max-width: 650px) {
    display: none;
  }

  img {
    width: auto;
    max-width: 120px;
    max-height: 120px;
    height: auto;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    @media (max-width: 1400px) {
      width: auto;
      max-width: 110px;
      max-height: 110px;
      height: auto;
    }

    @media (max-width: 1100px) {
      max-width: 100px;
      max-height: 100px;
      width: auto;
      height: auto;
    }

    @media (max-width: 950px) {
      max-width: 90px;
      max-height: 90px;
      width: auto;
      height: auto;
    }
  }
`;

export const Center = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px) {
    width: 45%;
  }

  @media (max-width: 550px) {
    width: 50%;
  }

  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const Name = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.5rem;

  h3 {
    font-style: italic;
    font-weight: bold;
    font-size: 1.8vw;
    color: #fffffc;
    margin-right: 1rem;
    text-align: center;

    @media (max-width: 1100px) {
      font-size: 1.2rem;
    }

    @media (max-width: 550px) {
      font-size: 1rem;
    }
  }

  button {
    outline: none;
    background: none;
    border: none;
    cursor: pointer;
  }

  i {
    font-size: 1.1020833333333333vw;
    color: #4f5d75;

    @media (max-width: 900px) {
      font-size: 0.9rem;
    }
  }
`;

export const Quantity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const QuantityText = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: #bfc0c0;

  @media (max-width: 1100px) {
    font-size: 1rem;
  }

  @media (max-width: 900px) {
    font-size: 0.8rem;
  }

  @media (max-width: 550px) {
    font-size: 0.7rem;
  }
`;

export const Update = styled.button`
  width: 24px;
  height: 24px;
  background-color: #ef8354;
  outline: none;
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-right: 0.7rem;

  @media (max-width: 1400px) {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 900px) {
    width: 18px;
    height: 18px;
  }

  i {
    font-size: 0.7463541666666666vw;
    color: #fffffc;

    @media (max-width: 650px) {
      font-size: 0.5rem;
    }
  }
`;

export const Price = styled.div`
  width: 112px;
  height: 42px;
  background: #4f5d75;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

  @media (max-width: 1400px) {
    width: 102px;
    height: 32px;
  }

  @media (max-width: 700px) {
    width: 96px;
    height: 30px;
  }

  @media (max-width: 550px) {
    width: 90px;
    height: 28px;
  }

  h3 {
    color: #fffffc;
    font-size: 1.1625vw;
    font-weight: 700;

    @media (max-width: 1100px) {
      font-size: 1rem;
    }

    @media (max-width: 700px) {
      font-size: 0.9rem;
    }
  }
`;

export const EmptyCart = styled.button`
  background: none;
  outline: none;
  border: none;
  font-size: 1vw;
  font-weight: 500;
  color: #bfc0c0;
  cursor: pointer;
  margin-bottom: 2rem;

  @media (max-width: 950px) {
    font-size: 0.8rem;
  }
`;

export const Bottom = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Subtotal = styled.h2`
  font-family: Yeseva One;
  font-size: 2.5vw;
  margin-bottom: 1rem;

  @media (max-width: 700px) {
    font-size: 1.5rem;
  }
`;

export const Checkout = styled.a`
  width: 260px;
  height: 53px;
  border-radius: 15px;
  background-color: #ef8354;
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fffffc;

  @media (max-width: 1400px) {
    width: 230px;
    height: 43px;
  }
`;

export const EmptyMessage = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    font-size: 16px;
    font-weight: 600;
    color: #000000;
    margin-bottom: 1rem;
  }
`;

export const EmptyLink = styled.a`
  width: 280px;
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
    width: 250px;
    height: 43px;
  }
`;
