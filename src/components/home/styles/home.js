import styled from 'styled-components/macro';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: none;
`;

export const Hero = styled.div`
    width: 100%;
    height: 60vh;
    background: #EF8354;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1.5rem;
`;

export const ImageContainer = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: ${({ justifyContent }) => justifyContent};
    align-items: center;

    img {
        max-width: 85%;
        height: auto;
    }
`;

export const TitleContainer = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: ${({ alignItems }) => alignItems};
    padding: 0 1rem;
`;

export const Title = styled.h1`
    font-size: 64px;
    font-family: Yeseva One;
    font-style: normal;
    font-weight: normal;
    font-size: 54px;
    text-align: ${({ textAlign }) => textAlign};
    color: ${({ color }) => color};
    margin-bottom: 1rem;
`;

export const Button = styled.a`
    margin: none;
    outline: none;
    border: none;
    width: 200px;
    height: 53px;
    border-radius: 20px;
    background: ${({ background }) => background};
    color: #FFFFFC;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 1rem;

    i {
        color: #FFFFFC;
        font-size: 22px;
    }
`;

export const LogosContainer = styled.div`
    width: 100%;
    height: 45vh;
    background: #FFFFFC;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 1.5rem;
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
    padding: 0 1.5rem;
`;

export const ProductsContainer = styled.div`
    width: 100%;
    height: 60vh;
    background: #FFFFFC;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1.5rem;
`;

export const PaymentsContainer = styled.div`
    width: 100%;
    height: 60vh;
    background: #4F5D75;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1.5rem;
`;