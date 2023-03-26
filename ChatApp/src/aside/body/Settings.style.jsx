import styled from "styled-components"

const SettingsStl = styled.div`
    background-color: ${(props) => props.theme.colors.backgroundAside};
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    padding: 36px 20px;
    gap: 16px;
    color: white;
`;

export {SettingsStl}