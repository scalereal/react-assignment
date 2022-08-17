import React from "react";
import { NavLink } from "react-router-dom";
import { Card } from "../styles/MovieCard.styled";
import { imgUrl, fakeImg } from "../GlobalConstants";
import { Button } from "../components/Button/Button";
const MovieCard = ({ movie }) => {
  const ImagePath = (title, path) => {
    localStorage.setItem(title, path);
  };
  return (
    <Card key={movie.id}>
      <h3>{movie.title}</h3>
      <img
        src={movie.poster_path ? imgUrl + movie.poster_path : fakeImg}
        alt={movie.id}
      />
      <NavLink to={`/book/${movie.id}/${movie.title}`}>
        <Button
          modalHandle={() => ImagePath(movie.title, movie.poster_path)}
          buttonText="Book Now"
        ></Button>
      </NavLink>
    </Card>
  );
};

export default MovieCard;
