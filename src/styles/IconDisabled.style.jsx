import styled from "styled-components"

const IconDisabled = styled.span`
    padding: 0px;
    margin: 0px;
    color: ${(props) => props.theme.colors.icon};
    
    &:hover {
        cursor: no-drop;
    }
`

export default IconDisabled