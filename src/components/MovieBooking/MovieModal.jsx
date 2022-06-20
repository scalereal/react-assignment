import React from "react";
import {
  ModelStyle,
  ImageStyles,
  ModeldataFlex,
  HeadingStyle,
  Heading5Style,
  CloseButton,
  SeatHeading,
  SeatHeadingH3,
} from "../Styles/Modal.styles";
import CloseIcon from "../Assets/Xclose.png";

const MovieModal = ({ propsData, temp }) => {
  const { poster_path, Fun, tempFun, setBackgroundFun } = propsData;

  let total = temp.length * 250;
  let SGST = (total * 12) / 100;

  const CloseModal = () => {
    Fun(false);
    tempFun([]);
    setBackgroundFun(true);
  };
  return (
    <ModelStyle>
      <CloseButton onClick={CloseModal}>
        <img src={CloseIcon} alt="close" />
      </CloseButton>
      <HeadingStyle>Thank you for booking</HeadingStyle>
      <Heading5Style>Order Summary</Heading5Style>
      <article style={{ margin: "48px 55px 48px 52px" }}>
        <ModeldataFlex>
          <article>
            <ImageStyles src={poster_path} alt="movie" />
          </article>
          <article>
            <SeatHeadingH3>Seats:</SeatHeadingH3>
            <ModeldataFlex>
              {temp.map((SeatNo, index) => (
                <SeatHeading key={index}>{SeatNo},</SeatHeading>
              ))}
            </ModeldataFlex>
            <ModeldataFlex>
              <article>
                <SeatHeading>{temp.length}*250:</SeatHeading>
                <span>SGST(12%):</span>
                <br />
                <span>CGST(12%):</span>
              </article>
              <article>
                <SeatHeading>{total}</SeatHeading>
                <span>{SGST}</span>
                <br />
                <span>{SGST}</span>
              </article>
            </ModeldataFlex>
            <hr />
            <ModeldataFlex>
              <SeatHeading>Total:</SeatHeading>
              <SeatHeading>{total + SGST * 2}</SeatHeading>
            </ModeldataFlex>
          </article>
        </ModeldataFlex>
      </article>
    </ModelStyle>
  );
};

export default MovieModal;
