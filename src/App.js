import React from "react";
import { Text } from "@components";

export default function App() {
    const handleClick = (event) => {
        console.log(event);
    };
    return (
        <Text textVariant="display1" onClick={handleClick}>
            Hello world!
        </Text>
    );
}
