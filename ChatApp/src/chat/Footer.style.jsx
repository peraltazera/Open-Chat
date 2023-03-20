import styled from "styled-components"

const FooterStl = styled.div`
    background-color: #282932;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-left: solid 2px #1b1c23;
    border-right: solid 2px #1b1c23;
`

const TextareaStl = styled.textarea`
    color: #fff;
    font-size: 16px;
    width: 100%;
    background-color: #1e1f25;
    height: 46px;
    resize: none;
    padding: 12px 4px;
    border: none;

    &::placeholder {
        color: rgb(156, 156, 156);
    }

    &:focus {
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
    }

    &::selection {
        background-color: #444444; 
        color: #fff; 
        caret-color: #fff; 
    }
`

const InputStl = styled.div`
    gap: 20px;
    background-color: #1e1f25;
    border-radius: 24px 24px 24px 24px;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    margin: 0px 40px;
    padding: 0px 28px;
`

export { FooterStl, TextareaStl, InputStl }