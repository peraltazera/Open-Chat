import styled from "styled-components"

const AsideStl = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.theme.colors.backgroundAside};
    width: 400px;
`;

export default AsideStl