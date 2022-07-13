import React from "react";

import { useNavigate } from "react-router-dom";

import {
  CardStyle,
  CardsStyle,
  ButtonStyle,
  TitleStyle,
  CardsImageStyle,
} from "../Styles/Card.style";

const Cards = ({ data }) => {
  const navigate = useNavigate();
  const imgUrl = "https://image.tmdb.org/t/p/w500";
  const fakeImg = "http://via.placeholder.com/1080x1580";
  return (
    <CardsStyle>
      {data.map((item) => {
        return (
          <CardStyle key={item.id}>
              <CardsImageStyle
                src={item.poster_path ?  imgUrl + item.poster_path : fakeImg }
                alt={item.title}
           />
            <TitleStyle>{item.title}</TitleStyle>
            <ButtonStyle
              onClick={(e) => {
                navigate("/booking", {
                  state: { path: imgUrl + item.poster_path, MovieId: item.id },
                });
              }}
            >
              Book Now
            </ButtonStyle>
          </CardStyle>
        );
      })}
    </CardsStyle>
  );
};

export default Cards;
