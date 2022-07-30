import styled from "styled-components";
import { StyledText } from "@components/Text";
import { StyledButton } from "@components/Button";
import appTheme from "@theme";

export const StyledCard = styled.article`
    position: relative;
    width: 350px;
    height: 374px;
    box-shadow: 0px 10px 20px 5px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    &::after {
        display: block;
        height: 100%;
        width: 100%;
        content: "";
        background-color: ${appTheme.colors.brandMute};
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        opacity: 0;
        border-radius: 20px;
    }
    img {
        border-radius: 20px;
    }
    div {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 40px;
        box-sizing: border-box;
        opacity: 0;
        transition: all 250ms ease-in-out;
        z-index: 3;
    }
    ${StyledText} {
        text-align: center;
        color: ${appTheme.colors.brandWhite};
    }
    ${StyledButton} {
        position: absolute;
        bottom: 40px;
    }
    &:hover {
        &::after {
            opacity: 0.6;
        }
        div {
            opacity: 1;
        }
    }
`;
