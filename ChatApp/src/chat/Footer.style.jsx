import styled from "styled-components"

const FooterStl = styled.div`
    background-color: ${(props) => props.theme.colors.backgroundFooterChat};
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-left: solid 2px ${(props) => props.theme.colors.border};
    border-right: solid 2px ${(props) => props.theme.colors.border};
`

const TextareaStl = styled.textarea`
    color: ${(props) => props.theme.colors.primaryText};
    font-size: 16px;
    width: 100%;
    background-color: ${(props) => props.theme.colors.backgroundOtherMessage};
    height: 46px;
    resize: none;
    padding: 12px 4px;
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
        background-color: ${(props) => props.theme.colors.secondaryText};
        color: ${(props) => props.theme.colors.primaryText};
        caret-color: ${(props) => props.theme.colors.primaryText};
    }
`

const InputStl = styled.div`
    gap: 20px;
    background-color: ${(props) => props.theme.colors.backgroundOtherMessage};
    border-radius: 24px 24px 24px 24px;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    margin: 0px 40px;
    padding: 0px 28px;
`

export { FooterStl, TextareaStl, InputStl }