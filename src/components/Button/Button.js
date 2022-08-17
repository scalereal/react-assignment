import React from "react";
import { ButtonStyle } from "../Button/Button.styled";
export const Button = (props) => {
  return (
    <ButtonStyle onClick={props.modalHandle}>{props.buttonText}</ButtonStyle>
  );
};
