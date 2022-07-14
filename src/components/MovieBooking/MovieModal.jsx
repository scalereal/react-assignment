import React from "react";
import { useParams } from "react-router-dom";
import {
  ModelStyle,
  ImageStyles,
  ModeldataFlex,
  HeadingStyle,
  SubHeadingStyle,
  ModelScreenStyle,
  CloseButton,
  SeatHeading,
  SeatHeadingStyle,
} from "../Styles/Modal.styles";
import { imgUrl } from "../ constants/global";
import CloseIcon from "../Assets/Xclose.png";
const MovieModal = ({ propsData }) => {
  const {  selectSeatArray, selectSeatFun, visibleFun } = propsData;
  let param = useParams()
  

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
      <article >
        <ModeldataFlex>
          <article>
            <ImageStyles src={ imgUrl+param.path } alt="movie" />
          </article>
          <article>
            <SeatHeadingStyle>Seats:</SeatHeadingStyle>
            <ModeldataFlex>
              {selectSeatArray.map((SeatNo, index) => (
                <SeatHeading key={index}>{SeatNo},</SeatHeading>
              ))}
            </ModeldataFlex>
            <ModeldataFlex>
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
            </ModeldataFlex>
            <hr />
            <ModeldataFlex>
              <SeatHeading>Total:</SeatHeading>
              <SeatHeading>{total + sgst * 2}</SeatHeading>
            </ModeldataFlex>
          </article>
        </ModeldataFlex>
      </article>
    </ModelStyle>
    </ModelScreenStyle>
  );
};

export default MovieModal;
