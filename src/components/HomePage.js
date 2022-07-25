import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

import { Container } from "../styles/Container.styled";
import GlobalStyles from "../styles/GlobalStyles";
import { Cards } from "../styles/Cards.styled"
import PageNotFound from "./PageNotFound";
import {apiUrl,searchUrl} from "./constants/Global"


function HomePage(){
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getMovies(apiUrl)
  },
    [])

  async function getMovies(url) {
    const response = await axios.get(url);
    const result = response.data.results;

    setMovies(result);
  }

  const submit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      getMovies(`${searchUrl}&query=${searchTerm}`)
    } else {
      getMovies(apiUrl)
    }
  }

  return (
    <>
      <GlobalStyles />
      <Container>
        <h1>Book Tickets</h1>
        <form onSubmit={submit}>
          <input type="text" placeholder="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
      </Container>
      {movies.length > 0 ? (
        <Cards>
          {movies.map((movie) =>
            <MovieCard movie={movie} key = {movie.id}/>
          )}
        </Cards>
      ) : (
        <PageNotFound/>
      )}


    </>
  );
}

export default HomePage;