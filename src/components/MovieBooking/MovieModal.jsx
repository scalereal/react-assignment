import React from "react";
import { useParams } from "react-router-dom";
import {
  ModelStyle,
  ImageStyles,
  ModelDataFlex,
  HeadingStyle,
  SubHeadingStyle,
  ModelScreenStyle,
  CloseButton,
  SeatHeading,
  SeatHeadingStyle,
  SeatNameStyle,
  HeadingSmallStyle,
} from "../Styles/Modal.styles";
import { imgUrl } from "../constants/global";
import CloseIcon from "../Assets/closePng.png";

const MovieModal = ({ selectSeatArray, selectSeatFunc, visibleFunc }) => {
  const param = useParams();
  const total = selectSeatArray.length * 250;
  const sgst = (total * 12) / 100;

  const CloseModal = () => {
    visibleFunc(false);
    selectSeatFunc([]);
  };
  const path = localStorage.getItem(param.title);

  return (
    <ModelScreenStyle>
      <ModelStyle>
        <CloseButton onClick={CloseModal}>
          <img src={CloseIcon} alt="close" />
        </CloseButton>
        <HeadingStyle>Thank you for booking</HeadingStyle>
        <SubHeadingStyle>Order Summary</SubHeadingStyle>
        <article>
          <ModelDataFlex>
            <article>
              <ImageStyles src={imgUrl + path} alt="movie" />
            </article>
            <article>
              <SeatHeadingStyle>Seats:</SeatHeadingStyle>
              <ModelDataFlex>
                <SeatNameStyle>{selectSeatArray.toString()}</SeatNameStyle>
              </ModelDataFlex>
              <ModelDataFlex>
                <article>
                  <SeatHeading>{selectSeatArray.length}*250:</SeatHeading>
                  <HeadingSmallStyle>SGST(12%):</HeadingSmallStyle>
                  <br />
                  <HeadingSmallStyle>CGST(12%):</HeadingSmallStyle>
                </article>
                <article>
                  <SeatHeading>{total}</SeatHeading>
                  <HeadingSmallStyle>{sgst}</HeadingSmallStyle>
                  <br />
                  <HeadingSmallStyle>{sgst}</HeadingSmallStyle>
                </article>
              </ModelDataFlex>
              <hr />
              <ModelDataFlex>
                <SeatHeading>Total:</SeatHeading>
                <SeatHeading>{total + sgst * 2}</SeatHeading>
              </ModelDataFlex>
            </article>
          </ModelDataFlex>
        </article>
      </ModelStyle>
    </ModelScreenStyle>
  );
};

export default MovieModal;
