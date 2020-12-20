import styled from 'styled-components/macro';

export const Container = styled.div`
    width: 300px;
    height: 434px;
    background: #2D3142;
    border: 4px solid #EF8354;
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;

export const Row = styled.div`
    width: 100%;
    height: 50vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const Picture = styled.div`
    width: 220px;
    height: 154px;
    background: #EF8354;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: visible;

    img {
        width: 200px;
        height: auto;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }
`;

export const Title = styled.h2`
    font-family: Roboto;
    font-style: italic;
    font-weight: bold;
    font-size: 30px;
    color: #FFFFFF;
`;

export const Description = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #E5E5E5;
`;

export const CartPrice = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const PriceContainer = styled.div`
    width: 96px;
    height: 36px;
    background: #4F5D75;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Price = styled.h3`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    color: #FFFFFF;
`;

export const CartContainer = styled.div`
    width: 53px;
    height: 53px;
    background: #EF8354;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    i {
        width: 20px;
        height: auto;
        background: #FFFFFF;
    }
`;