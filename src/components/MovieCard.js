import React from "react";
import { NavLink } from "react-router-dom";
import { Card } from "../styles/MovieCard.styled";
import {imgUrl,fakeImg} from './constants/Global'
const MovieCard = ({ movie }) => {

    return (
        <Card key={movie.id}>
            <h3>{movie.title}</h3>
            <img src={movie.poster_path?imgUrl + movie.poster_path:fakeImg} alt={movie.id} />
            <NavLink to={`/bookingseat/${movie.id}${movie.poster_path}`}>
              <button>Book now</button>
            </NavLink>
        </Card>
    )       

}


export default MovieCard;