import React from "react";
import { data } from "./constants/Global";
import { BookingTableSeats, SeatRow } from "../styles/Booking.styled";
import SvgImg from "../Asset/SvgImg";

const MovieSeats = ({ selectedSeats, selected, setSelectedSeats }) => {
  function handleSeats(id) {
    if (selected.includes(id)) {
      alert("already selected");
      let data = selectedSeats.filter((item) => {
        return selected.includes(id) !== selectedSeats[item];
      });
      setSelectedSeats(data);
    } else {
      if (selectedSeats.includes(id)) {
        const updatedSeats = selectedSeats.filter((seatId) => seatId !== id);
        setSelectedSeats(updatedSeats);
      } else {
        setSelectedSeats((prevSeats) => [...prevSeats, id]);
      }
    }
  }
  return (
    <BookingTableSeats>
      <thead>
        <tr>
          <th> </th>
          {data.seats.map((seatno) => (
            <th key={seatno}>{seatno}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.id.map((id) => {
          return (
            <React.Fragment key={id}>
              <tr>
                <SeatRow>{id}</SeatRow>
                {data.seats.map((_, index) => {
                  return (
                    <React.Fragment key={index}>
                      <td
                        key={id + index}
                        onClick={() => handleSeats(id + (index + 1))}
                      >
                        {(() => {
                          switch (selected.includes(id + (index + 1))) {
                            case true:
                              return <SvgImg colorName="#626262" />;
                            default:
                              switch (
                                selectedSeats.includes(id + (index + 1))
                              ) {
                                case true:
                                  return <SvgImg colorName="#724FD8" />;
                                default:
                                  return <SvgImg colorName="#DADADA" />;
                              }
                          }
                        })()}
                      </td>
                    </React.Fragment>
                  );
                })}
              </tr>
            </React.Fragment>
          );
        })}
      </tbody>
    </BookingTableSeats>
  );
};

export default MovieSeats;
