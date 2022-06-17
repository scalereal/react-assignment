import React, { useEffect, useState } from "react";
import MovieModal from "./MovieModal";
import whiteSeatSvg from "../Assets/whiteSeat.svg";
import blueSeatSvg from "../Assets/blueSeat.svg";
import blackSeatSvg from "../Assets/BlackSeat.svg";
import {
  SeatStyle,
  SeatTableStyle,
  SeatButtonStyle,
  SeatSvgStyle,
  ModelScreenStyle,
} from "../Styles/Seat.style";

const digitArr = [1,2,3,4,5,6,7,8,9,10]

const MovieSeats = ({ Path }) => {
  const [Visible, setVisible] = useState(false);
  const [temp, setTemp] = useState([]);

  let propsData = {
    Poster_path: Path,
    Fun: setVisible,
    tempFun: setTemp,
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

  let selectedSeat = localStorage.getItem("SeatData");

  const ModalShow = () => {
    setVisible(true);

    let newSeatvalue = selectedSeat + "," + temp;
    localStorage.setItem("SeatData",newSeatvalue);
    // localStorage.setItem("SeatData", temp);
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
    
  }, [temp]);
  
  return (
    <SeatTableStyle>
      <SeatStyle>
      {
               
        digitArr.map((digit)=>
          <SeatSvgStyle>
            {digit}
          </SeatSvgStyle>
        )
        
      }
      </SeatStyle>
      
      
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
              {selectedSeat.includes(item.id + index) ? (
                <img src={blackSeatSvg} alt="whiteSeat" />
              ) : temp.includes(item.id + index) ? (
                <img src={blueSeatSvg} alt="blackSeat" />
              ) : (
                <img src={whiteSeatSvg} alt="blackSeat" />
              )}
            </SeatSvgStyle>
          ))}
        </SeatStyle>
      ))}
      
      <SeatButtonStyle onClick={ModalShow}>Confirm Booking</SeatButtonStyle>
      

      < ModelScreenStyle>
      {Visible ? <MovieModal temp={temp} propsData={propsData} /> : ""}
      </ModelScreenStyle>
      
    </SeatTableStyle>
  );
};

export default MovieSeats;
