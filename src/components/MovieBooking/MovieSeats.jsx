import React, { useState } from "react";
import MovieModal from "./MovieModal";
import { useParams } from "react-router-dom";
import SeatIcon from '../Assets/SeatIcon'
import {
  SeatStyle,
  SeatTableStyle,
  ListStyle,
  SeatRowStyle,
  SeatListStyle,
} from "../Styles/Seat.style";
import {Button} from '../Styles/Button.style'


const seatsData = {
  id: ["A", "B", "C", "D"],
  seat: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
};
const MovieSeats = () => {
  const [visible, setVisible] = useState(false);
  const [selectSeats, setSelectSeats] = useState([]);
  let param = useParams();
  let bookedSeats = [];
  if (JSON.stringify(localStorage.getItem(param.id)) !== "null") {
    bookedSeats = localStorage.getItem(param.id);
  }

  const ModalShow = () => {
    if (selectSeats.length === 0 || selectSeats.length > 10) {
      alert("please select the seats in range (1-10) ");
    } else {
      bookedSeats = bookedSeats + selectSeats;
      localStorage.setItem(param.id, bookedSeats);
      bookedSeats = localStorage.getItem(param.id);
      setVisible(true);
    }
  };

  const clickHandel = (id) => {
      if (selectSeats.includes(id)) {
        let newSelectSeats = selectSeats.filter((item) => {
          return id !== item;
        });
        setSelectSeats(newSelectSeats);
      } else {
        setSelectSeats((prvSelectSeats) => [...prvSelectSeats, id]);
      }
    }
  

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
              <SeatListStyle>
              {seatsData.seat.map((set) => {
                return (
                  <li 
                    key={item + set}                   
                  >
                    {(() => { 
                      switch (true) {
                        case bookedSeats.includes(item + set):
                          return <SeatIcon colorName="#626262"  
                          />
                        case selectSeats.includes(item + set):
                          return <SeatIcon colorName="#724FD8"  onClick={() => {
                            clickHandel(item + set);
                          }} />    
                        default:              
                          return <SeatIcon colorName="#DADADA"  onClick={() => {
                            clickHandel(item + set);
                          }}/>
                          }
                      }
                    )()}
                  </li>
                );
              })}
              </SeatListStyle>
            </SeatStyle>
          );
        })}
      </article>
      <Button margin="125px 450px 152px 450px" width="190px"  onClick={ModalShow}>Confirm Booking</Button>
      {visible && <MovieModal selectSeatArray={selectSeats}
    visibleFunc={setVisible}
    selectSeatFunc={setSelectSeats} />}
    </SeatTableStyle>
  );
};

export default MovieSeats;
