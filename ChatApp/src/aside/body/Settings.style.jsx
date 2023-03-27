import styled from "styled-components"

const SettingsStl = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    padding: 36px 20px;
    gap: 16px;
    color: ${(props) => props.theme.colors.aside.setting.text};
`;

export {SettingsStl}