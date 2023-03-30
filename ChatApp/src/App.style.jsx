import styled from "styled-components"

const LoadStl = styled.div`
    display: flex;
    background-color: ${(props) => props.theme.colors.load.background};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`

const TitleStl = styled.h1`
    color: ${(props) => props.theme.colors.load.text};
    font-size: 42px;
    font-weight: 200;
`

export { LoadStl, TitleStl }