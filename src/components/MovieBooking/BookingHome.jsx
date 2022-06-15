import React from 'react'
import { useLocation } from 'react-router-dom'
import MovieSeats from './MovieSeats'
import pic from '../Assets/Vector.png'
import {SeatImgStyle,SeatMainDivStyle} from '../Styles/Seat.style'

const BookingHome = () => {
  let Location  = useLocation()
  let poster_Path = Location.state
  return (
    <SeatMainDivStyle>
        <SeatImgStyle src={pic} alt="bg"></SeatImgStyle>
        <MovieSeats Path={poster_Path} />
    </SeatMainDivStyle>
  )
}

export default BookingHome