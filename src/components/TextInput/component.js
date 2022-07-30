import React from "react";
import { StyledInput } from "./styles";

export const TextInput = ({
    type = "text",
    placeholder = "text input",
    onChange,
    value,
}) => {
    return (
        <StyledInput
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
};
