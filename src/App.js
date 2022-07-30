import React from "react";
import { Text, Seat, Button, TextInput } from "@components";

export default function App() {
    const [value, setValue] = React.useState("");
    const handleInputChange = (event) => {
        setValue(event.target.value);
    };
    const handleClick = (event) => {
        console.log(event);
    };
    return (
        <>
            <Text textVariant="display1" onClick={handleClick}>
                Hello world!
            </Text>
            <Seat variant="disabled" />
            <TextInput
                type="text"
                placeholder="Search"
                value={value}
                onChange={handleInputChange}
            />
            <Button>Click Me!</Button>
        </>
    );
}
