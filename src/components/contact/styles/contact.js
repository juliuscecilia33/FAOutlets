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
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 96px;
  color: #2d3142;
  font-family: Yeseva One;
`;

export const Description = styled.p`
  font-size: 28px;
  font-family: Roboto;
  color: #2d3142;
  font-weight: 500;
`;

export const Form = styled.form``;

export const FormBox = styled.div`
  position: relative;

  input {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    color: #bfc0c0;
    margin-bottom: 30px;
    border: none;
    border-bottom: 2px solid #bfc0c0;
    outline: none;
    background: transparent;
  }

  label {
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px 0;
    font-size: 16px;
    color: #bfc0c0;
    pointer-events: none;
    transition: 0.5s ease all;
  }

  input:focus ~ label,
  input:valid ~ label {
    top: -20px;
    left: 0;
    color: #ef8354;
    font-size: 12px;
  }
`;
