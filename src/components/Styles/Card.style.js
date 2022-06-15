import styled from "styled-components";

export const HeaderStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ListHeadingStyle = styled.h1`
  font-family: "Roboto Mono";
  font-size: 48px;
  font-weight: 400;
  line-height: 63px;
  letter-spacing: 0em;
  text-align: left;
  color: #000000;
  margin: 23px 0 40px 0;
`;

export const InputBoxStyle = styled.input`
  width: 300px;
  height: 43px;
`;

export const CardDivStyle = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 149px;
  margin-top: 30px;
`;
export const CardsStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 48px 75px;
`;

export const CardStyle = styled.div`
  height: 374px;
  width: 350px;
  border-radius: 20px;
  background: #ffffff;
  box-shadow: 0px 10px 20px 5px rgba(0, 0, 0, 0.25);
  position: relative;
`;

export const ImageStyle = styled.img`
  width: 350px;
  height: 374px;
  border-radius: 20px;
  
`;
export const TitleStyle = styled.h1`
  position: absolute;
  left: 31.43%;
  right: 31.43%;
  top: 42.51%;
  bottom: 50%;
  font-family: "Rubik";
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0.004em;
  color: #ffffff;
`;

export const ButtonStyle = styled.button`
  position: absolute;
  top: 287px;
  left: 103px;
  right: 102px;
  bottom: 56px;  

  font-family: "Rubik";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.004em;
  background-color: #352c9a;
  color: white;
  width: 145px;
  height: 43px;
  border-style: none;
`;
