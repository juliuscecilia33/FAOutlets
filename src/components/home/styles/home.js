import styled from 'styled-components/macro';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Hero = styled.div`
    width: 100%;
    height: 60vh;
    background: #EF8354;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ImageContainer = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    img {
        max-width: 90%;
        height: auto;
    }
`;

export const TitleContainer = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 1rem;
`;

export const Title = styled.h1`
    font-size: 64px;
    font-family: Yeseva One;
    font-style: normal;
    font-weight: normal;
    font-size: 64px;
    color: ${({ color }) => color};
`;

export const Button = styled.a`
    margin: none;
    outline: none;
    border: none;
    width: 232px;
    height: 59px;
    border-radius: 20px;
    background: ${({ background }) => background};
    color: #FFFFFC;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 1rem;
`;

export const LogosContainer = styled.div`
    width: 100%;
    height: 45vh;
    background: #FFFFFC;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const LogoRow = styled.div`
    width: 85%;
    height: 40%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const Logo = styled.div`

    img {
        width: 130px;
        height: auto;
    }
`;

export const ManufacturerContainer = styled.div`
    width: 100%;
    height: 60vh;
    background: #2D3142;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ProductsContainer = styled.div`
    width: 100%;
    height: 60vh;
    background: #FFFFFC;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const PaymentsContainer = styled.div`
    width: 100%;
    height: 60vh;
    background: #4F5D75;
    display: flex;
    justify-content: center;
    align-items: center;
`;