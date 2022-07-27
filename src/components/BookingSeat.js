import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "./Modal";
import vector from "../Asset/Vector 1.png";
import {
  BookingStyles,
  VectorImg,
  ConfirmButton,
 } from "../styles/Booking.styled";
import MovieSeats from "./MovieSeats";

function BookingSeat() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedSeats, setSelectedSeats] = useState([]);

  let param = useParams();
  let selected = [];

  if (JSON.stringify(localStorage.getItem(param.id)) !== "null") {
    selected = localStorage.getItem(param.id);
  }

  const modalHandle = () => {
    setModalVisible(true);
    switch (selectedSeats.length > 10) {
      case true:
        setModalVisible(false);
        alert(`you can't select more than 10 seats.. 
             you have selected ${selectedSeats.length} seats.
             Please deselect ${selectedSeats.length - 10} seats`);
        break;
      default:
        switch (selectedSeats.length) {
          case 0:
            setModalVisible(false);
            alert(" Please select seats first");
            break;
          default:
            selected = selected + selectedSeats + ",";
            localStorage.setItem(param.id, selected);
            selected = localStorage.getItem(param.id)
        }
    }
  };

  return (
    <BookingStyles>
      <VectorImg src={vector} alt="vector" />
     <MovieSeats selectedSeats ={selectedSeats} 
     selected ={selected} 
     setSelectedSeats={setSelectedSeats}
     />
     <ConfirmButton onClick={modalHandle}>Confirm booking</ConfirmButton>
      <article>
        {modalVisible && (
          <Modal
            setVisible={setModalVisible}
            selectedSeats={selectedSeats}
            setSelectedSeats={setSelectedSeats}
          />
        )}
      </article>
    </BookingStyles>
  );
}
export default BookingSeat;
