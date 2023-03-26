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
    width: 20px;
    text-align: center;
    background-color: ${(props) => props.theme.colors.number};
    border-radius: 100px;
`;

const DateStl = styled.p`
    color:${(props) => props.theme.colors.secondaryText};
`;

const NameStl = styled.p`
    color: ${(props) => props.theme.colors.primaryText};
    font-size: 16px;
    font-weight: 100;
`;

const MessageStl = styled.p`
    color: ${(props) => props.theme.colors.secondaryText};
    font-size: 16px;
    font-weight: 100;
`;

export {CardChatStl, InfoStl, InfoContainerStl, ImageStl, NumberStl, DateStl, NameStl, MessageStl}