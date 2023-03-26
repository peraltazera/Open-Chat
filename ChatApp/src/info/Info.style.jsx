import styled from "styled-components"

const InfoStl = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    background-color: ${(props) => props.theme.colors.backgroundOtherMessage};
    color: ${(props) => props.theme.colors.primaryText};
    padding-top: 60px;
`

const HeaderStl = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    text-align: center;
`

const TitleHeaderStl = styled.h1`
    padding-top: 24px;
    font-size: 24px;
`

const TextHeaderStl = styled.p`
    padding-top: 8px;
    color: ${(props) => props.theme.colors.secondaryText};
    font-size: 16px;
`

const ImageStl = styled.img`
    height: 140px;
    border-radius: 100px;
`

const CardStl = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
    gap: 16px;
`

const CardTextsStl = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const TitleCardStl = styled.h4`
   color: ${(props) => props.theme.colors.primaryText};
`

const TextCardStl = styled.p`
    color: ${(props) => props.theme.colors.secondaryText};
    font-size: 14px;
`

const DocStl = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 54px 40px 0px 40px;
`

const TitleDocStl = styled.h3`
    padding-bottom: 12px;
`

export { InfoStl, HeaderStl, TitleHeaderStl, TextHeaderStl, ImageStl, CardStl, DocStl, CardTextsStl, TitleCardStl, TextCardStl, TitleDocStl }