import styled from 'styled-components/macro';

export const Container = styled.div`
    width: 100%;
    height: 7vh;
    display: flex;
    align-items: center;
`;

export const Logo = styled.div`
    width: 10%;
    height: 100%;

    img {
        width: 189px;
        height: 51px;
    }
`;

export const Links = styled.div`
    width: 80%;
    height: 100%;
`;

export const Link = styled.h2`
    font-size: 28px;
    font-weight: 600;
    color: #2D3142;
`;

export const Price = styled.p`
    font-size: 24px;
    font-weight: 700;
    color: #2D3142;
`;

export const ShoppingCart = styled.div`
    width: 65px;
    height: 65px;
    border-radius: 50%;
    background-color: #EF8354;
    display: flex;
    justify-content: center;
    align-items: center;

    i {
        color: #FFFFFF;
        font-size: 26px;
    }
`;

export const Checkout = styled.div`
    display: flex;
    align-items: center;
    width: 10%;
    height: 100%;
`;