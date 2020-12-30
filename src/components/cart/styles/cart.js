import styled from 'styled-components/macro';

export const Container = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 1rem;
`;

export const Item = styled.div`
    width: 100%;
    height: 14.73142112125163vh;
    background: #2D3142;
    border: 4px solid #EF8354;
    border-radius: 50px;
    margin-bottom: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2.5rem;
`;

export const Picture = styled.div`
    width: 125px;
    height: 87px;
    background-color: #EF8354;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    overflow: visible;

    @media (max-width: 1400px) {
        width: 115px;
        height: 77px;
    }
    

    img {
        width: auto;
        max-width: 120px;
        max-height: 120px;
        height: auto;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

        @media (max-width: 1400px) {
            width: auto;
            max-width: 110px;
            max-height: 110px;
            height: auto;
        }
    }
`;

export const Center = styled.div`
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Name = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.5rem;

    h3 {
        font-style: italic;
        font-weight: bold;
        font-size: 1.8vw;
        color: #FFFFFC;
        margin-right: 1rem;
        text-align: center;
    }

    button {
        outline: none;
        background: none;
        border: none;
        cursor: pointer;
    }

    i {
        font-size: 1.1020833333333333vw;
        color: #4F5D75;
    }
`;

export const Quantity = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const QuantityText = styled.p`
    font-size: 18px;
    font-weight: 500;
    color: #BFC0C0;
`;

export const Update = styled.button`
    width: 24px;
    height: 24px;
    background-color: #EF8354;
    outline: none;
    border: none;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-right: 0.7rem;

    @media (max-width: 1400px) {
        width: 20px;
        height: 20px;
    }

    i {
        font-size: 0.7463541666666666vw;
        color: #FFFFFC;
    }
`;

export const Price = styled.div`
    width: 112px;
    height: 42px;
    background: #4F5D75;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;

    @media (max-width: 1400px) {
        width: 102px;
        height: 32px;
    }

    h3 {
        color: #FFFFFC;
        font-size: 1.1625vw;
        font-weight: 700;
    }
`;

export const EmptyCart = styled.button`
    background: none;
    outline: none;
    border: none;
    font-size: 1vw;
    font-weight: 500;
    color: #BFC0C0;
    cursor: pointer;
    margin-bottom: 2rem;
`;

export const Bottom = styled.div`
    width: 100%;
    height: 30vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Subtotal = styled.h2`
    font-family: Yeseva One;
    font-size: 2.5vw;
    margin-bottom: 1rem;
`;

export const Checkout = styled.a`
    width: 260px;
    height: 53px;
    border-radius: 10px;
    background-color: #EF8354;
    border: none;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFC;

    @media (max-width: 1400px) {
        width: 240px;
        height: 43px;
    }
`;

export const EmptyMessage = styled.div`
    width: 100%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h3 {
        font-size: 16px;
        font-weight: 600;
        color: #000000;
        margin-bottom: 1rem;
    }
`;

export const EmptyLink = styled.a`
    width: 280px;
    height: 53px;
    border-radius: 10px;
    background-color: #EF8354;
    border: none;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFC;

    @media (max-width: 1400px) {
        width: 250px;
        height: 43px;
    }
`;