import styled from 'styled-components/macro';

export const Container = styled.div`
    height: 40vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    overflow: visible;
`;

export const Icons = styled.div`
    position: absolute;
    top: -23%;
    width: 45%;
    height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const Icon = styled.div`
    width: 80px;
    height: 80px;
    background-color: #4F5D75;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    i {
        font-size: 30px;
        color: #FFFFFF;
    }
`;

export const Bottom = styled.div`
    position: relative;
    width: 100%;
    height: 60%;
    background-color: #2D3142;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Links = styled.div`
    width: 40%;
    height: 35px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const Link = styled.a`
    font-size: 1.0416666666666667vw;
    font-weight: 700;
    color: #FFFFFF;
    outline: none;
    text-decoration: none;
`;

export const TextPrint = styled.p`
    position: absolute;
    bottom: 4%;
    font-size: 18px;
    font-weight: 700;
    color: #FFFFFF;

    span {
        color: #EF8354;
    }
`;