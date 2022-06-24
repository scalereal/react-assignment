import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import img from "../Asset/undraw.png";
import { Container } from "../styles/Container.styled";
import GlobalStyles from "../styles/GlobalStyles";
import { Cards } from "../styles/Cards.styled"
import { Empty } from "../styles/Empty.styles";

const key = 'api_key=06431b5693dfdfb9f2a94311f7d8cbf0';
const baseUrl = "https://api.themoviedb.org/3";
const apiUrl = `${baseUrl}/discover/movie?sort_by=popularity.desc&${key}`;
const searchUrl = `${baseUrl}/search/movie?${key}`;

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
            <MovieCard movie={movie} />
          )}
        </Cards>
      ) : (
        <Empty>
          <h2>Sorry, there is no result for keyword you searched.</h2>
          <img src={img} alt="no img found" />
        </Empty>
      )}


    </>
  );
}

export default HomePage;