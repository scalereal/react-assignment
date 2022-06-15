import React from "react";
import { Route, Routes } from "react-router-dom";
import BookingHome from "./components/MovieBooking/BookingHome";
import MovieModal from "./components/MovieBooking/MovieModal";
import Moviehome from "./components/MovieList/Moviehome";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Moviehome />} />
        <Route path="booking/" element={<BookingHome />} />
        {/* <Route path="modal" element={<MovieModal />} /> */}
      </Routes>
    </div>
  );
}
