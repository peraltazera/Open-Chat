import styled from "styled-components"

const Text = styled.p`
    color: ${(props) => props.color ? props.color : "#fff"};
    font-size: ${(props) => props.fontSize ? props.fontSize : "16px"};
    font-weight: ${(props) => props.fontWeight ? props.fontWeight : "100"};
    padding: ${(props) => props.padding};
`

export default Text