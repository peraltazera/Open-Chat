import styled from "styled-components"

const MyMessageStl = styled.div`
    display: flex;
    width: 100%;
    padding: 0px 60px;
    margin-bottom: 10px;
    flex-direction: row-reverse;
    justify-content: end;
`;

const ContainerMessageStl = styled.div`
    display: flex;
    width: 50%;
    max-width: 50%;
    align-items: end;
    flex-direction: row;
    justify-content: end;
`;

const MessageStl = styled.div`
    color: ${(props) => props.theme.colors.chat.body.myMessage.message};
    padding: 12px 24px;
    width: fit-content;
    max-width: 800px;
    border-radius: 12px 12px 12px 12px;
    font-size: 14px;
    font-weight: 400;
    background-color: ${(props) => props.theme.colors.chat.body.myMessage.background};
    margin: 0px 10px 0px 0px;
    white-space: pre-line;
    word-wrap: break-word;
`;

const DateStl = styled.p`
    color: ${(props) => props.theme.colors.chat.body.myMessage.date};
    font-size: 10px;
    padding: 0px 10px;
    font-weight: 300;
    width: fit-content;
`;

export {MyMessageStl, ContainerMessageStl, MessageStl, DateStl}