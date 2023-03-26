import styled from "styled-components"

const HeaderStl = styled.div`
    background-color: ${(props) => props.theme.colors.backgroundAside};
    height: 80px;
    display: flex;
    align-items: center;
    padding: 32px;
    border-left: solid 2px ${(props) => props.theme.colors.border};
    border-right: solid 2px ${(props) => props.theme.colors.border};
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
    color: ${(props) => props.theme.colors.primaryText};
    padding: 0px 24px;
    font-size: 18px;
`

export { HeaderStl, InfoStl, ImageStl, TitleStl }