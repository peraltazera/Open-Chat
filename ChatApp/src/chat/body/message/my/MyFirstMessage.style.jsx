import styled from "styled-components"

const FirstStl = styled.div`
    display: flex;
    width: 100%;
    padding: 0px 0px;
    margin-bottom: 10px;
    flex-direction: row-reverse;
    justify-content: end;
`;

const ContainerMessageStl = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    max-width: 50%;
    align-items: end;
`;

const ContainerMessageTextStl = styled.div`
    display: flex;
    align-items: end;
    flex-direction: row;
    justify-content: end;
`;

const MessageStl = styled.div`
    color: ${(props) => props.theme.colors.chat.body.myMessage.message};
    margin: 10px 10px 0px 10px;
    padding: 12px 24px;
    width:fit-content;
    max-width: 100%;
    background-color: ${(props) => props.theme.colors.chat.body.myMessage.background};
    border-radius: 12px 0px 12px 12px;
    font-size: 14px;
    font-weight: 400;
`;

const ImageStl = styled.img`
    height: 40px;
    border-radius: 100px;
`;

const InfoStl = styled.div`
    color: ${(props) => props.theme.colors.chat.body.myMessage.name};
    padding: 0px 12px;
    display: flex;
    align-items: center;
    gap: 0px;
    font-size: 16px;
    width: 100%;
    flex-direction: row-reverse;
    width: fit-content;
`;

const DateStl = styled.p`
    color: ${(props) => props.theme.colors.chat.body.myMessage.date};
    font-size: 10px;
    padding: 0px;
    font-weight: 300;
    width: fit-content;
`;

export {FirstStl, ContainerMessageStl, ContainerMessageTextStl, MessageStl, ImageStl, InfoStl, DateStl}

