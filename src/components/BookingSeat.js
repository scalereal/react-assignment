import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Modal from "./Modal";
import seatWhite from "../Asset/SeatWhite.svg";
import seatBlue from "../Asset/SeatBlue.svg";
import seatBlack from "../Asset/SeatBlack.svg";
import vector from "../Asset/Vector 1.png";
import {
  BookingStyles,
  VectorImg,
  ConfirmButton,
  BookingTableSeats,
  SeatRow,
} from "../styles/Booking.styled";
const data = {
  id: ["A", "B", "C", "D"],
  seats: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
};

function BookingSeat() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bgClick, setBgClick] = useState(true);

  const location = useLocation();
  let selected = [];

  if (JSON.stringify(localStorage.getItem(location.state.movieId)) !== "null") {
    selected = localStorage.getItem(location.state.movieId);
  }

  const modalHandle = () => {
    setModalVisible(true);
    setBgClick(false);

    if (selectedSeats.length === 0) {
      setModalVisible(false);
      alert(" Please select seats first");
      setBgClick(true);
      return;
    } else if (selectedSeats.length > 10) {
      setModalVisible(false);
      alert(`you can't select more than 10 seats.. 
      you have selected ${selectedSeats.length} seats.
      Please deselect ${selectedSeats.length - 10} seats`);
      setBgClick(true);
      return;
    }
    selected = selected + selectedSeats + ",";
    localStorage.setItem(location.state.movieId, selected);
  };

  function handleSeats(id) {
    if (selectedSeats.includes(id)) {
      const updatedSeats = selectedSeats.filter((seatId) => seatId !== id);
      setSelectedSeats(updatedSeats);
    } else {
      setSelectedSeats((prevSeats) => [...prevSeats, id]);
    }
  }

  const bgDisplay = {
    pointerEvents: "none",
    backgroundColor: " rgba(229, 229, 229, 0.6)",
  };
  const bgColor = {
    backgroundColor: "white",
  };

  return (
    <BookingStyles style={bgClick ? bgColor : bgDisplay}>
      <VectorImg src={vector} alt="vector" />

      <BookingTableSeats>
        <thead>
          <tr>
            <th> </th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
            <th>7</th>
            <th>8</th>
            <th>9</th>
            <th>10</th>
          </tr>
        </thead>
        <tbody>
          {data.id.map((id) => {
            return (
              <>
                <tr>
                  <SeatRow>{id}</SeatRow>
                  {data.seats.map((_, index) => {
                    return (
                      <>
                        <td
                          key={id + index}
                          onClick={() => handleSeats(id + (index + 1))}
                        >
                          {selected.includes(id + (index + 1)) ? (
                            <img src={seatBlack} alt="black" />
                          ) : selectedSeats.includes(id + (index + 1)) ? (
                            <img src={seatBlue} alt="blue" />
                          ) : (
                            <img src={seatWhite} alt="white" />
                          )}
                        </td>
                      </>
                    );
                  })}
                </tr>
              </>
            );
          })}
        </tbody>
      </BookingTableSeats>

      <ConfirmButton onClick={modalHandle}>Confirm booking</ConfirmButton>
      <article
        style={bgClick ? { pointerEvents: "none" } : { pointerEvents: "auto" }}
      >
        {modalVisible ? (
          <Modal
            location={location}
            setVisible={setModalVisible}
            selectedSeats={selectedSeats}
            setSelectedSeats={setSelectedSeats}
            setBgClick={setBgClick}
          />
        ) : (
          ""
        )}
      </article>
    </BookingStyles>
  );
}
export default BookingSeat;
