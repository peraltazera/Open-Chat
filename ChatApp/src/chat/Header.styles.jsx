import styled from "styled-components"

const HeaderStl = styled.div`
    background-color: #212329;
    height: 80px;
    display: flex;
    align-items: center;
    padding: 32px;
    border-left: solid 2px #1b1c23;
    border-right: solid 2px #1b1c23;
    justify-content: space-between;
`

const InfoStl = styled.div`
    cursor: pointer;
    width: 90%;
    height: 80px;
    display: flex;
    align-items: center;
`

const ImageStl = styled.img`
    height: 50px;
    border-radius: 100px;
`

const TitleStl = styled.h1`
    color: white;
    padding: 0px 24px;
    font-size: 18px;
`

export { HeaderStl, InfoStl, ImageStl, TitleStl }