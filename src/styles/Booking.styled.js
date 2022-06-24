import styled from "styled-components";

export const BookingStyles = styled.article`
display:flex;
flex-direction:column;
align-items:center;
position:relative;
  `
export const VectorImg = styled.img`
  height:129px;
  width:1082px;
  margin: 46px auto 0px auto;

`
export const ConfirmButton= styled.button`
background: #352C9A;
padding: 12px 30px;
color:#ffffff;
font-family: 'Rubik';
font-style: normal;
font-weight: 500;
font-size: 16px;
margin: 109px 0 152px 0;
`
export const BookingTableSeats= styled.table`

margin:75px auto 0 auto;

th{
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 48px;
padding-bottom:44px;
}
`
export const SeatRow = styled.td`
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 48px;
padding-right:59px;
`

// modal designs

export const ModalStyle = styled.article`
position: absolute;
width: 640px;
height: 578px;
background-color: #ffffff;
top: 300px;
left: 500px;
border-radius: 8px;
`
export const CloseButton = styled.img`
float: right;
border: none;
background-color: white;
margin-right: 22px;
margin-top: 18px;
`
export const MoviePic = styled.img`
width: 200px;
height: 327px;
border-radius: 20px;
box-shadow: 0px 10px 20px 5px rgba(0, 0, 0, 0.25);
`
export const ModalH1 = styled.h1`
font-family: 'Rubik';
font-style: normal;
font-weight: 600;
font-size: 40px;
text-align: center;
`
export const ModalH3 = styled.h3`
font-family: 'Rubik';
font-style: normal;
font-weight: 600;
font-size: 18px;
text-align: center;
`
export const ModalH5 = styled.h5`
font-family: 'Rubik';
font-style: normal;
font-weight: 600;
font-size: 18px;
`
export const ModalSmall = styled.small`
font-family: 'Rubik';
font-style: normal;
font-weight: 500;
font-size: 12px;
width: 71px;
height: 14.06px;
`
export const DataFlex = styled.article`
display: flex;
justify-content: space-between;
margin: 0px;
`