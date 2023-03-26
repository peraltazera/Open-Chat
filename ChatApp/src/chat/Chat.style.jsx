import styled from "styled-components"

const ChatStl = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.theme.colors.backgroundBodyChat};
    flex: 1;
`;

const InitialStl = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.colors.primaryText};
    background-color: ${(props) => props.theme.colors.backgroundBodyChat};
    flex: 1;
    font-size: 28px;
    padding-bottom: 360px;
`;

const TextStl = styled.p`
    padding-top: 24px;
    color: ${(props) => props.theme.colors.secondaryText};
    font-size: 16px;
`;

const TitleStl = styled.h1`
    font-size: 42px;
`;

export {ChatStl, InitialStl, TextStl, TitleStl}