import React from "react";
import { StyledCard } from "./styles";
import { Text, Button } from "@components";

export const MovieCard = () => {
    return (
        <StyledCard>
            <img src="https://via.placeholder.com/350x374" alt="good movie" />
            <div>
                <Text textVariant="h3">Good Movie</Text>
                <Button>Click Me</Button>
            </div>
        </StyledCard>
    );
};
