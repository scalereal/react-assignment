import React from "react";

import { useNavigate } from "react-router-dom";

import {
  CardStyle,
  CardsStyle,
  ButtonStyle,
  TitleStyle,
  ImageStyle,
} from "../Styles/Card.style";

const Cards = ({ data }) => {
  const navigate = useNavigate();
  // const handleClick = () => {
  //   navigate("/booking",state={data});
  // };
  const IMG_URL = "https://image.tmdb.org/t/p/w500";
  const fake_img = "http://via.placeholder.com/1080x1580";
  return (
    <CardsStyle>
      {data.map((item) => {
        return (
          <CardStyle key={item.id}>
            {item.poster_path ? (
              <ImageStyle src={IMG_URL + item.poster_path} alt={item.title} />
            ) : (
              <ImageStyle src={fake_img} alt={item.title} />
            )}

            <TitleStyle>{item.title}</TitleStyle>
            <ButtonStyle onClick={(e)=>{
              navigate("/booking", {state:item.poster_path})
            }}>Book Now</ButtonStyle>
          </CardStyle>
        );
      })}
    </CardsStyle>
  );
};

export default Cards;
