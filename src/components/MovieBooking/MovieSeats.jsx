import React, {  useState } from "react";
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
  const [selectSeats, setelectSeats] = useState([]);
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
    if (selectSeats.length === 0 || selectSeats.length > 10) {
      alert("please select the seats in range (1-10) ");
      setBackground(true);
    } else {
      selectedSeat = selectedSeat + "," + selectSeats;
      localStorage.setItem(MovieId, selectedSeat);
      selectedSeat = localStorage.getItem(MovieId);
      setVisible(true);
    }
  };

  const ClickHandel = (id) => {
    if (selectSeats.includes(id)) {
      let newSelectSeats = selectSeats.filter((item) => {
        return id !== item;
      });
      setTemp(newSelectSeats);
    } else {
      setTemp((prvSelectSeats) => [...prvSelectSeats, id]);
    }
  };

  

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
                    ) : selectSeats.includes(item + set) ? (
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
        {Visible ? <MovieModal temp={selectSeats} propsData={propsData} /> : ""}
      </ModelScreenStyle>
    </SeatTableStyle>
  );
};

export default MovieSeats;
