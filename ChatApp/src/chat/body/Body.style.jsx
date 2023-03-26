import styled from "styled-components"

const BodyStl = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 20px;
    background-color: ${(props) => props.theme.colors.backgroundBodyChat};
    flex: 1;
    overflow-y: auto;
`;

const ButtonStl = styled.button`
    margin: 0px auto;
    background-color: transparent;
    padding: 8px 16px;
    color: ${(props) => props.theme.colors.secondaryText};
    border-radius: 8px;
    /* border: none; */
    border: ${(props) => props.theme.colors.secondaryText} 2px solid;

    &:hover {
        cursor: pointer;
    }
`;

export {BodyStl, ButtonStl}