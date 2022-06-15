import React from 'react'
import { ModelStyle,ImageStyles,ModeldataFlex,HeadingStyle,Heading5Style } from '../Styles/Modal.styles';
const MovieModal = ({propsData}) => {
    const {Poster_path,Fun} = propsData
    const IMG_URL = "https://image.tmdb.org/t/p/w500";
    const CloseModal = ()=>{
              Fun(false)
    }
  return (
    <ModelStyle>
        <button onClick={CloseModal}>x</button>
        <HeadingStyle>Thank you for booking</HeadingStyle>
        <Heading5Style>Order Summary</Heading5Style>
        <ModeldataFlex>
        <div>
            <ImageStyles src={IMG_URL+Poster_path} alt="batman" />
        </div>
        <div>
            <h3>Seats:</h3>
            <h1>C2,C3,C4</h1>
        <ModeldataFlex>
            <div>
                <h5>3*250:</h5>
                <span>SGST(12%):</span><br />
                <span>CGST(12%):</span>
            </div>
            <div>
                <h5>750</h5>
                <span>90</span><br />
                <span>90</span>
            </div>
            </ModeldataFlex>
            <hr />
            <ModeldataFlex>
                <h5>Total:</h5>
                <h5>930</h5>
            </ModeldataFlex>
        </div>
        </ModeldataFlex>

    </ModelStyle>
        

  )
}

export default MovieModal