import React from "react";
import { NavLink } from "react-router-dom";
import { Card } from "../styles/MovieCard.styled";
const imgUrl = "https://image.tmdb.org/t/p/w500";
const MovieCard = ({ movie }) => {

    return (
        <Card key={movie.id}>
            <h3>{movie.title}</h3>
            <img src={imgUrl + movie.poster_path} alt={movie.id} />
            <NavLink to={`/bookingseat/${movie.id}${movie.poster_path}`}>
              <button>Book now</button>
            </NavLink>
        </Card>
    )       

}


export default MovieCard;