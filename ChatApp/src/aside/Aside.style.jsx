import styled from "styled-components"

const AsideStl = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.theme.colors.aside.background};
    width: 400px;
    border-right: 2px solid ${(props) => props.theme.colors.aside.border};
`;

export default AsideStl