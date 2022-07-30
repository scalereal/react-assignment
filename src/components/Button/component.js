import { StyledButton, StyledButtonText } from "./styles";

export const Button = ({ children }) => (
    <StyledButton>
        <StyledButtonText>{children}</StyledButtonText>
    </StyledButton>
);
