import styled from "styled-components/macro";

export const Container = styled.div`
  height: 40vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: visible;

  @media (max-width: 350px) {
    height: 60vh;
  }
`;

export const Icons = styled.div`
  position: absolute;
  top: -23%;
  width: 50%;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 750px) {
    width: 70%;
  }

  @media (max-width: 550px) {
    width: 90%;
  }

  @media (max-width: 350px) {
    top: -14%;
  }
`;

export const Icon = styled.div`
  width: 80px;
  height: 80px;
  background-color: #4f5d75;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  i {
    font-size: 1.9vw;
    color: #ffffff;
  }

  @media (max-width: 1400px) {
    width: 60px;
    height: 60px;

    i {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 550px) {
    width: 50px;
    height: 50px;

    i {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 350px) {
    width: 45px;
    height: 45px;

    i {
      font-size: 1rem;
    }
  }
`;

export const Bottom = styled.div`
  position: relative;
  width: 100%;
  height: 60%;
  background-color: #2d3142;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Links = styled.div`
  width: 40%;
  height: 35px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 750px) {
    width: 60%;
  }

  @media (max-width: 450px) {
    width: 80%;
  }

  @media (max-width: 350px) {
    height: 75%;
    flex-direction: column;
  }
`;

export const Link = styled.a`
  font-size: 1.0416666666666667vw;
  font-weight: 700;
  color: #ffffff;
  outline: none;
  text-decoration: none;
  transition: 0.3s ease all;

  @media (max-width: 1050px) {
    font-size: 1rem;
  }

  @media (max-width: 450px) {
    font-size: 0.9rem;
  }

  @media (max-width: 350px) {
    font-size: 0.8rem;
  }

  &:hover {
    color: #ef8354;
  }
`;

export const TextPrint = styled.p`
  position: absolute;
  bottom: 4%;
  font-size: 1.17vw;
  font-weight: 700;
  color: #ffffff;

  span {
    color: #ef8354;
  }

  @media (max-width: 750px) {
    font-size: 0.9rem;
  }

  @media (max-width: 350px) {
    font-size: 0.7rem;
  }
`;
