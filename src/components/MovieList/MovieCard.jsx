import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import PNF from "./PNF";
import { CardDivStyle } from "../Styles/Card.style";
import { apiUrl, searchUrl } from "../ constants/global";

const MovieCard = ({ input }) => {
  const [data, setData] = useState([]);

  const getMovie = async (url) => {
    const res = await fetch(url);
    const resResults = await res.json();
    const result = resResults.results;
    setData(result);
  };
  useEffect(() => {
    if (input.length === 0) {
      getMovie(apiUrl);
    } else {
      getMovie(searchUrl + input);
    }
  }, [input]);
  return (
    <CardDivStyle>
      {data.length === 0 ? <PNF /> : <Cards data={data} />}
    </CardDivStyle>
  );
};

export default MovieCard;
