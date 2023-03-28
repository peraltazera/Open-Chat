import styled from "styled-components"

const BodyStl = styled.div`
    flex: 1;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
`

const NotFoundStl = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 32px;
    overflow-y: auto;
    color: ${(props) => props.theme.colors.aside.body.text};
    font-size: 16px;
`

const SpanIconStl = styled.span`
    padding-top: 6px;
    color: ${(props) => props.theme.colors.aside.body.input.icon};
`

const InputStl = styled.input`
    color: ${(props) => props.theme.colors.aside.body.input.text};
    font-size: 18px;
    width: 100%;
    background-color: ${(props) => props.theme.colors.aside.body.input.background};
    height: 46px;
    resize: none;
    border: none;

    &::placeholder {
        color: ${(props) => props.theme.colors.aside.body.input.placeholder};
    }

    &:focus {
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
    }

    &::selection {
        background-color: ${(props) => props.theme.colors.aside.body.input.placeholder}; 
        color: ${(props) => props.theme.colors.aside.body.input.text};
        caret-color: ${(props) => props.theme.colors.aside.body.input.text};
    }
`

const InputContainerStl = styled.div`
    gap: 20px;
    background-color: ${(props) => props.theme.colors.aside.body.input.background};
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 90%;
    padding: 0px 16px;
    margin: 20px auto;
`

const BodySettingsStl = styled.div`
    flex: 1;
    flex-direction: column;
    overflow: auto;
`

export { BodyStl, SpanIconStl, InputStl, InputContainerStl, NotFoundStl, BodySettingsStl }