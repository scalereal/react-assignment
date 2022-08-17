import React from "react";
import { data } from "../GlobalConstants";
import { BookingTableSeats, SeatRow } from "../styles/Booking.styled";
import SeatIcon from "../Asset/SeatIcon";

const MovieSeats = ({ selectedSeats, bookedSeats, setSelectedSeats }) => {
  function handleSeats(id) {
    if (selectedSeats.includes(id)) {
      const updatedSeats = selectedSeats.filter((seatId) => seatId !== id);
      setSelectedSeats(updatedSeats);
    } else {
      setSelectedSeats((prevSeats) => [...prevSeats, id]);
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
                      <td key={id + index}>
                        {(() => {
                          switch (true) {
                            case bookedSeats.includes(id + (index + 1)):
                              return <SeatIcon colorName="#626262" />;
                            case selectedSeats.includes(id + (index + 1)):
                              return (
                                <SeatIcon
                                  colorName="#724FD8"
                                  onClick={() => handleSeats(id + (index + 1))}
                                />
                              );
                            default:
                              return (
                                <SeatIcon
                                  colorName="#DADADA"
                                  onClick={() => handleSeats(id + (index + 1))}
                                />
                              );
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
