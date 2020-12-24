import styled from 'styled-components/macro';

export const Container = styled.div`
    height: 20vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: visible;
`;

// export const Top = styled.div`
//     width: 100%;
//     height: 15%;
//     background: #c4c4c4;
//     display: flex;
//     justify-content: center;
//     overflow: visible;
// `;

export const Icons = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    width: 45%;
    height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const Icon = styled.div`
    width: 100px;
    height: 100px;
    background-color: #4F5D75;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    i {
        font-size: 50px;
        color: ##FFFFFF;
    }
`;

export const Bottom = styled.div`
    width: 100%;
    height: 100%;
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
    font-size: 24px;
    font-weight: 700;
    color: #FFFFFF;
    outline: none;
    text-decoration: none;
`;

export const TextPrint = styled.p`
    font-size: 18px;
    font-weight: 700;
    color: #FFFFFF;
    justify-content: flex-end;

    span {
        color: #EF8354;
    }
`;