import styled from "styled-components"

const SettingsStl = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    padding: 36px 20px;
    gap: 32px;
    color: ${(props) => props.theme.colors.aside.setting.text};
`;

const SelectContainerStl = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
`;

const SelectStl = styled.select`
    flex: 1;
    width: 70%;
    background-color: ${(props) => props.theme.colors.aside.setting.language.background};
    color: ${(props) => props.theme.colors.aside.setting.language.text};
    padding: 6px;
    border-radius: 8px;
    margin-left: 12px;
    border: none;
`;

const OptionStl = styled.option`
    border: none;
`;

const SwitchContainerStl = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
`;

const SwitchStl = styled.div`
   margin-left: 12px;
   height: 22px;
`;

const LogoutStl = styled.div`
    color: ${(props) => props.theme.colors.aside.setting.logout.text};
    display: flex;
    align-items: center;
    gap: 6px;

    &:hover {
        color: ${(props) => props.theme.colors.aside.setting.logout.hover};
    }
`;

export {SettingsStl, SelectStl, SelectContainerStl,SwitchContainerStl,SwitchStl,LogoutStl,OptionStl}