import styled from "styled-components";
import appTheme from "@theme";

export const StyledButtonText = styled.span`
    position: relative;
    height: calc(100% + 3px);
    display: inline-block;
    ${appTheme.font.fontVariants.body1}
    &::after {
        height: 1px;
        background-color: ${appTheme.colors.brandWhite};
        width: 100%;
        content: "";
        display: block;
        transform: scale(0);
        transition: all 250ms ease-in-out;
        transform: center;
    }
`;

export const StyledButton = styled.button`
    all: unset;
    background-color: ${appTheme.colors.brandPrimary};
    color: ${appTheme.colors.brandWhite};
    cursor: pointer;
    padding: 0.75rem 2rem;
    &:hover {
        background-color: ${appTheme.colors.brandAccent};
    }
    &:active {
        background-color: ${appTheme.colors.brandAccent};
        ${StyledButtonText} {
            &::after {
                transform: scale(1);
            }
        }
    }
    &:disabled {
        background-color: ${appTheme.colors.brandMute};
    }
`;
