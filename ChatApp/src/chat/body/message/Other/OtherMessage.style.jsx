import styled from "styled-components"

const OtherStl = styled.div`
    display: flex;
    width: 100%;
    padding: 0px 40px;
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
    color: ${(props) => props.theme.colors.primaryText};
    padding: 12px 24px;
    width:fit-content;
    max-width: 100%;
    border-radius: 12px 12px 12px 12px;
    font-size: 14px;
    font-weight: 400;
    background-color: ${(props) => props.theme.colors.backgroundOtherMessage};
    margin: 0px 0px 0px 10px;
`;

const DateStl = styled.div`
    color: ${(props) => props.theme.colors.secondaryText};
    font-size: 10px;
    padding: 0px 10px;
    font-weight: 300;
    width: fit-content;
`;

export {OtherStl, ContainerMessageStl, MessageStl, DateStl}