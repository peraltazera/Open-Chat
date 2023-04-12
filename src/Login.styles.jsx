import styled from "styled-components"

const LoginStl = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: ${(props) => props.theme.colors.login.background};
    background-image: url(${(props) => props.theme.colors.login.backgroundImage});
    color: white;
    font-size: 32px;
    gap: 40px;
`

const TitleStl = styled.h1`
   color: ${(props) => props.theme.colors.login.endTitle};
   font-size: 60px;
   font-weight: 600;
   display: flex;
`

const BlueTitleStl = styled.h1`
   color: ${(props) => props.theme.colors.login.firstTitle};
   font-size: 60px;
   font-weight: 600;
`

const BtnGoogleStl = styled.button`
    display: flex;
    flex-direction: row;
    background-color: ${(props) => props.theme.colors.login.input.background};
    align-items: center;
    border-radius: 8px;
    padding: 10px 20px;
    gap: 16px;
    border: none;

    &:hover{
        cursor: pointer;
    }
`

const TextBtnGoogleStl = styled.p`
   color: ${(props) => props.theme.colors.login.input.text};
   font-size: 14px;
   font-weight: 800;
`

export { LoginStl, BtnGoogleStl, TitleStl, TextBtnGoogleStl, BlueTitleStl }