import styled from 'styled-components/macro';

export const Container = styled.div`
    width: 100%;
    height: 8vh;
    display: flex;
    align-items: center;
    padding: 0 1.5rem;
`;

export const Logo = styled.button`
    width: 15%;
    height: 100%;
    outline: none;
    background: none;
    border: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;

    img {
        width: 7.3046875vw;
        height: auto;
    }
`;

export const Links = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Link = styled.a`
    font-size: 1.1029166666666667vw;
    font-weight: 600;
    color: #2D3142;
    margin-right: 3rem;
    text-decoration: none;
    cursor: pointer;
`;

export const Price = styled.p`
    font-size: 1.0229166666666667vw;
    font-weight: 700;
    color: #2D3142;
    margin-right: 0.5rem;
`;

export const ShoppingCart = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #EF8354;
    display: flex;
    justify-content: center;
    align-items: center;

    i {
        color: #FFFFFF;
        font-size: 1.1927083333333333vw;
    }

    @media (max-width: 1400px) {
        width: 40px;
        height: 40px;
    }
`;

export const Checkout = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 15%;
    height: 100%;
`;

export const ShoppingBadge = styled.div`

`;