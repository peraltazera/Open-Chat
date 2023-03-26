import styled from "styled-components"

const Icon = styled.span`
    padding: 0px;
    margin: 0px;
    color: ${(props) => props.theme.colors.icon};

    &:hover {
        cursor: pointer;
        color: ${(props) => props.theme.colors.backgroundMyMessage};
    }
`

export default Icon