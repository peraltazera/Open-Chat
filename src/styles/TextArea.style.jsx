import styled from "styled-components"

const TextArea = styled.textarea`
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

export default TextArea