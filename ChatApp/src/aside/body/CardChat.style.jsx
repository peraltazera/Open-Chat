import styled from "styled-components"

const CardChatStl = styled.div`
    height: 80px;
    padding: 46px 20px;
    margin: 8px 12px;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: ${(props) => props.theme.colors.primaryText};
    border-radius: 8px;
    border: none;

    &:hover {
        background-color: rgb(255, 255, 255,0.06);
        cursor: pointer;
    }
`;

const InfoStl = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 8px;
    padding: 0px 14px;
`;

const InfoContainerStl = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const ImageStl = styled.img`
    height: 60px;
    border-radius: 100px;
`;

const NumberStl = styled.p`
    width: fit-content;
    background-color:  ${(props) => props.theme.colors.aside.body.card.backgroundNumber};
    padding: 2px 6px 0px 6px;
    border-radius: 100px;
    margin-top: 4px;
    color: ${(props) => props.theme.colors.aside.body.card.number};
`;

const DateStl = styled.p`
    color: ${(props) => props.theme.colors.aside.body.card.date};
`;

const NameStl = styled.p`
    color: ${(props) => props.theme.colors.aside.body.card.name};
    font-size: 16px;
    font-weight: 100;
`;

const MessageStl = styled.p`
    color: ${(props) => props.theme.colors.aside.body.card.message};
    font-size: 16px;
    font-weight: 100;
    margin-top: 4px;
`;

const IconCheckStl = styled.span`
    height: 24px;
    color: ${(props) => props.theme.colors.aside.body.card.iconEnabled};
`;

const IconNoCheckStl = styled.span`
    height: 24px;
    color: ${(props) => props.theme.colors.aside.body.card.iconDisabled};
`;

export {CardChatStl, InfoStl, InfoContainerStl, ImageStl, NumberStl, DateStl, NameStl, MessageStl, IconCheckStl, IconNoCheckStl}