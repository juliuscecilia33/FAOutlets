import styled from 'styled-components/macro';

export const Container = styled.div`
    position: relative;
    width: 300px;
    height: 300px;
    border: 5px solid #EF8354;
    border-radius: 50px;
    ${'' /* background-image: url("./Images/ArrowheadMillsTest.jpg"); */}
    background: gray;
    background-position: center; 
    background-repeat: no-repeat; 
    background-size: cover;
`;

export const Row = styled.div`
    width: 100%;
    height: 35vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const Title = styled.h2`
    font-size: 28px;
    font-weight: 700;
    color: ##FFFFFF;
`;

export const Description = styled.p`
    font-size: 20px;
    font-weight: 600;
    color: ##FFFFFF;
`;

export const LogoPlacement = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 96px;
    height: 96px;
    background: #FFFFFF;
    border-top-left-radius: 45px;
    border-bottom-right-radius: 45px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 70px;
        height: auto;
        filter: drop-shadow(0px 2px 5px rgba(0, 0, 0, 0.1));
    }
`;