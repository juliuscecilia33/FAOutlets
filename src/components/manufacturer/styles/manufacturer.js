import styled from "styled-components/macro";

export const Container = styled.div`
  position: relative;
  width: 300px;
  height: 284px;
  outline: none;
  border: 5px solid #ef8354;
  border-radius: 50px;
  background-image: url(${({ src }) => src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 2rem 1.5rem;
  ${"" /* padding-left: 1.5rem; */}
  text-align: left;
  cursor: pointer;

  @media (max-width: 1600px) {
    width: 250px;
    height: 234px;
  }

  @media (max-width: 1450px) {
    width: 240px;
    height: 224px;
  }

  @media (max-width: 1300px) {
    width: 220px;
    height: 214px;
  }
`;

export const Row = styled.div`
  width: 100%;
  height: 35vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 1.6vw;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.7rem;
`;

export const DescriptionContainer = styled.div`
  max-width: 205px;
  width: 100%;
  height: 120px;

  @media (max-width: 1300px) {
    height: 65%;
  }
`;

export const Description = styled.p`
  font-size: 1vw;
  font-weight: 500;
  color: #ffffff;

  @media (max-width: 1300px) {
    font-size: 0.85rem;
    line-height: 15px;
  }
`;

export const LogoPlacement = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 96px;
  height: 96px;
  background: #ffffff;
  border-top-left-radius: 45px;
  border-bottom-right-radius: 45px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 70px;
    height: auto;
    filter: drop-shadow(0px 2px 5px rgba(0, 0, 0, 0.1));
  }

  @media (max-width: 1600px) {
    width: 86px;
    height: 86px;

    img {
      width: 60px;
      height: auto;
    }
  }

  @media (max-width: 1450px) {
    width: 76px;
    height: 76px;

    img {
      width: 50px;
      height: auto;
    }
  }

  @media (max-width: 1300px) {
    width: 66px;
    height: 66px;

    img {
      width: 40px;
      height: auto;
    }
  }
`;
