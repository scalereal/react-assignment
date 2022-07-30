import React, { useState } from "react";
import { TextInput } from "@components";
import { SearchIcon } from "./searchIcon";
import { StyledForm } from "./styles";

export const SearchForm = ({ onSubmit }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };
    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(searchQuery);
    };
    return (
        <StyledForm onSubmit={handleFormSubmit}>
            <TextInput
                type="text"
                placeholder="search"
                value={searchQuery}
                onChange={handleInputChange}
            />
            <SearchIcon />
        </StyledForm>
    );
};
