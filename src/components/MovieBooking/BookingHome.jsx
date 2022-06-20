import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import MovieSeats from "./MovieSeats";
import pic from "../Assets/Vector.png";
import { SeatImgStyle, SeatMainDivStyle } from "../Styles/Seat.style";

const BookingHome = () => {
  let Location = useLocation();

  let poster_Path = Location.state.path;
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
        poster_Path={poster_Path}
        MovieId={Location.state.MovieId}
        setBackground={setBackground}
      />
    </SeatMainDivStyle>
  );
};

export default BookingHome;
