import styled from "styled-components"

const OtherStl = styled.div`
    display: flex;
    width: 100%;
    padding: 0px 60px;
    margin-bottom: 10px;
    flex-direction: row;
    justify-content: start;
`;

const ContainerMessageStl = styled.div`
    display: flex;
    width: 50%;
    max-width: 50%;
    align-items: end;
    flex-direction: row-reverse;
    justify-content: start;
`;

const MessageStl = styled.div`
    color: ${(props) => props.theme.colors.chat.body.otherMessage.message};
    padding: 12px 24px;
    width: fit-content;
    max-width: 800px;
    border-radius: 12px 12px 12px 12px;
    font-size: 14px;
    font-weight: 400;
    background-color: ${(props) => props.theme.colors.chat.body.otherMessage.background};
    margin: 0px 0px 0px 10px;
`;

const DateStl = styled.div`
    color: ${(props) => props.theme.colors.chat.body.otherMessage.date};
    font-size: 10px;
    padding: 0px 10px;
    font-weight: 300;
    width: fit-content;
`;

export {OtherStl, ContainerMessageStl, MessageStl, DateStl}