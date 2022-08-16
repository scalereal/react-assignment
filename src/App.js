import React from "react";
import {Routes, Route} from "react-router-dom";
import HomePage from "../src/components/HomePage";
import  BookingSeat from "../src/components/BookingSeat";
function App() {
  return (
    <>
      <Routes>
  <Route path="/" element={<HomePage/>}/>
  <Route path="/book/:id/:title" element={<BookingSeat/>}/>
      </Routes>

    </>
  );
}

export default App;
