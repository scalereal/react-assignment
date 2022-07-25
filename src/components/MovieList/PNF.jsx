import React from "react";
import PNF_img from "../Assets/pageNotFound.png";
import { HeadingPNF, PNFImage, PNFMainDiv } from "../Styles/PNF.style.js";

const PNF = () => {
  return (
    <PNFMainDiv>
      <HeadingPNF>Sorry,there is no result for keyword you searched</HeadingPNF>
      <PNFImage src={PNF_img} alt="vector" />
    </PNFMainDiv>
  );
};

export default PNF;
