import React from "react";
import MovieSeats from "./MovieSeats";
import pic from "../Assets/Vector.png";
import { SeatImgStyle, SeatMainDivStyle } from "../Styles/Seat.style";

const BookingHome = () => {
  return (
    <SeatMainDivStyle>
      <SeatImgStyle src={pic} alt="bg"></SeatImgStyle>
      <MovieSeats />
    </SeatMainDivStyle>
  );
};

export default BookingHome;
