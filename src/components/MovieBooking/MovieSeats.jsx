import React, { useEffect, useState } from "react";
import MovieModal from "./MovieModal";
import whiteSeatSvg from "../Assets/whiteSeat.svg";
import blueSeatSvg from "../Assets/blueSeat.svg";
import {
  SeatStyle,
  SeatTableStyle,
  SeatButtonStyle,
  SeatSvgStyle,
} from "../Styles/Seat.style";

const MovieSeats = ({ Path }) => {
  const [Visible, setVisible] = useState(false);
  const [temp, setTemp] = useState([]);
  let propsData = {
    Poster_path: Path,
    Fun: setVisible,
  };
  const [seats, setSeats] = useState({
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
  });

  const ModalShow = () => {
    setVisible(true);
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
    console.log(temp);
  }, [temp]);
  return (
    <SeatTableStyle>
      {seats.data.map((item, step) => (
        <SeatStyle key={item + step}>
          <div>{item.id}</div>
          {item.seat.map((sub, index) => (
            <SeatSvgStyle
              key={item.id + index}
              onClick={() => {
                ClickHandel(item.id + index);
              }}
            >
              {!temp.includes(item.id + index) ? (
                <img src={ whiteSeatSvg} alt="whiteSeat" />
              ) : (
                <img src={blueSeatSvg} alt="blueSeat" />
              )}
            </SeatSvgStyle>
          ))}
        </SeatStyle>
      ))}

      <SeatButtonStyle onClick={ModalShow}>Confirm Booking</SeatButtonStyle>
      {/* {Visible ? <MovieModal setVisible={setVisible} /> : ""} */}
      {Visible ? <MovieModal propsData={propsData} /> : ""}
    </SeatTableStyle>
  );
};

export default MovieSeats;
