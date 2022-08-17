import styled from "styled-components";
import { ButtonStyle } from "../components/Button/Button.styled";
export const Card = styled.article`
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    transition: 250ms ease-out;
    border-radius: 20px;
  }
  &:hover::after {
    opacity: 0.6;
    background-color: #626262;
  }

  &:hover button {
    opacity: 1;
  }
  &:hover h3 {
    opacity: 1;
  }
  h3 {
    position: absolute;
    left: 31.43%;
    right: 31.43%;
    top: 42.51%;
    bottom: 50%;
    font-family: "Rubik";
    font-size: 24px;
    font-weight: 600;
    color: #ffffff;
    text-align: center;
    z-index: 2;
    opacity: 0;
    width: 111px;
    height: 56px;
    overflow: hidden;
    white-space: wrap;
    text-overflow: ellipsis;
  }

  img {
    height: 374px;
    width: 350px;
    border-radius: 20px;
    box-shadow: 0px 10px 20px 5px rgba(0, 0, 0, 0.25);
  }
  ${ButtonStyle} {
    position: absolute;
    left: 29.43%;
    right: 29.14%;
    top: 76.74%;
    bottom: 11.76%;
    z-index: 2;
    opacity: 0;
    width: 145px;
  }

  @media (max-width: 1200px) {
    margin: 24px auto 24px auto;

    img {
      width: 300px;
      height: 320px;
    }

    ${ButtonStyle} {
      height: 37px;
      width: 124px;
      left: 88px;
      top: 246px;
      border-radius: 0px;
    }
  }
  @media (max-width: 768px) {
    margin: 24px auto 24px auto;

    img {
      height: 320px;
      width: 300px;
    }
    ${ButtonStyle} {
      width: 124.29px;
      height: 36.79px;
    }
  }
`;
