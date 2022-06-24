import React from "react";
import { useNavigate } from "react-router";
import { Card } from "../styles/MovieCard.styled";
const imgUrl = "https://image.tmdb.org/t/p/w500";
const MovieCard = ({ movie }) => {
    const navigate=useNavigate();
    return (
        <Card key={movie.id}>
            <h3>{movie.title}</h3>
            <img src={imgUrl + movie.poster_path} alt={movie.id} />
            <button onClick={()=>navigate("bookingseat",{state:{movie:imgUrl + movie.poster_path,movieId:movie.id}}) }>Book Now</button>
        </Card>
    )

}


export default MovieCard;