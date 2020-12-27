import styled from 'styled-components/macro';

export const Container = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 1rem;
`;

export const Item = styled.div`
    width: 100%;
    height: 136px;
    background: #2D3142;
    border: 4px solid #EF8354;
    border-radius: 50px;
    margin-bottom: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
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
    

    img {
        width: auto;
        max-width: 125px;
        max-height: 125px;
        height: auto;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
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

    h3 {
        font-style: italic;
        font-weight: bold;
        font-size: 36px;
        color: #FFFFFC;
        margin-right: 1rem;
    }

    i {
        font-size: 20px;
        color: #4F5D75;
    }
`;

export const Quantity = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
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

    i {
        font-size: 13px;
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

    h3 {
        color: #FFFFFC;
        font-size: 24px;
        font-weight: 700;
    }
`;

export const EmptyCart = styled.h3`
    font-size: 24px;
    font-weight: 500;
    color: #BFC0C0;
`;

export const Bottom = styled.div`
    width: 100%;
    height: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Subtotal = styled.h2`
    font-family: Yeseva One;
    font-size: 48px;
`;

export const Checkout = styled.button`
    width: 264px;
    height: 57px;
    border-radius: 10px;
    background-color: #EF8354;
    border: none;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFC;
`;