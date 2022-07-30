import styled from "styled-components";

export const StyledSvg = styled.svg`
    .fillChange {
        fill: ${(props) => props.theme.seat[props.variant]};
    }
`;
