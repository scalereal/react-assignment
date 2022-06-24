import React from "react";

import {
  ModalStyle,
  CloseButton,
  DataFlex,
  MoviePic,
  ModalH1,
  ModalH3,
  ModalH5,
  ModalSmall,
} from "../styles/Booking.styled";

import close from "../Asset/Xclose.png";
export default function Modal({
  setVisible,
  location,
  selectedSeats,
  setSelectedSeats,
  setBgClick
}) {
  const modalClose = () => {
    setVisible(false);
    setSelectedSeats([]);
    setBgClick(true);
  };

  return (
    <ModalStyle>
      <CloseButton onClick={modalClose} src={close} alt="close" />
      <ModalH1>Thank you for booking</ModalH1>
      <ModalH3>Order Summary</ModalH3>
      <article
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "48px",
        }}
      >
        <MoviePic src={location.state.movie} alt="movie" />

        <article>
          <h3>Seats:</h3>
          <article style={{ display: "flex",height:"47px",width:"202px",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}}>
            {selectedSeats.map((seat, index) => {
              return <ModalH1 style={{margin:"0"}}key={index}>{seat},</ModalH1>;
            })}
          </article>
          <DataFlex>
            <article>
              <ModalH5>{selectedSeats.length}*250</ModalH5>
              <br />
              <ModalSmall>CGST(12%)</ModalSmall>
              <br />
              <ModalSmall>SGST(12%)</ModalSmall>
            </article>
            <article style={{textAlign:"right"}}>
              <ModalH5>{selectedSeats.length*250}</ModalH5>
              <br />
              <ModalSmall>{12*(1/100)*(selectedSeats.length*250)}</ModalSmall>
              <br />
              <ModalSmall>{12*(1/100)*(selectedSeats.length*250)}</ModalSmall>
            </article>
          </DataFlex>
          <hr />
          <DataFlex>
            <ModalH5>Total</ModalH5>
            <ModalH5>{(selectedSeats.length*250)+(12*(1/100)*(selectedSeats.length*250))*2}</ModalH5>
          </DataFlex>
        </article>
      </article>
    </ModalStyle>
  );
}
