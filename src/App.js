import React from "react";
import { Route, Routes } from "react-router-dom";
import BookingHome from "./components/MovieBooking/BookingHome";
import Moviehome from "./components/MovieList/Moviehome";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Moviehome />} />
        <Route path="/booking/:id/:title" element={<BookingHome />} />
      </Routes>
    </div>
  );
}
