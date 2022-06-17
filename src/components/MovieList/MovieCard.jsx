import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import PNF from "./PNF";
import { CardDivStyle } from "../Styles/Card.style";


const API_KEY = "api_key=336ff2d06750b1a068e736a78e81d04f";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;

const searchURL = BASE_URL + "/search/movie?" + API_KEY + "&query=";

const MovieCard = ({ input }) => {
  const [data, setData] = useState([]);

  const getMovie = async (url) => {
    const res = await fetch(url);
    const resResults = await res.json();
    const result = resResults.results;
    setData(result);
    
  };
  useEffect(() => {
    if (input.length == 0) {
      getMovie(API_URL);
    } else {
      getMovie(searchURL + input);
    }
  }, [input]);
  return (
    <CardDivStyle>
      {data.length === 0 ? <PNF /> : <Cards data={data} />}
    </CardDivStyle>
  );
};

export default MovieCard;
