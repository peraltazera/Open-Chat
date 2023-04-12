import styled from "styled-components"

const DivFlex = styled.div`
    display: flex;
    flex-direction: ${(props) => props.flexDirection ? props.flexDirection : "row"};
    width: ${(props) => props.width ? props.width : "100%"};
    background-color: ${(props) => props.backgroundColor};
    /* background-color: ${(props) => props.backgroundColor}; */
    justify-content: ${(props) => props.justifyContent};
    align-items: ${(props) => props.alignItems};
    gap: ${(props) => props.gap};
    height: ${(props) => props.height};
    padding: ${(props) => props.padding};
    flex: ${(props) => props.flex};
    border-left: ${(props) => props.borderLeft};
    border-right: ${(props) => props.borderRight};
    margin: ${(props) => props.margin};
    border-radius: ${(props) => props.borderRadius};
    text-align: ${(props) => props.textAlign};
    overflow-y: ${(props) => props.overflowY};
`

export default DivFlex