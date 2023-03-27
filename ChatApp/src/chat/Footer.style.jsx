import styled from "styled-components"

const FooterStl = styled.div`
    background-color: ${(props) => props.theme.colors.chat.footer.background};
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* border-left: solid 2px ${(props) => props.theme.colors.border};
    border-right: solid 2px ${(props) => props.theme.colors.border}; */
`

const TextareaStl = styled.textarea`
    color: ${(props) => props.theme.colors.chat.footer.input.text};
    font-size: 16px;
    width: 100%;
    background-color: ${(props) => props.theme.colors.chat.footer.input.background};
    height: 46px;
    resize: none;
    padding: 12px 4px;
    border: none;

    &::placeholder {
        color: ${(props) => props.theme.colors.chat.footer.input.placeholder};
    }

    &:focus {
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
    }

    &::selection {
        background-color: ${(props) => props.theme.colors.chat.footer.input.placeholder};
        color: ${(props) => props.theme.colors.chat.footer.input.text};
        caret-color: ${(props) => props.theme.colors.chat.footer.input.text};
    }
`

const InputStl = styled.div`
    gap: 20px;
    background-color: ${(props) => props.theme.colors.chat.footer.input.background};
    border-radius: 24px 24px 24px 24px;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    margin: 0px 40px;
    padding: 0px 28px;
`

export { FooterStl, TextareaStl, InputStl }