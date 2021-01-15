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
  text-align: left;
  width: 75%;
`;

export const Description = styled.p`
  font-size: 28px;
  font-family: Roboto;
  color: #2d3142;
  font-weight: 500;
  text-align: left;
  width: 60%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

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

export const Submit = styled.button`
  width: 264px;
  height: 57px;
  color: #ef8354;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  color: #fffffc;
  font-size: 24px;
  font-weight: 700;
`;

export const Image = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 780px;
    height: auto;
  }
`;

// export const SubSection = styled.div`
//   width: 50%;
//   display: flex;
//   flex-direction: column;
// `;

export const Support = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  h2 {
    font-family: Yeseva One;
    font-size: 48px;
    color: #2d3142;
  }

  p {
    font-size: 24px;
    font-weight: 500;
    color: #2d3142;
  }
`;

export const Companies = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 48px;
    font-family: Yeseva One;
    color: #2d3142;
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
    font-size: 18px;
    font-weight: 500;
    color: #2d3142;

    i {
      font-size: 14px;
      color: #ef8354;
    }
  }
`;
