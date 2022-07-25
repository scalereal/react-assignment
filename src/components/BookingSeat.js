import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "./Modal";
import SvgImg from "../Asset/SvgImg";
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
        }
    }
  };

  function handleSeats(id) {
    if (selectedSeats.includes(id)) {
      const updatedSeats = selectedSeats.filter((seatId) => seatId !== id);
      setSelectedSeats(updatedSeats);
    } else {
      setSelectedSeats((prevSeats) => [...prevSeats, id]);
    }
  }

  return (
    <BookingStyles>
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
