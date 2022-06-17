import React from "react";

import { useNavigate } from "react-router-dom";

import {
  CardStyle,
  CardsStyle,
  ButtonStyle,
  TitleStyle,
  CardsImageStyle
} from "../Styles/Card.style";
// import {} from '../Styles/Card.style'

const Cards = ({ data }) => {
  const navigate = useNavigate();
  const IMG_URL = "https://image.tmdb.org/t/p/w500";
  const fake_img = "http://via.placeholder.com/1080x1580";
  return (
    <CardsStyle>
      {data.map((item) => {
        return (
          <CardStyle key={item.id}>
            {item.poster_path ? (
              <CardsImageStyle src={IMG_URL + item.poster_path} alt={item.title} />
            ) : (
              <CardsImageStyle src={fake_img} alt={item.title} />
            )}

            <TitleStyle>{item.title}</TitleStyle>
            <ButtonStyle onClick={(e)=>{
              navigate("/booking", {state:IMG_URL+item.poster_path})
            }}>Book Now</ButtonStyle>
          </CardStyle>
        );
      })}
    </CardsStyle>
  );
};

export default Cards;
