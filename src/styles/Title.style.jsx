import styled from "styled-components"

const Title = styled.h1`
    color: ${(props) => props.color ? props.color : "#fff"};
    font-size: ${(props) => props.fontSize ? props.fontSize : "32px"};
    font-weight: ${(props) => props.fontWeight ? props.fontWeight : "200"};
    padding: ${(props) => props.padding};
`

export default Title