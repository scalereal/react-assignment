import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import PNF from "./PNF";
import { CardDivStyle } from "../Styles/Card.style";
import { apiUrl, searchUrl } from "../ constants/global";

const MovieCard = ({ input }) => {
  const [responseData, setResponseData] = useState([]);

  const getMovie = async (url) => {
    const res = await fetch(url);
    const resResults = await res.json();
    const result = resResults.results;
    setResponseData(result);
    
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
      {responseData.length === 0 ? <PNF /> : <Cards responseData={responseData} />}
    </CardDivStyle>
  );
};

export default MovieCard;
