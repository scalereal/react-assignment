import styled, { css } from "styled-components";

const getTextStyles = (props) => {
    return css`
        ${props.theme.font.fontVariants[props.textVariant]}
    `;
};

export const StyledText = styled.span`
    ${getTextStyles}
`;
