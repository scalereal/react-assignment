import React, { useState } from "react";
import MovieCard from "./MovieCard";
import {
  ListHeadingStyle,
  InputBoxStyle,
  HeaderStyle,
} from "../Styles/Card.style";
const Moviehome = () => {
  const [input, setInput] = useState("");

  return (
    <HeaderStyle>
      <ListHeadingStyle>Book Tickets</ListHeadingStyle>
      <InputBoxStyle
        type="text"
        placeholder="Search"
        onChange={(e) => setInput(e.target.value)}
      />
      <MovieCard input={input} />
    </HeaderStyle>
  );
};

export default Moviehome;
