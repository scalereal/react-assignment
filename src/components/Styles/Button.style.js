import styled from "styled-components";

export const Button =styled.button`
  position: absolute;
  top: 245px;
  left: 89px;
  right: 87px;
  bottom: 37px;
  font-family: "Rubik";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  background-color: #352c9a;
  color: white;
  width: 145px;
  height: 43px;
  margin-top: 20px;
  border-style: none;
  opacity: 0;
  z-index: 2;

  &:hover {
    background-color: #724fd8;
  }
  &:active {
    text-decoration: underline;
  }
  &:disabled {
    background-color: #626262;
  }
`