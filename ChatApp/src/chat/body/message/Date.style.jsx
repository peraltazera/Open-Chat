import styled from "styled-components"

const DateStl = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    color: ${(props) => props.theme.colors.secondaryText};
    padding: 30px 0px;
`;

const LineStl = styled.span`
    border-bottom: 1px solid ${(props) => props.theme.colors.secondaryText};
    flex: 1;
`;

const TextStl = styled.p`
    padding: 0px 12px;
`;

export {DateStl, LineStl, TextStl}