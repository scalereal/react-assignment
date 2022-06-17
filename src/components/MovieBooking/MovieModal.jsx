import React from "react";
import {
  ModelStyle,
  ImageStyles,
  ModeldataFlex,
  HeadingStyle,
  Heading5Style,
  ModalLeftDiv,
} from "../Styles/Modal.styles";

const fake_img = "http://via.placeholder.com/1080x1580";
const MovieModal = ({ propsData, temp }) => {
  const { Poster_path, Fun, tempFun } = propsData;

  let total = temp.length * 250;
  let SGST = (total * 12) / 100;
  const CloseModal = () => {
    Fun(false);
    tempFun([]);
  };
  return (
    <ModelStyle>
      <button style={{ float: "right", border: "none" }} onClick={CloseModal}>
        x
      </button>
      <HeadingStyle>Thank you for booking</HeadingStyle>
      <Heading5Style>Order Summary</Heading5Style>
      <div style={{ margin: "48px 55px 48px 52px"}}>
      <ModeldataFlex>
        <ModalLeftDiv>
          <ImageStyles src={Poster_path} alt="movie" />
          {/* <ImageStyles src={fake_img} alt="fake_img" /> */}
        </ModalLeftDiv>
        <div>
          <h3>Seats:</h3>
          <ModeldataFlex>
            {temp.map((SeatNo, index) => (
              <h1 key={index}>{SeatNo}, </h1>
            ))}
          </ModeldataFlex>
          <ModeldataFlex>
            <div>
              <h5>{temp.length}*250:</h5>
              <span>SGST(12%):</span>
              <br />
              <span>CGST(12%):</span>
            </div>
            <div>
              <h5>{total}</h5>
              <span>{SGST}</span>
              <br />
              <span>{SGST}</span>
            </div>
          </ModeldataFlex>
          <hr />
          <ModeldataFlex>
            <h5>Total:</h5>
            <h5>{total + SGST * 2}</h5>
          </ModeldataFlex>
        </div>
      </ModeldataFlex>
      </div>
    </ModelStyle>
  );
};

export default MovieModal;
