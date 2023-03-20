import styled from "styled-components"

const LoginStl = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: #131517;
    color: white;
    font-size: 32px;
    gap: 40px;
`

const TitleStl = styled.h1`
   color: #fff;
   font-size: 60px;
   font-weight: 300;
`

const BtnGoogleStl = styled.button`
    display: flex;
    flex-direction: row;
    background-color: white;
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
   color: rgb(66, 66, 66);
   font-size: 14px;
   font-weight: 800;
`

export { LoginStl, BtnGoogleStl, TitleStl, TextBtnGoogleStl }