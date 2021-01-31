import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.h1`
  font-family: "Yeseva One", cursive;
  color: #000000;
  font-size: 2vw;
  margin-bottom: 0.8rem;

  @media (max-width: 1300px) {
    font-size: 2rem;
  }
`;

export const Description = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #bfc0c0;
`;

export const DescrText = styled.h3`
  font-weight: 500;
  font-size: 1vw;

  @media (max-width: 1300px) {
    font-size: 1.1rem;
  }
`;
