import React from "react";
import { NavLink } from "react-router-dom";
import {
  CardStyle,
  CardsStyle,
  TitleStyle,
  CardsImageStyle,
} from "../Styles/Card.style";
import {Button} from '../Styles/Button.style'
import { imgUrl ,fakeImg } from "../constants/global";


const Cards = ({ responseData }) => {
  
  const SetPathData = (title , path)=>{
    localStorage.setItem(title, path);
  }

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
            <NavLink to={`/booking/${item.id}/${item.title}`}>
              <Button position="absolute"  opacity="0" z_index="2" width="145px"  onClick={()=>SetPathData(item.title , item.poster_path)}>Book now</Button>
            </NavLink>
          </CardStyle>
        );
      })}
    </CardsStyle>
  );
};

export default Cards;
