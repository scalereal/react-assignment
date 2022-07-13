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
  ListStyle,
  SeatRowStyle,
} from "../Styles/Seat.style";
const seatsData = {
    id: ["A", "B", "C", "D"],
    seat: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
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
        <ListStyle>
          {seatsData.seat.map((digit, index) => (
            <li key={index}>{digit}</li>
          ))}
        </ListStyle>
        {seatsData.id.map((item) => {
          return (
            <SeatStyle key={item}>
              <SeatRowStyle>{item}</SeatRowStyle>
              {seatsData.seat.map((set) => {
                return (
                  <div
                    key={set}
                    onClick={() => {
                      ClickHandel(item + set);
                    }}
                  >
                    {
                    selectedSeat.includes(item + set) ? (
                      <img src={blackSeatSvg} alt="whiteSeat" />
                    ) : temp.includes(item + set) ? (
                      <img src={blueSeatSvg} alt="blackSeat" />
                    ) : (
                      <img src={whiteSeatSvg} alt="blackSeat" />
                    )}
                  </div>
                );
              })}
                </SeatStyle>
          );
        })}
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
