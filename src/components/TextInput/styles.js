import styled from "styled-components";
import appTheme from "@theme";

export const StyledInput = styled.input`
    all: unset;
    ${appTheme.font.fontVariants.body2}
    width: 300px;
    height: 43px;
    box-sizing: border-box;
    padding: 0.625rem 1rem;
    border: 1px solid ${appTheme.colors.brandMute};
`;
