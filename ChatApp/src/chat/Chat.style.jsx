import styled from "styled-components"

const ChatStl = styled.div`
    display: flex;
    flex-direction: column;
    background-color:   rgb(170, 170, 170);
    flex: 1;
`;

const InitialStl = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: #131517;
    flex: 1;
    font-size: 28px;
    padding-bottom: 360px;
`;

const TextStl = styled.p`
    padding-top: 24px;
    color: rgb(170, 170, 170);
    font-size: 16px;
`;

const TitleStl = styled.h1`
    font-size: 42px;
`;

export {ChatStl, InitialStl, TextStl, TitleStl}