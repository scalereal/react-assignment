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
} from "../Styles/Modal.styles";
import { imgUrl } from "../ constants/global";
import CloseIcon from "../Assets/closePng.png";
const MovieModal = ({ propsData }) => {
  const { selectSeatArray, selectSeatFun, visibleFun } = propsData;
  let param = useParams();

  let total = selectSeatArray.length * 250;
  let sgst = (total * 12) / 100;
  const CloseModal = () => {
    visibleFun(false);
    selectSeatFun([]);
  };
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
              <ImageStyles src={imgUrl + param.path} alt="movie" />
            </article>
            <article>
              <SeatHeadingStyle>Seats:</SeatHeadingStyle>
              <ModelDataFlex>
                {selectSeatArray.map((SeatNo, index) => (
                  <SeatHeading key={index}>{SeatNo},</SeatHeading>
                ))}
              </ModelDataFlex>
              <ModelDataFlex>
                <article>
                  <SeatHeading>{selectSeatArray.length}*250:</SeatHeading>
                  <span>SGST(12%):</span>
                  <br />
                  <span>CGST(12%):</span>
                </article>
                <article>
                  <SeatHeading>{total}</SeatHeading>
                  <span>{sgst}</span>
                  <br />
                  <span>{sgst}</span>
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
