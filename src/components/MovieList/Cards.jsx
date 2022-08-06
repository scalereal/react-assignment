import React from "react";
import { NavLink } from "react-router-dom";
import {
  CardStyle,
  CardsStyle,
  ButtonStyle,
  TitleStyle,
  CardsImageStyle,
} from "../Styles/Card.style";
import { imgUrl ,fakeImg } from "../ constants/global";
const Cards = ({ responseData }) => {
  return (
    <CardsStyle>
      {responseData.map((item) => {
        return (
          <CardStyle key={item.id}>
            <CardsImageStyle
              src={item.poster_path ? imgUrl + item.poster_path : fakeImg}
              alt={item.title}
            />
            <TitleStyle>{item.title}</TitleStyle>
            <NavLink to={`/booking/${item.id}${item.poster_path}`}>
              <ButtonStyle>Book now</ButtonStyle>
            </NavLink>
          </CardStyle>
        );
      })}
    </CardsStyle>
  );
};

export default Cards;
