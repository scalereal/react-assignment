import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "./Modal";
import vector from "../Asset/Vector 1.png";
import { BookingStyles, VectorImg } from "../styles/Booking.styled";
import MovieSeats from "./MovieSeats";
import { Button } from "../components/Button/Button";

const BookingSeat = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedSeats, setSelectedSeats] = useState([]);

  let param = useParams();
  let bookedSeats = [];

  if (JSON.stringify(localStorage.getItem(param.id)) !== "null") {
    bookedSeats = localStorage.getItem(param.id);
  }

  const modalHandle = () => {
    setModalVisible(true);
    switch (true) {
      case selectedSeats.length > 10:
        setModalVisible(false);
        alert(`you can't select more than 10 seats.. 
             you have selected ${selectedSeats.length} seats.
             Please deselect ${selectedSeats.length - 10} seats`);
        break;

      case selectedSeats.length === 0:
        setModalVisible(false);
        alert(" Please select seats first");
        break;
      default:
        bookedSeats = bookedSeats + selectedSeats + ",";
        localStorage.setItem(param.id, bookedSeats);
        bookedSeats = localStorage.getItem(param.id);
    }
  };

  return (
    <BookingStyles>
      <VectorImg src={vector} alt="vector" />
      <MovieSeats
        selectedSeats={selectedSeats}
        bookedSeats={bookedSeats}
        setSelectedSeats={setSelectedSeats}
      />
      <Button modalHandle={modalHandle} buttonText="Confirm booking"></Button>

      {modalVisible && (
        <Modal
          setVisible={setModalVisible}
          selectedSeats={selectedSeats}
          setSelectedSeats={setSelectedSeats}
        />
      )}
    </BookingStyles>
  );
};
export default BookingSeat;
