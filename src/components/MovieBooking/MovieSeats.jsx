import React, { useEffect, useState } from "react";
import MovieModal from "./MovieModal";
import whiteSeatSvg from "../Assets/whiteSeat.svg";
import blueSeatSvg from "../Assets/blueSeat.svg";
import blackSeatSvg from "../Assets/BlackSeat.svg";
import {
  SeatStyle,
  SeatTableStyle,
  SeatButtonStyle,
  ModelScreenStyle,
  DigitStyle,
  SeatRowStyle,
} from "../Styles/Seat.style";

const digitArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const seats = {
  data: [
    {
      id: "A",
      seat: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    {
      id: "B",
      seat: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    {
      id: "C",
      seat: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    {
      id: "D",
      seat: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
  ],
};

const MovieSeats = ({ setBackground, poster_Path, MovieId }) => {
  const [Visible, setVisible] = useState(false);
  const [temp, setTemp] = useState([]);
  let propsData = {
    poster_path: poster_Path,
    Fun: setVisible,
    tempFun: setTemp,
    setBackgroundFun: setBackground,
  };

  let selectedSeat = [];
  if (JSON.stringify(localStorage.getItem(MovieId)) !== "null") {
    selectedSeat = localStorage.getItem(MovieId);
  }

  const ModalShow = () => {
    setBackground(false);
    if (temp.length === 0 || temp.length > 10) {
      alert("please select the seats in range (1-10) ");
      setBackground(true);
    } else {
      selectedSeat = selectedSeat + "," + temp;
      localStorage.setItem(MovieId, selectedSeat);
      selectedSeat = localStorage.getItem(MovieId);
      setVisible(true);
    }
  };

  const ClickHandel = (id) => {
    if (temp.includes(id)) {
      let newTemp = temp.filter((item) => {
        return id !== item;
      });
      setTemp(newTemp);
    } else {
      setTemp((prvTemp) => [...prvTemp, id]);
    }
  };

  useEffect(() => {
    console.log("temp", temp);
  }, [temp]);

  return (
    <SeatTableStyle>
      <article>
        <DigitStyle>
          {digitArr.map((digit, index) => (
            <article key={index}>{digit}</article>
          ))}
        </DigitStyle>
        {seats.data.map((item, step) => (
          <SeatStyle key={item + step}>
            <SeatRowStyle>{item.id}</SeatRowStyle>
            {item.seat.map((sub, index) => (
              <article
                key={item.id + (index + 1)}
                onClick={() => {
                  ClickHandel(item.id + (index + 1));
                }}
              >
                {selectedSeat.includes(item.id + (index + 1)) ? (
                  <img src={blackSeatSvg} alt="whiteSeat" />
                ) : temp.includes(item.id + (index + 1)) ? (
                  <img src={blueSeatSvg} alt="blackSeat" />
                ) : (
                  <img src={whiteSeatSvg} alt="blackSeat" />
                )}
              </article>
            ))}
          </SeatStyle>
        ))}
      </article>
      <SeatButtonStyle onClick={ModalShow}>Confirm Booking</SeatButtonStyle>
      <ModelScreenStyle
        style={Visible ? { pointerEvents: "auto" } : { pointerEvents: "none" }}
      >
        {Visible ? <MovieModal temp={temp} propsData={propsData} /> : ""}
      </ModelScreenStyle>
    </SeatTableStyle>
  );
};

export default MovieSeats;
