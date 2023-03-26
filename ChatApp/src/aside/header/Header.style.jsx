import styled from "styled-components"

const HeaderStl = styled.div`
    background-color: ${(props) => props.theme.colors.backgroundAside};
    color: ${(props) => props.theme.colors.primaryText};
    height: 96px;
    display: flex;
    padding: 40px 20px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const TitleStl = styled.h1`
    color: ${(props) => props.theme.colors.primaryText};
    font-size: 32px;
    font-weight: 200;
`;

export {HeaderStl, TitleStl}