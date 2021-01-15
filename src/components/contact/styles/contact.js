import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
`;

export const Section = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 3rem;

  @media (max-width: 1400px) {
    padding: 0 2rem;
  }
`;

export const Title = styled.h1`
  font-size: 5.5vw;
  color: #2d3142;
  font-family: Yeseva One;
  text-align: left;
  width: 75%;
  margin-bottom: 2rem;
`;

export const Description = styled.p`
  font-size: 1.2vw;
  font-family: Roboto;
  color: #2d3142;
  font-weight: 500;
  text-align: left;
  width: 40%;
  line-height: 3vh;
  margin-bottom: 3rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
`;

export const FormBox = styled.div`
  position: relative;

  input {
    width: 80%;
    padding: 10px 0;
    font-size: 1vw;
    color: #bfc0c0;
    margin-bottom: 30px;
    border: none;
    border-bottom: 2px solid #bfc0c0;
    outline: none;
    background: transparent;
    transition: ease all 0.5s;
  }

  label {
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px 0;
    font-size: 1vw;
    color: #bfc0c0;
    pointer-events: none;
    transition: ease all 0.5s;
  }

  input:focus ~ label,
  input:valid ~ label {
    top: -20px;
    left: 0;
    color: #ef8354;
    font-size: 0.75vw;
  }

  input:focus,
  input:valid {
    border-bottom: 2px solid #ef8354;
    color: #2d3142;
  }
`;

export const Submit = styled.button`
  width: 264px;
  height: 57px;
  background: #ef8354;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  color: #fffffc;
  font-size: 1.3vw;
  font-weight: 700;
  border: none;
  outline: none;
  cursor: pointer;

  @media (max-width: 1400px) {
    width: 236px;
    height: 51px;
  }
`;

export const Image = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;

  img {
    width: 46vw;
    height: auto;
  }
`;

export const SubSection = styled.div`
  width: 100%;
  display: flex;
`;

export const Support = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  h2 {
    font-family: Yeseva One;
    font-size: 3vw;
    color: #2d3142;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.2vw;
    font-weight: 500;
    color: #2d3142;
    margin-bottom: 1rem;
  }
`;

export const Companies = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 3vw;
    font-family: Yeseva One;
    color: #2d3142;
    margin-bottom: 1.5rem;
  }
`;

export const Columns = styled.div`
  display: flex;
  width: 100%;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  p {
    font-size: 1.1vw;
    font-weight: 500;
    color: #2d3142;
    margin-bottom: 1.3rem;

    i {
      font-size: 0.9vw;
      color: #ef8354;
      cursor: pointer;
    }
  }
`;
