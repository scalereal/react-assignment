import { StyledText } from "./styles";
import { getComponentTag } from "./utils";

export const Text = ({ children, as, textVariant, ...restProps }) => {
    return (
        <StyledText
            textVariant={textVariant}
            as={getComponentTag(textVariant, as)}
            {...restProps}
        >
            {children}
        </StyledText>
    );
};
