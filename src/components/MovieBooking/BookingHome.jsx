import React, { useState } from "react";
import { useParams } from "react-router-dom";
import MovieSeats from "./MovieSeats";
import pic from "../Assets/Vector.png";
import { SeatImgStyle, SeatMainDivStyle } from "../Styles/Seat.style";

const BookingHome = () => {
  let param = useParams()
  const [background, setBackground] = useState(true);
  
  let white = {
    backgroundColor: "white",
  };
  let grey = {
    pointerEvents: "none",
    backgroundColor: " rgba(229, 229, 229, 0.6)",
  };

  return (
    <SeatMainDivStyle style={background ? white : grey}>
      <SeatImgStyle src={pic} alt="bg"></SeatImgStyle>
      <MovieSeats
        poster_Path={param.path}
        MovieId={param.id}
        setBackground={setBackground}
      />
    </SeatMainDivStyle>
  );
};

export default BookingHome;
