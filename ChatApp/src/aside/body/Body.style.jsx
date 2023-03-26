import styled from "styled-components"

const BodyStl = styled.div`
    background-color: ${(props) => props.theme.colors.backgroundAside};
    flex: 1;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
`

const NotFoundStl = styled.div`
    background-color: ${(props) => props.theme.colors.backgroundAside};
    flex: 1;
    flex-direction: column;
    padding: 22px;
    overflow-y: auto;
    color: ${(props) => props.theme.colors.secondaryText};
    font-size: 16px;
`

const SpanIconStl = styled.span`
    padding-top: 6px;
    color: ${(props) => props.theme.colors.icon};
`

const InputStl = styled.input`
    color: ${(props) => props.theme.colors.primaryText};
    font-size: 18px;
    width: 100%;
    background-color: ${(props) => props.theme.colors.inputAside};
    height: 46px;
    resize: none;
    border: none;

    &::placeholder {
        color: ${(props) => props.theme.colors.secondaryText};
    }

    &:focus {
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
    }

    &::selection {
        background-color: #444444; 
        color: ${(props) => props.theme.colors.primaryText};
        caret-color: ${(props) => props.theme.colors.primaryText};
    }
`

const InputContainerStl = styled.div`
    gap: 20px;
    background-color: ${(props) => props.theme.colors.inputAside};
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 90%;
    padding: 0px 16px;
    margin: 20px auto;
`

const BodySettingsStl = styled.div`
    background-color: ${(props) => props.theme.colors.backgroundAside};
    flex: 1;
    flex-direction: column;
    overflow: auto;
`

export { BodyStl, SpanIconStl, InputStl, InputContainerStl, NotFoundStl, BodySettingsStl }