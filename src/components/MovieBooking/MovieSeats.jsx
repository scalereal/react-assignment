import React, { useState } from "react";
import MovieModal from "./MovieModal";
import whiteSeatSvg from "../Assets/whiteSeat.svg";
import blueSeatSvg from "../Assets/blueSeat.svg";
import blackSeatSvg from "../Assets/BlackSeat.svg";
import { useParams } from "react-router-dom";

import {
  SeatStyle,
  SeatTableStyle,
  SeatButtonStyle,
  ListStyle,
  SeatRowStyle,
} from "../Styles/Seat.style";

const seatsData = {
  id: ["A", "B", "C", "D"],
  seat: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
};
const MovieSeats = () => {
  const [visible, setVisible] = useState(false);
  const [selectSeats, setSelectSeats] = useState([]);
  let param = useParams();

  let propsData = {
    selectSeatArray: selectSeats,
    visibleFun: setVisible,
    selectSeatFun: setSelectSeats,
  };

  let selectedSeat = [];
  if (JSON.stringify(localStorage.getItem(param.id)) !== "null") {
    selectedSeat = localStorage.getItem(param.id);
  }

  const ModalShow = () => {
    if (selectSeats.length === 0 || selectSeats.length > 10) {
      alert("please select the seats in range (1-10) ");
    } else {
      selectedSeat = selectedSeat + selectSeats;
      localStorage.setItem(param.id, selectedSeat);
      selectedSeat = localStorage.getItem(param.id);
      setVisible(true);
    }
  };

  const clickHandel = (id) => {
    if (selectedSeat.includes(id)) {
      alert("already selected");
      let data = selectSeats.filter((mil) => {
        return selectedSeat.includes(id) !== selectSeats[mil];
      });
      setSelectSeats(data);
    } else {
      if (selectSeats.includes(id)) {
        let newSelectSeats = selectSeats.filter((item) => {
          return id !== item;
        });
        setSelectSeats(newSelectSeats);
      } else {
        setSelectSeats((prvSelectSeats) => [...prvSelectSeats, id]);
      }
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
                    key={item + set}
                    onClick={() => {
                      clickHandel(item + set);
                    }}
                  >
                    {(() => {
                      switch (selectedSeat.includes(item + set)) {
                        case true:
                          return <img src={blackSeatSvg} alt="blackSeat" />;
                        default:
                          switch (selectSeats.includes(item + set)) {
                            case true:
                              return <img src={blueSeatSvg} alt="blueSeat" />;
                            default:
                              return <img src={whiteSeatSvg} alt="whiteSeat" />;
                          }
                      }
                    })()}
                  </div>
                );
              })}
            </SeatStyle>
          );
        })}
      </article>
      <SeatButtonStyle onClick={ModalShow}>Confirm Booking</SeatButtonStyle>
      {visible && <MovieModal propsData={propsData} />}
    </SeatTableStyle>
  );
};

export default MovieSeats;
