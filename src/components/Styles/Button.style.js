import styled from "styled-components";

export const Button =styled.button`
  font-family: "Rubik";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  background-color: #352c9a;
  color: white;
  height: 43px;
  border-style: none;
  top: 245px;
  left: 89px;
  right: 87px;
  bottom: 37px;
  width:${(props) => props.width};
  margin: ${(props) => props.margin};
  position: ${(props) => props.position};
  opacity: ${(props) => props.opacity}; 
  z-index: ${(props) => props.z_index};  
  
  &:hover {
    background-color: #724fd8;
  }
  &:active {
    text-decoration: underline;
  }
  &:disabled {
    background-color: #626262;
  }
`